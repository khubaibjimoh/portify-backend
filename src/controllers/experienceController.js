import Experience from "../models/experienceModel.js";

export const createExperience = async (req, res) => {
  try {
    const data = { ...req.body, user: req.user.id };
    const experience = await Experience.create(data);
    res.status(201).json(experience);
  } catch (error) {
    console.error("Create experience error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getUserExperience = async (req, res) => {
  try {
    const experiences = await Experience.find({ user: req.user.id });
    res.json(experiences);
  } catch (error) {
    console.error("Create experience error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findOne({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!experience) return res.status(404).json({ message: "Not found" });
    res.json(experience);
  } catch (error) {
    console.error("Get experience error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true },
    );
    if (!experience) return res.status(404).json({ message: "Not found" });
    res.json(experience);
  } catch (error) {
    console.error("Create experience error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!experience) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Create experience error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
