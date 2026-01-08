import Education from "../models/educationModel.js";

export const createEducation = async (req, res) => {
  try {
    const data = { ...req.body, owner: req.user.id };
    const education = await Education.create(data);
    res.status(201).json(education);
  } catch (error) {
    console.error("Create education error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getUserEducation = async (req, res) => {
  try {
    const educations = await Education.find({ owner: req.user.id });
    res.json(educations);
  } catch (error) {
    console.error("Create education error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getEducationById = async (req, res) => {
  try {
    const education = await Education.findOne({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!education) return res.status(404).json({ message: "Not found" });
    res.json(education);
  } catch (error) {
    console.error("Get education error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );
    if (!education) return res.status(404).json({ message: "Not found" });
    res.json(education);
  } catch (error) {
    console.error("Create education error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!education) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Create education error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
