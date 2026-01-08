import express from "express";
import {
  createOthers,
  getUserOthers,
  updateOthers,
  deleteOthers,
  getOthersById,
} from "../controllers/othersController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.post("/", createOthers);
router.get("/me", getUserOthers);
router.get("/:id", getOthersById);
router.put("/:id", updateOthers);
router.delete("/:id", deleteOthers);

export default router;
