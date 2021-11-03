import asyncHandler from "./../middleware/asyncHandler.js";

// @desc    Get all customers
// @route   GET /api/v1/customers/
// @access  Private
export const getCustomers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});
