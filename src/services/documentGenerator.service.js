export const generateCVContent = (data) => {
  return {
    personalInfo: data.personalInfo,
    summary: generateProfessionalSummary(data),
    education: data.education,
    experience: data.experience,
    skills: data.skills,
    projects: data.projects,
  };
};

const generateProfessionalSummary = (data) => {
  const topSkills = data.skills
    .slice(0, 5)
    .map((s) => s.name)
    .join(", ");
  return `Professional with experience in ${topSkills}. Passionate about growth and impact.`;
};
