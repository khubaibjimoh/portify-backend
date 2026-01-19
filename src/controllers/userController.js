import cloudinary from "../config/cloudinary.js";

// =========================
// GET USER PROFILE
// =========================
export const getMe = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// =========================
// UPLOAD / UPDATE AVATAR
// =========================
export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (!req.file.mimetype.startsWith("image/")) {
      return res.status(400).json({ message: "Avatar must be an image" });
    }

    if (req.user.avatarPublicId) {
      await cloudinary.uploader.destroy(req.user.avatarPublicId);
    }

    req.user.avatar = req.file.path;
    req.user.avatarPublicId = req.file.filename;
    await req.user.save();

    res.json({ success: true, avatar: req.user.avatar });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// =========================
// DELETE AVATAR
// =========================
export const deleteAvatar = async (req, res) => {
  try {
    if (!req.user.avatarPublicId) {
      return res.status(400).json({
        success: false,
        message: "You do not have an avatar",
      });
    }

    // Delete from Cloudinary using public_id
    await cloudinary.uploader.destroy(req.user.avatarPublicId);

    req.user.avatar = "";
    req.user.avatarPublicId = "";
    await req.user.save();

    res.status(200).json({
      success: true,
      message: "Avatar deleted successfully",
    });
  } catch (error) {
    console.error("Delete avatar error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
