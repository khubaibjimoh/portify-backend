import Template from "../models/projectModel.js";

export const createTemplate = async (req, res) => {
  try {
    const { name, config } = req.body;
    let template = await Template.findOne({ owner: req.user.id });
    if (template) {
      template.name = name || template.name;
      template.config = config || template.config;
      await template.save();
    } else {
      template = await Template.create({ owner: req.user.id, name, config });
    }
    res.json(template);
  } catch (error) {
    console.error("Create template error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getUserTemplate = async (req, res) => {
  try {
    const templates = await Template.find({ owner: req.user.id });
    res.json(templates);
  } catch (error) {
    console.error("Create template error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getTemplateById = async (req, res) => {
  try {
    const template = await Template.findOne({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!template) return res.status(404).json({ message: "Not found" });
    res.json(template);
  } catch (error) {
    console.error("Get template error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const updateTemplate = async (req, res) => {
  try {
    const template = await Template.findOneAndUpdate(
      { owner: req.user.id },
      req.body,
      { new: true, upsert: true }
    );
    if (!template) return res.status(404).json({ message: "Not found" });
    res.json(template);
  } catch (error) {
    console.error("Create template error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteTemplate = async (req, res) => {
  try {
    const template = await Template.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!template) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Create template error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
