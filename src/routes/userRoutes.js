import express from "express";
import {
  registerUser,
  loginUser,
  verifyUser,
} from "../controllers/authController.js";
import { getMe, updateMe } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// AUTH
router.post("/register", registerUser);
router.post("/verify", verifyUser);
router.post("/login", loginUser);

// USER PROFILE
router.get("/me", protect, getMe);

router.patch("/me", protect, updateMe);

export default router;
