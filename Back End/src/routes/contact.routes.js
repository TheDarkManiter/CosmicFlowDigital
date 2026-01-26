import { Router } from "express";

import leadsRoutes from "../modules/leads/leads.routes.js";
import { postContactRequest } from "../controllers/contact_requests.controller.js";

const router = Router();

router.post("/legacy", postContactRequest);
router.use("/", leadsRoutes);

export default router;
