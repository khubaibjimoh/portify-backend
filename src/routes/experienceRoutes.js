import express from "express";
import {
  createExperience,
  getUserExperience,
  updateExperience,
  deleteExperience,
  getExperienceById,
} from "../controllers/experienceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.post("/", createExperience);
router.get("/me", getUserExperience);
router.get("/:id", getExperienceById);
router.put("/:id", updateExperience);
router.delete("/:id", deleteExperience);

export default router;
