import asyncHandler from "../middleware/async.js";

// @desc    Get all products
// @route   GET /api/v1/products/
// @access  Private
export const getProducts = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});
