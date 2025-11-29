import express from "express";
import {
  createPublicPortfolio,
  createPrivatePortfolio,
} from "../controllers/portfolioController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:username", createPublicPortfolio);
router.get("/me", protect, createPrivatePortfolio);

export default router;
