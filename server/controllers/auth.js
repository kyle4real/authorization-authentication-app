import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/async.js";
import ErrorResponse from "./../utils/errorResponse.js";
// import sendEmail from "../utils/sendEmail.js";
import User from "./../models/User.js";

import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

// @desc    Register User
// @route   POST /api/auth/register/
// @access  Public
export const register = asyncHandler(async (req, res, next) => {
    const { name, email, password, role } = req.body;

    // Create user
    const user = await User.create({
        name,
        email,
        password,
        role,
    });

    sendTokenResponse(user, 200, res);
});

// @desc    Login User
// @route   POST /api/auth/login/
// @access  Public
export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // Validate email & password
    // @note-to-self    the reason we need to validate this and not the prior controller is because the prior controller uses the model to validate
    if (!email || !password) {
        return next(new ErrorResponse(`Please provide an email and password`, 400));
    }

    // Check for user
    // @note-to-self    the select is used here because in the model we have the password field select set to false, though we need to access it here
    const user = await User.findOne({ email }).select(`+password`);
    if (!user) {
        return next(new ErrorResponse(`Invalid credentials`, 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        return next(new ErrorResponse(`Invalid credentials`, 401));
    }

    sendTokenResponse(user, 200, res);
});

// @desc    Refresh Token
// @route   POST /api/auth/refresh_token/
// @access  Public
export const refreshToken = asyncHandler(async (req, res, next) => {
    const refresh_token = req.cookies.refresh_token;

    if (!refresh_token) {
        return next(new ErrorResponse(`No refresh token detected`, 401));
    }

    const payload = jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET);

    if (!payload) {
        return next(new ErrorResponse(`Invalid refresh token`, 401));
    }

    // token is valid and we can send back token response
    const user = await User.findById(payload.id);

    if (!user) {
        return next(new ErrorResponse(`User not found`, 401));
    }
    if (user.refreshTokenVersion !== payload.tokenVersion) {
        return next(new ErrorResponse(`Invalid refresh token`, 401));
    }

    sendTokenResponse(user, 200, res);
});

// @desc    Revoke refresh tokens for user
// @route   POST /api/auth/revoke_refresh_tokens/:userId
// @access  Private
export const revokeRefreshTokens = asyncHandler(async (req, res, next) => {
    const userId = req.params.userId;

    let user = await User.findById(userId);

    if (!user) {
        return next(new ErrorResponse(`User not found`, 401));
    }

    user.refreshTokenVersion = user.refreshTokenVersion + 1;
    await user.save();

    res.status(200).json({ success: true, data: {} });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create access token
    const accessToken = user.createAccessToken();
    // Create refresh token
    const refreshToken = user.createRefreshToken();

    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 60 * 60 * 1000),
        httpOnly: true,
    };

    if (process.env.NODE_ENV === "production") {
        options.secure = true;
    }

    res.status(statusCode)
        .cookie("refresh_token", refreshToken, options)
        .json({ success: true, data: { accessToken } });
};

// @desc    Get current logged in user
// @route   POST /api/auth/me/
// @access  Private
export const getMe = asyncHandler(async (req, res, next) => {
    // @note-to-self    req.user.id is accessable on account of the auth middleware
    const user = await User.findById(req.user.id);

    if (!user) {
        return next(new ErrorResponse(`Unable to get user`, 403));
    }

    res.status(200).json({ success: true, data: user });
});

// @desc    Logout user / clear cookie
// @route   GET /api/auth/logout/
// @access  Private
export const logout = asyncHandler(async (req, res, next) => {
    res.cookie("refresh_token", "none", {
        expires: new Date(Date.now() + 1000),
        httpOnly: true,
    });

    res.status(200).json({ success: true, data: {} });
});
