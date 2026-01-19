import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
      required: true,
    },

    headline: { type: String, trim: true },
    summary: { type: String, trim: true },

    completionScore: {
      type: Number,
      default: 0, // 0 – 100
    },

    atsScore: {
      type: Number,
      default: 0, // ATS checker output
    },

    linkedinScore: {
      type: Number,
      default: 0,
    },

    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Portfolio", portfolioSchema);
