import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String },
    images: { type: [String], default: [] },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);


//portfolioSlug identifies a unique portfolio

// So inside your Portfolio model, add:

// slug: {
//   type: String,
//   required: true,
//   unique: true