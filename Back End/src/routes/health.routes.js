import { Router } from "express";

import { getHealth, getHealthDb } from "../controllers/health.controller.js";

const router = Router();

router.get("/", getHealth);
router.get("/db", getHealthDb);

export default router;
