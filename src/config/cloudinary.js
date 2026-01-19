import { v2 as cloudinary } from "cloudinary";
import envConfig from "./env.js";

let isConfigured = false;

const configureCloudinary = () => {
  if (isConfigured) return cloudinary;

  if (
    !envConfig.cloudinary_name ||
    !envConfig.cloudinary_api_key ||
    !envConfig.cloudinary_api_secret
  ) {
    throw new Error("Cloudinary env variables are missing");
  }

  cloudinary.config({
    cloud_name: envConfig.cloudinary_name,
    api_key: envConfig.cloudinary_api_key,
    api_secret: envConfig.cloudinary_api_secret,
  });

  isConfigured = true;
  return cloudinary;
};

export default configureCloudinary;
