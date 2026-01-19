import Document from "../models/documentModel.js";
import { getUserPortfolioData } from "../services/portfolioData.service.js";
import { generateCVContent } from "../services/documentGenerator.service.js";

export const generateDocument = async (req, res) => {
  const { type, title } = req.body;

  const data = await getUserPortfolioData(req.user.id);
  const content = generateCVContent(data);

  const doc = await Document.create({
    user: req.user.id,
    type,
    title,
    content,
  });

  res.status(201).json(doc);
};

export const updateDocument = async (req, res) => {
  const doc = await Document.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { content: req.body.content },
    { new: true },
  );

  res.json(doc);
};

export const generateCoverLetter = async (req, res) => {
  const { jobTitle, company } = req.body;
  const data = await getUserPortfolioData(req.user.id);

  const prompt = coverLetterPrompt({
    personalInfo: data.personalInfo,
    jobTitle,
    company,
  });

  const aiText = await openAI.generate(prompt);

  const doc = await Document.create({
    user: req.user.id,
    type: "cover_letter",
    title: `Cover Letter - ${company}`,
    content: { text: aiText },
  });

  res.json(doc);
};

export const downloadPDF = async (req, res) => {
  const doc = await Document.findById(req.params.id);
  const pdf = await generatePDF(doc.content);

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdf);
};
