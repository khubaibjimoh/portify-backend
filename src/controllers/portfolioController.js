import User from "../models/userModel.js";
import Project from "../models/projectModel.js";
import Template from "../models/projectModel.js";
import Portfolio from "../models/portfolioModel.js";

export const createPortfolio = async (req, res) => {
  try {
    const existingUser = await User.findOne({ user: req.user.id });

    const slug = existingUser.username;

    const portfolio = await Portfolio.create({
      user: req.user.id,
      slug,
    });

    res.status(201).json(portfolio);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyPortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOne({ user: req.user.id });
  res.json(portfolio);
};

export const getPublicPortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOne({ slug: req.params.slug });
  if (!portfolio) return res.status(404).json({ message: "Not found" });

  const userId = portfolio.user;

  const [personalInfo, education, experience, projects, skills] =
    await Promise.all([
      PersonalInfo.findOne({ user: userId }),
      Education.find({ user: userId }),
      Experience.find({ user: userId }),
      Project.find({ user: userId }),
      Skill.find({ user: userId }),
    ]);

  res.json({
    portfolio,
    personalInfo,
    education,
    experience,
    projects,
    skills,
  });
};

export const updatePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOneAndUpdate(
    { user: req.user.id },
    req.body,
    { new: true },
  );
  res.json(portfolio);
};

export const deletePortfolio = async (req, res) => {
  await Portfolio.findOneAndDelete({ user: req.user.id });
  res.json({ message: "Portfolio deleted" });
};

export const getMyPortfolioProgress = async (req, res) => {
  const progress = await Portfolio.findOne({ user: req.user.id });
  res.json(progress);
};
