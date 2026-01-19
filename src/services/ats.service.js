export const calculateATSScore = (content, jobKeywords) => {
  let score = 0;
  const text = JSON.stringify(content).toLowerCase();

  jobKeywords.forEach((keyword) => {
    if (text.includes(keyword.toLowerCase())) score += 5;
  });

  return Math.min(score, 100);
};
