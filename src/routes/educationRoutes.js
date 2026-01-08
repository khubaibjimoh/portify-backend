import express from "express";
import {
  createEducation,
  getUserEducation,
  updateEducation,
  deleteEducation,
  getEducationById,
} from "../controllers/educationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.post("/", createEducation);
router.get("/me", getUserEducation);
router.get("/:id", getEducationById);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducation);

export default router;
