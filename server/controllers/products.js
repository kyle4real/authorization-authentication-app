import asyncHandler from "../middleware/async.js";
import ErrorResponse from "./../utils/errorResponse.js";
import Product from "../models/Product.js";

// @desc    Get all products
// @route   GET /api/v1/products/
// @access  Private
export const getProducts = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Private
export const getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 400));
    }

    res.status(200).json({ success: true, data: product });
});

// @desc    Create product
// @route   POST /api/v1/products/
// @access  Private
export const createProduct = asyncHandler(async (req, res, next) => {
    const product = new Product(req.body);
    await product.save();

    res.status(200).json({ success: true, data: product });
});
