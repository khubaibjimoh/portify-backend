import Company from "../models/companyModel.js";

export const createCompany = async (req, res) => {
  const company = await Company.create({
    user: req.user.id,
    ...req.body,
  });
  res.status(201).json(company);
};

export const getMyCompany = async (req, res) => {
  const company = await Company.findOne({ user: req.user.id });
  res.json(company);
};
