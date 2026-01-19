import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    issuer: {
      type: String,
      required: true,
      trim: true,
    },

    issueDate: {
      type: Date,
      required: true,
    },

    credentialId: {
      type: String,
      trim: true,
    },

    credentialUrl: {
      type: String,
      trim: true,
    },

    uploadCert: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Certification", certificationSchema);
