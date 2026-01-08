import express from "express";
import {
  createSkill,
  getUserSkill,
  updateSkill,
  deleteSkill,
  getSkillById,
} from "../controllers/skillController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.post("/", createSkill);
router.get("/me", getUserSkill);
router.get("/:id", getSkillById);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;
