import express from "express";

import { getCustomers } from "../controllers/customers.js";
import Customer from "../models/Customer.js";

// Middleware
import advancedResults from "../middleware/advancedResults.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(advancedResults(Customer), getCustomers);

export default router;
