import PersonalInfo from "../models/personalInfoModel.js";

export const createPersonalInfo = async (req, res) => {
  try {
    const data = { ...req.body, owner: req.user.id };
    const personalInfo = await PersonalInfo.create(data);
    res.status(201).json(personalInfo);
  } catch (error) {
    console.error("Create personalInfo error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getUserPersonalInfo = async (req, res) => {
  try {
    const personalInfos = await PersonalInfo.find({ owner: req.user.id });
    res.json(personalInfos);
  } catch (error) {
    console.error("Create personalInfo error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getPersonalInfoById = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOne({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!personalInfo) return res.status(404).json({ message: "Not found" });
    res.json(personalInfo);
  } catch (error) {
    console.error("Get personalInfo error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const updatePersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );
    if (!personalInfo) return res.status(404).json({ message: "Not found" });
    res.json(personalInfo);
  } catch (error) {
    console.error("Create personalInfo error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deletePersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!personalInfo) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Create personalInfo error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
