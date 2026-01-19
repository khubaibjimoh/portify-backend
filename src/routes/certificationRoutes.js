import express from "express";
import {
  createCertification,
  getUserCertification,
  updateCertification,
  deleteCertification,
  getCertificationById,
} from "../controllers/certificationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.post("/", createCertification);
router.get("/me", getUserCertification);
router.get("/:id", getCertificationById);
router.put("/:id", updateCertification);
router.delete("/:id", deleteCertification);

export default router;
