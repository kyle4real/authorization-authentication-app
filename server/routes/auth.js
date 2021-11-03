import express from "express";

import { login, logout, refreshToken, register } from "../controllers/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/refresh_token").post(refreshToken);
router.route("/logout").get(logout);

export default router;
