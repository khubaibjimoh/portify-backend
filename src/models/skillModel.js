import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must have at least 3 characters"],
    },

    relevance: {
      type: [String],
      required: [true, "Relevance is required"],
      trim: true,
      minlength: [3, "Relevance must have at least 3 characters"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
