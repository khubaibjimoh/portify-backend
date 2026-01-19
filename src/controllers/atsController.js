import ATSReport from "../models/atsReportModel.js";
import Portfolio from "../models/portfolioModel.js";

export const createATSReport = async (req, res) => {
  const { score, missingKeywords, recommendations, parsedResumeText } =
    req.body;

  const portfolio = await Portfolio.findOne({ user: req.user.id });

  const report = await ATSReport.create({
    user: req.user.id,
    portfolio: portfolio._id,
    score,
    missingKeywords,
    recommendations,
    parsedResumeText,
  });

  await Portfolio.findByIdAndUpdate(portfolio._id, {
    atsScore: score,
  });

  res.status(201).json(report);
};

export const getMyATSReports = async (req, res) => {
  const reports = await ATSReport.find({ user: req.user.id });
  res.json(reports);
};

export const generateATSReport = async (req, res) => {
  const { documentId, jobKeywords } = req.body;
  const doc = await Document.findById(documentId);

  const score = calculateATSScore(doc.content, jobKeywords);

  const report = await ATSReport.create({
    user: req.user.id,
    score,
    missingKeywords: jobKeywords.filter(
      (k) => !JSON.stringify(doc.content).includes(k),
    ),
  });

  res.json(report);
};
