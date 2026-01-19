import PersonalInfo from "../models/personalInfoModel.js";
import Education from "../models/educationModel.js";
import Experience from "../models/experienceModel.js";
import Skill from "../models/skillModel.js";
import Project from "../models/projectModel.js";

export const getUserPortfolioData = async (userId) => {
  const [personalInfo, education, experience, skills, projects] =
    await Promise.all([
      PersonalInfo.findOne({ user: userId }),
      Education.find({ user: userId }),
      Experience.find({ user: userId }),
      Skill.find({ user: userId }),
      Project.find({ user: userId }),
    ]);

  return {
    personalInfo,
    education,
    experience,
    skills,
    projects,
  };
};

export const calculateProfileProgress = async (userId) => {
  const sections = {
    personalInfo: await PersonalInfo.exists({ user: userId }),
    education: await Education.exists({ user: userId }),
    experience: await Experience.exists({ user: userId }),
    projects: await Project.exists({ user: userId }),
    skills: await Skill.exists({ user: userId }),
  };

  const completed = Object.values(sections).filter(Boolean).length;
  const completionScore = (completed / 5) * 100;

  return ProfileProgress.findOneAndUpdate(
    { user: userId },
    { sections, completionScore },
    { upsert: true, new: true },
  );
};

export const recalcProfileScore = async (userId) => {
  let score = 0;

  if (await PersonalInfo.exists({ user: userId })) score += 20;
  if (await Education.exists({ user: userId })) score += 20;
  if (await Experience.exists({ user: userId })) score += 20;
  if (await Project.exists({ user: userId })) score += 20;
  if (await Skill.exists({ user: userId })) score += 20;

  await Portfolio.findOneAndUpdate(
    { user: userId },
    { completionScore: score },
  );
};
