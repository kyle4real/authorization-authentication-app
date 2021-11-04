import asyncHandler from "../middleware/async.js";

// @desc    Get all users
// @route   GET /api/v1/users/
// @access  Private
export const getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});
