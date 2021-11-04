import asyncHandler from "../middleware/async.js";
import Customer from "../models/Customer.js";

// @desc    Get all customers
// @route   GET /api/v1/customers/
// @access  Private
export const getCustomers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc    Create customer
// @route   POST /api/v1/customers/
// @access  Private
export const createCustomer = asyncHandler(async (req, res, next) => {
    const customer = new Customer(req.body);
    await customer.save();

    res.status(200).json({ success: true, data: customer });
});
