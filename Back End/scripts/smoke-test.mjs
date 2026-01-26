import { spawn, spawnSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { Client } from "pg";

const DATABASE_URL = process.env.DATABASE_URL;
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3100";
const SHOULD_START_SERVER = !process.env.API_BASE_URL;
const SERVER_PORT = new URL(API_BASE_URL).port || "3100";

const results = [];
const logPass = (msg) => results.push({ status: "PASS", msg });
const logFail = (msg) => results.push({ status: "FAIL", msg });
const logWarn = (msg) => results.push({ status: "WARN", msg });

function printResultsAndExit(code) {
  for (const item of results) {
    console.log(`[${item.status}] ${item.msg}`);
  }
  process.exit(code);
}

async function waitForHealth(url, timeoutMs = 8000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${url}/health`);
      if (res.ok) {
        return true;
      }
    } catch {
      // ignore
    }
    await delay(300);
  }
  return false;
}

function tryDockerComposeUp() {
  try {
    const result = spawnSync("docker", ["compose", "up", "-d"], {
      stdio: "ignore",
      shell: true,
    });
    return result.status === 0;
  } catch {
    return false;
  }
}

async function main() {
  if (!DATABASE_URL) {
    logFail("DATABASE_URL is not set.");
    return printResultsAndExit(1);
  }

  const dockerAttempted = tryDockerComposeUp();
  if (dockerAttempted) {
    logPass("docker compose up -d executed.");
  } else {
    logWarn("docker compose up -d not executed or failed. Ensure DB is running.");
  }

  const dbClient = new Client({ connectionString: DATABASE_URL });
  try {
    await dbClient.connect();
    logPass("Connected to database.");
  } catch (error) {
    logFail(`Database connection failed: ${error.message}`);
    return printResultsAndExit(1);
  }

  let serverProcess = null;
  if (SHOULD_START_SERVER) {
    serverProcess = spawn("node", ["src/server.js"], {
      env: {
        ...process.env,
        PORT: SERVER_PORT,
        DATABASE_URL,
      },
      stdio: "ignore",
      shell: true,
    });

    const healthy = await waitForHealth(API_BASE_URL);
    if (!healthy) {
      logFail(`Backend did not become healthy at ${API_BASE_URL}/health`);
      await dbClient.end();
      if (serverProcess) {
        serverProcess.kill();
      }
      return printResultsAndExit(1);
    }
    logPass("Backend is healthy.");
  } else {
    const healthy = await waitForHealth(API_BASE_URL);
    if (!healthy) {
      logFail(`Backend not reachable at ${API_BASE_URL}/health`);
      await dbClient.end();
      return printResultsAndExit(1);
    }
    logPass("Backend is healthy (external).");
  }

  const payload = {
    package_slug: "web-landing-basic",
    business: "Smoke Test",
    objective: "Generar leads",
    name: "Smoke Test",
    whatsapp: "5550001111",
    email: "smoke@example.com",
    message: "smoke-test",
    consent: true,
  };

  let createdId = null;
  try {
    const response = await fetch(`${API_BASE_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok || !data.ok || !data.id || !data.created_at) {
      logFail("POST /api/leads did not return expected ok response.");
    } else {
      createdId = data.id;
      logPass("POST /api/leads returned ok response.");
    }
  } catch (error) {
    logFail(`POST /api/leads failed: ${error.message}`);
  }

  if (createdId) {
    try {
      const result = await dbClient.query(
        "SELECT id FROM leads WHERE id = $1",
        [createdId]
      );
      if (result.rows.length === 1) {
        logPass("Database contains created lead.");
        try {
          await dbClient.query("DELETE FROM leads WHERE id = $1", [createdId]);
          logPass("Cleanup: deleted created lead.");
        } catch (error) {
          logWarn(`Cleanup failed: ${error.message}`);
        }
      } else {
        logFail("Database does not contain created lead.");
      }
    } catch (error) {
      logFail(`Database validation failed: ${error.message}`);
    }
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, consent: false }),
    });
    const data = await response.json();
    if (response.status === 400 && data.error === "VALIDATION_ERROR") {
      logPass("Validation error returned for consent=false.");
    } else {
      logFail("Expected 400 VALIDATION_ERROR for consent=false.");
    }
  } catch (error) {
    logFail(`Invalid payload test failed: ${error.message}`);
  }

  try {
    const contactPath = resolve("..", "Front End", "src", "pages", "Contact.jsx");
    if (existsSync(contactPath)) {
      const content = readFileSync(contactPath, "utf8");
      if (content.includes("/api/leads") && content.includes("VITE_API_BASE_URL")) {
        logPass("Frontend Contact.jsx contains API lead submission.");
      } else {
        logWarn("Frontend Contact.jsx missing expected API submission strings.");
      }
    } else {
      logWarn("Frontend Contact.jsx not found for optional check.");
    }
  } catch (error) {
    logWarn(`Frontend check skipped: ${error.message}`);
  }

  await dbClient.end();
  if (serverProcess) {
    serverProcess.kill();
  }

  const failed = results.some((item) => item.status === "FAIL");
  printResultsAndExit(failed ? 1 : 0);
}

main();
