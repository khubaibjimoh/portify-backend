import {
  uploadToCloudinary,
  uploadMultipleToCloudinary,
} from "../services/MediaService.js";

export const uploadSingle = async (req, res, next) => {
  try {
    // SINGLE FILE
    if (req.file) {
      const result = await uploadToCloudinary(req.file);

      return res.status(201).json({
        success: true,
        file: result,
      });
    }

    return res.status(400).json({ message: "No file uploaded" });
  } catch (error) {
    next(error);
  }
};

export const uploadMultiple = async (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }
    const results = await uploadMultipleToCloudinary(req.files);
    return res.status(201).json({
      success: true,
      files: results,
    });
  } catch (error) {
    next(error);
  }
};
