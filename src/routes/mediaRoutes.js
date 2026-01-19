import express from "express";
import {
  uploadSingle,
  uploadMultiple,
} from "../controllers/mediaController.js";
import { upload } from "../middleware/multer.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/single", protect, upload.single("file"), uploadSingle);
router.post("/multiple", protect, upload.array("files", 5), uploadMultiple);

export default router;
