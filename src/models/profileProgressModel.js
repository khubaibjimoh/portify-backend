import mongoose from "mongoose";

const profileProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },

  sections: {
    personalInfo: { type: Boolean, default: false },
    education: { type: Boolean, default: false },
    experience: { type: Boolean, default: false },
    projects: { type: Boolean, default: false },
    skills: { type: Boolean, default: false },
  },

  completionScore: { type: Number, default: 0 },
});

export default mongoose.model("ProfileProgress", profileProgressSchema);
