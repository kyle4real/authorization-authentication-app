import express from "express";

import { getProducts } from "../controllers/products.js";
import Product from "../models/Product.js";

// Middleware
import advancedResults from "../middleware/advancedResults.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(advancedResults(Product), getProducts);

export default router;
