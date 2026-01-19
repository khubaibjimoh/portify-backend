import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: ["cv", "resume", "cover_letter"],
      required: true,
    },

    title: String,

    content: {
      type: Object, // structured JSON (sections)
      required: true,
    },

    template: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Template",
    },

    atsScore: Number,

    isGenerated: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Document", documentSchema);
