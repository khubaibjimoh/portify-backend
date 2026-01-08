import express from "express";
import {
  registerUser,
  loginUser,
  verifyUser,
} from "../controllers/authController.js";
import { getMe, uploadAvatar } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify", verifyUser);
router.post("/login", loginUser);
router.post("/me/avatar", protect, upload.single("avatar"), uploadAvatar);
router.get("/me", protect, getMe);
// router.get("/me", protect, (req, res) => {
//   res.json({
//     success: true,
//     user: req.user,
//   });
// });

export default router;
