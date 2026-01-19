import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isImage = file.mimetype.startsWith("image/");
    const isDoc = file.mimetype === "application/pdf";

    return {
      folder: isImage ? "uploads/avatars" : "uploads/documents",
      resource_type: isImage ? "image" : "raw",
      public_id: `${req.user._id}_${Date.now()}`,
      allowed_formats: isImage ? ["jpg", "jpeg", "png", "webp"] : ["pdf"],
      transformation: isImage
        ? [{ width: 400, height: 400, crop: "fill" }]
        : undefined,
    };
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

export const uploadFile = (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res.status(400).json({
        success: false,
        message: err.message || "Upload failed",
      });
    }
    next();
  });
};
