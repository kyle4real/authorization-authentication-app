import express from "express";

import { getUsers } from "../controllers/users.js";

import advancedResults from "../middleware/advancedResults.js";
import User from "../models/User.js";

const router = express.Router();

router.route("/").get(advancedResults(User), getUsers);

export default router;
