import asyncHandler from "../middleware/async.js";
import Product from "../models/Product.js";

// @desc    Get all products
// @route   GET /api/v1/products/
// @access  Private
export const getProducts = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc    Create product
// @route   POST /api/v1/products/
// @access  Private
export const createProduct = asyncHandler(async (req, res, next) => {
    const product = new Product(req.body);
    await product.save();

    res.status(200).json({ success: true, data: product });
});
