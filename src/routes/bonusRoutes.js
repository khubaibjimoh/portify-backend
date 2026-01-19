import express from "express";
import { getMyBonuses } from "../controllers/bonusController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getMyBonuses);

export default router;
