import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    name: String,
    description: String,
    website: String,
    logo: String,

    verified: {
      type: Boolean,
      default: false,
    },

    plan: {
      type: String,
      enum: ["free", "premium"],
      default: "free",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Company", companySchema);
