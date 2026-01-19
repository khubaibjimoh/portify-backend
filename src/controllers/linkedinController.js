import LinkedInOptimization from "../models/linkedinOptimizationModel.js";
import Portfolio from "../models/portfolioModel.js";

export const createLinkedInOptimization = async (req, res) => {
  const data = await LinkedInOptimization.create({
    user: req.user.id,
    ...req.body,
  });

  const totalScore =
    (req.body.headlineScore +
      req.body.summaryScore +
      req.body.experienceScore) /
    3;

  await Portfolio.findOneAndUpdate(
    { user: req.user.id },
    { linkedinScore: totalScore },
  );

  res.status(201).json(data);
};

export const getMyLinkedInOptimization = async (req, res) => {
  const result = await LinkedInOptimization.findOne({ user: req.user.id });
  res.json(result);
};
