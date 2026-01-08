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
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Log file object to see the Cloudinary response
    console.log("Uploaded file object:", req.file);

    // If user already has an avatar → delete old one
    if (req.user.avatarPublicId) {
      await cloudinary.uploader.destroy(req.user.avatarPublicId);
    }

    // Multer-storage-cloudinary returns these properties:
    const imageUrl = req.file.path;       // full URL
    const publicId = req.file.filename;   // public_id used for deletion

    req.user.avatar = imageUrl;
    req.user.avatarPublicId = publicId;

    await req.user.save();

    res.status(200).json({
      success: true,
      message: "Avatar uploaded successfully",
      avatar: imageUrl,
    });
  } catch (error) {
    console.error("Upload avatar error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
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