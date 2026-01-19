import Certification from "../models/certificationModel.js";

export const createCertification = async (req, res) => {
  try {
    const data = { ...req.body, user: req.user.id };
    const certification = await Certification.create(data);
    res.status(201).json(certification);
  } catch (error) {
    console.error("Create certification error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getUserCertification = async (req, res) => {
  try {
    const certifications = await Certification.find({ user: req.user.id });
    res.json(certifications);
  } catch (error) {
    console.error("Create certification error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getCertificationById = async (req, res) => {
  try {
    const certification = await Certification.findOne({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!certification) return res.status(404).json({ message: "Not found" });
    res.json(certification);
  } catch (error) {
    console.error("Get certification error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const updateCertification = async (req, res) => {
  try {
    const certification = await Certification.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true },
    );
    if (!certification) return res.status(404).json({ message: "Not found" });
    res.json(certification);
  } catch (error) {
    console.error("Create certification error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteCertification = async (req, res) => {
  try {
    const certification = await Certification.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!certification) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Create certification error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
