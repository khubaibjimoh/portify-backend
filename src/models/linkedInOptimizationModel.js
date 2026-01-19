import mongoose from "mongoose";

const linkedinOptimizationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    headlineScore: Number,
    summaryScore: Number,
    experienceScore: Number,

    suggestions: [String],
  },
  { timestamps: true },
);

export default mongoose.model(
  "LinkedInOptimization",
  linkedinOptimizationSchema,
);
