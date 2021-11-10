import express from "express";

import { getCustomers, createCustomer } from "../controllers/customers.js";
import Customer from "../models/Customer.js";

// Middleware
import advancedResults from "../middleware/advancedResults.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);
// router.use(authorize("admin"));

router.route("/").get(advancedResults(Customer), getCustomers).post(createCustomer);

export default router;
