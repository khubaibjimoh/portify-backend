import express from "express";
import {
  registerUser,
  loginUser,
  verifyUser,
} from "../controllers/authController.js";
import {
  getMe,
  uploadAvatar,
  deleteAvatar,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";
import { uploadFile } from "../middleware/multer.js";

const router = express.Router();

// AUTH
router.post("/register", registerUser);
router.post("/verify", verifyUser);
router.post("/login", loginUser);

// AVATAR UPLOAD (User uploads a profile picture)
router.post("/me/avatar", protect, uploadFile, uploadAvatar);

// USER PROFILE
router.get("/me", protect, getMe);

// AVATAR DELETE (User deletes their profile picture)
router.delete("/me/avatar", protect, deleteAvatar);

export default router;
