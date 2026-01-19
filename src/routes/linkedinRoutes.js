import express from "express";
import {
  createLinkedInOptimization,
  getMyLinkedInOptimization,
} from "../controllers/linkedinController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createLinkedInOptimization);
router.get("/", protect, getMyLinkedInOptimization);

export default router;
