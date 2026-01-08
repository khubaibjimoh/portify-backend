import express from "express";
import {
  createPersonalInfo,
  getUserPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
  getPersonalInfoById,
} from "../controllers/personalInfoController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.post("/", createPersonalInfo);
router.get("/me", getUserPersonalInfo);
router.get("/:id", getPersonalInfoById);
router.put("/:id", updatePersonalInfo);
router.delete("/:id", deletePersonalInfo);

export default router;
