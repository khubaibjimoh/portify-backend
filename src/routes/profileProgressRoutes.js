import express from "express";
import { getMyProfileProgress } from "../controllers/profileProgressController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getMyProfileProgress);

export default router;
