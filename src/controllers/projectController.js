import Project from "../models/projectModel.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

export const createProject = async (req, res) => {
  try {
    const data = { ...req.body, owner: req.user.id };
    const project = await Project.create(data);
    res.status(201).json(project);
  } catch (error) {
    console.error("Create project error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const uploadProjectImage = async (req, res) => {
  try {
    if (!req.files)
      return res.status(400).json({ message: "No images uploaded" });

    const files = req.files;

    const uploadedImages = [];

    for (const file of files) {
      const url = await uploadToCloudinary(file.path);
      uploadedImages.push(url);
    }

    // Push into project model
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!project) return res.status(404).json({ message: "Project not found" });

    project.images.push(...uploadedImages);
    await project.save();

    res.json({ message: "Images uploaded", images: uploadedImages });
  } catch (error) {
    console.error("Create project error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getUserProject = async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.user.id });
    res.json(projects);
  } catch (error) {
    console.error("Create project error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json(project);
  } catch (error) {
    console.error("Get project error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json(project);
  } catch (error) {
    console.error("Create project error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Create project error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
