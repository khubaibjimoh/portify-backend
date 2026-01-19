import express from "express";
import {
  createPortfolio,
  getMyPortfolio,
  getPublicPortfolio,
  updatePortfolio,
} from "../controllers/portfolioController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, createPortfolio);
router.get("/me", protect, getMyPortfolio);
router.get("/:slug", getPublicPortfolio);
router.put("/", protect, updatePortfolio);

export default router;
