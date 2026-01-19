import express from "express";
import {
  createCompany,
  getMyCompany,
} from "../controllers/companyController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createCompany);
router.get("/", protect, getMyCompany);

export default router;
