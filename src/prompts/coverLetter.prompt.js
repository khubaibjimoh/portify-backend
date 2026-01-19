export const coverLetterPrompt = ({ personalInfo, jobTitle, company }) => `
Write a professional cover letter for the role of ${jobTitle} at ${company}.

Candidate details:
Name: ${personalInfo.firstName} ${personalInfo.lastName}
Skills: ${personalInfo.skills?.join(", ")}

Tone: professional, concise, confident
Length: 3 paragraphs
`;
