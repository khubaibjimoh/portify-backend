import express from "express";
import {
  createATSReport,
  getMyATSReports,
} from "../controllers/atsController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createATSReport);
router.get("/", protect, getMyATSReports);

export default router;
