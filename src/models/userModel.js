import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      minlength: [5, "Email must have at least 5 characters"],
    },

    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: true,
      minlength: [3, "Username must have at least 3 characters"],
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      select: false,
    },

    verified: {
      type: Boolean,
      default: false,
    },

    // EMAIL VERIFICATION
    verificationCode: {
      type: String,
      select: false,
    },
    verificationCodeValidation: {
      type: Number,
      select: false,
    },

    // FORGOT PASSWORD
    forgotPasswordCode: {
      type: String,
      select: false,
    },
    forgotPasswordCodeValidation: {
      type: Number,
      select: false,
    },

    // AVATAR / PROFILE PICTURE
    avatar: {
      type: String,
      default: "",
    },
    avatarPublicId: {
      type: String,
      select: false,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);