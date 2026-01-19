import dotenv from "dotenv";

dotenv.config();

const envConfig = {
  port: parseInt(process.env.PORT || "5000", 10),
  mongo_uri: process.env.MONGO_URI || "mongodb://localhost:27017/portify",
  jwt_secret: process.env.JWT_SECRET || "your_super_secret_jwt_key",
  jwt_expiry: process.env.JWT_EXPIRES_IN || "7d",
  cloudinary_name: process.env.CLOUDINARY_NAME || "",
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY || "",
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET || "",
};

export default envConfig;
