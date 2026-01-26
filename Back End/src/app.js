import express from "express";
import cors from "cors";

import healthRoutes from "./routes/health.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import leadsRoutes from "./modules/leads/leads.routes.js";
import { notFoundHandler } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json({ limit: "200kb" }));

const allowlist = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    if (allowlist.length === 0 || allowlist.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use("/health", healthRoutes);
app.use("/api/leads", leadsRoutes);
app.use("/contact", contactRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
