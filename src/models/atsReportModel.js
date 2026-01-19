import mongoose from "mongoose";

const atsReportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    portfolio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Portfolio",
    },

    score: Number,

    missingKeywords: [String],
    recommendations: [String],

    parsedResumeText: String,
  },
  { timestamps: true },
);

export default mongoose.model("ATSReport", atsReportSchema);
