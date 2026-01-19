// .\src\config\db.js
import mongoose from "mongoose";
import envConfig from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.mongo_uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};
