import pool from "../db/pool.js";

export function getHealth(_req, res) {
  res.status(200).json({ status: "ok", service: "cosmic-flow-digital-backend" });
}

export async function getHealthDb(_req, res, next) {
  try {
    const result = await pool.query("SELECT NOW() AS now");
    res.status(200).json({ status: "ok", db: "connected", now: result.rows[0].now });
  } catch (error) {
    next(error);
  }
}
