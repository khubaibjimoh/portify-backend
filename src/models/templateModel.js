import mongoose from "mongoose";

const templateSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: { type: String, required: true },
    config: { type: Object, default: {} },
  },
  { timestamps: true }
);

export default mongoose.model("Template", templateSchema);
