import Others from "../models/othersModel.js";

export const createOthers = async (req, res) => {
  try {
    const data = { ...req.body, owner: req.user.id };
    const others = await Others.create(data);
    res.status(201).json(others);
  } catch (error) {
    console.error("Create others error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getUserOthers = async (req, res) => {
  try {
    const otherss = await Others.find({ owner: req.user.id });
    res.json(otherss);
  } catch (error) {
    console.error("Create others error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getOthersById = async (req, res) => {
  try {
    const others = await Others.findOne({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!others) return res.status(404).json({ message: "Not found" });
    res.json(others);
  } catch (error) {
    console.error("Get others error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const updateOthers = async (req, res) => {
  try {
    const others = await Others.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );
    if (!others) return res.status(404).json({ message: "Not found" });
    res.json(others);
  } catch (error) {
    console.error("Create others error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteOthers = async (req, res) => {
  try {
    const others = await Others.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });
    if (!others) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (error) {
    console.error("Create others error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
