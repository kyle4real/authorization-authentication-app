import asyncHandler from "../middleware/async.js";

// @desc    Get all sales
// @route   GET /api/v1/sales/
// @access  Private
export const getSales = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});
