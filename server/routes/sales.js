import express from "express";

import { getSales } from "../controllers/sales.js";
import Sale from "../models/Sale.js";

// Middleware
import advancedResults from "../middleware/advancedResults.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(advancedResults(Sale), getSales);

export default router;
