import ProfileProgress from "../models/profileProgressModel.js";
import Education from "../models/educationModel.js";
import Experience from "../models/experienceModel.js";
import Project from "../models/projectModel.js";
import Skill from "../models/skillModel.js";
import PersonalInfo from "../models/personalInfoModel.js";

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

export const getMyProfileProgress = async (req, res) => {
  const progress = await ProfileProgress.findOne({ user: req.user.id });
  res.json(progress);
};
