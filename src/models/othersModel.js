import mongoose from "mongoose";

const othersSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must have at least 3 characters"],
    },

    description: {
      type: [String],
      required: [true, "Description is required"],
      trim: true,
      minlength: [3, "Description must have at least 3 characters"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Others", othersSchema);
