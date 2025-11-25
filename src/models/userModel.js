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

    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      select: false, // hide password by default
    },

    verified: {
      type: Boolean,
      default: false,
    },

    // Used for email verification
    verificationCode: {
      type: String,
      select: false,
    },

    verificationCodeValidation: {
      type: Number,
      select: false,
    },

    // Used for forgot password flow
    forgotPasswordCode: {
      type: String,
      select: false,
    },

    forgotPasswordCodeValidation: {
      type: Number,
      select: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);