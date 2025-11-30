import express from "express";
import {
  createProject,
  getUserProject,
  updateProject,
  deleteProject,
  getProjectById,
} from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.use(protect);
router.post("/", createProject);
router.post("/:id/images", upload.array("images", 10));
router.get("/me", getUserProject);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
