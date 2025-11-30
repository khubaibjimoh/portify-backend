import User from "../models/userModel.js";
import Project from "../models/projectModel.js";
import Template from "../models/projectModel.js";

export const createPublicPortfolio = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({
      email: new RegExp(`^${username}@`, "i"),
    }).select("-password");
    if (!user) return res.status(404).json({ message: "Not found" });
    const projects = await Project.find({ owner: user._id });
    const template = await Template.findOne({ owner: user._id });
    res.json({ profile: user, projects, template });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const createPrivatePortfolio = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const projects = await Project.find({ owner: req.user.id });
    const template = await Template.findOne({ owner: req.user.id });
    res.json({ profile: user, projects, template });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
