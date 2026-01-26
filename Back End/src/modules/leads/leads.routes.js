import { Router } from "express";
import rateLimit from "express-rate-limit";

import { postLead } from "./leads.controller.js";

const router = Router();

const writeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "RATE_LIMITED" },
});

router.post("/", writeLimiter, postLead);

export default router;
