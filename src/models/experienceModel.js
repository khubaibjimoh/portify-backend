import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      minlength: [3, "Job title must have at least 3 characters"],
    },

    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true,
      minlength: [3, "Company must have at least 3 characters"],
    },

    startDate: {
      type: Date,
      required: [true, "Start date is required"],
      trim: true,
      minlength: [3, "Start date must have at least 3 characters"],
    },

    endDate: {
      type: Date,
      required: [true, "End date is required"],
      trim: true,
      minlength: [3, "End date must have at least 3 characters"],
    },

    responsibilities: {
      type: [String],
      required: [true, "Responsibilities and achievements is required"],
      trim: true,
      minlength: [
        3,
        "Responsibilities and achievements must have at least 3 characters",
      ],
    },

    images: {
      type: [String],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [3, "Description must have at least 3 characters"],
    },

    summary: {
      type: String,
      required: [true, "Professional summary is required"],
      trim: true,
      minlength: [3, "Professional summary must have at least 3 characters"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Experience", experienceSchema);
