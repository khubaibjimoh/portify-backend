import express from "express";
import {
  createTemplate,
  getUserTemplate,
  updateTemplate,
  deleteTemplate,
} from "../controllers/templateController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.post("/", createTemplate);
router.get("/me", getUserTemplate);
router.put("/me", updateTemplate);
router.delete("/me", deleteTemplate);

export default router;
