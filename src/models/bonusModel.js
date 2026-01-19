import mongoose from "mongoose";

const bonusSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    type: {
      type: String,
      enum: ["referral", "level", "engagement"],
    },

    points: Number,
    description: String,
  },
  { timestamps: true },
);

export default mongoose.model("Bonus", bonusSchema);
