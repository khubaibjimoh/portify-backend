import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    profilePic: {
      type: String,
      required: [true, "First name is required"],
    },

    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [3, "First name must have at least 3 characters"],
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [3, "Last name must have at least 3 characters"],
    },

    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: [3, "Phone number must have at least 3 characters"],
    },

    socialLink: {
      type: [String],
      required: [true, "First name is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("PersonalInfo", personalInfoSchema);
