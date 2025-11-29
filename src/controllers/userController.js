import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

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

export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const imageUrl = await uploadToCloudinary(req.file.path);

    req.user.avatar = imageUrl;
    await req.user.save();

    res.json({ message: "Avatar uploaded", avatar: imageUrl });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
