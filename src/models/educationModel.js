import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    degree: {
      type: String,
      required: [true, "Degree is required"],
      trim: true,
      minlength: [3, "Degree must have at least 3 characters"],
    },

    university: {
      type: String,
      required: [true, "University is required"],
      trim: true,
      minlength: [3, "University must have at least 3 characters"],
    },

    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
      minlength: [3, "Course must have at least 3 characters"],
    },

    yearOfGrad: {
      type: Date,
      required: [true, "Year of graduation is required"],
      trim: true,
      minlength: [3, "Year of graduation must have at least 3 characters"],
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      minlength: [3, "Location must have at least 3 characters"],
    },

    description: {
      type: String,
      trim: true,
      required: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Education", educationSchema);
