import express from "express";

import { getMe, login, logout, refreshToken, register } from "../controllers/auth.js";

// Middleware
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/refresh_token").post(refreshToken);
router.route("/logout").get(logout);
router.route("/me").get(protect, getMe);

export default router;
