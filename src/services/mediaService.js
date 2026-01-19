import { v2 as cloudinary } from "cloudinary";
import envConfig from "../config/env.js";

cloudinary.config({
  cloud_name: envConfig.cloudinary_name,
  api_key: envConfig.cloudinary_api_key,
  api_secret: envConfig.cloudinary_api_secret,
});

export const uploadToCloudinary = (file, folder = "uploads") => {
  if (!file || !file.buffer) {
    throw new Error("Invalid file buffer");
  }

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          resource_type: "auto",
        },
        (error, result) => {
          if (error) {
            console.error("CLOUDINARY ERROR:", error);
            return reject(error);
          }

          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            resourceType: result.resource_type,
          });
        },
      )
      .end(file.buffer);
  });
};

export const uploadMultipleToCloudinary = (files, folder = "uploads") => {
  return Promise.all(files.map((file) => uploadToCloudinary(file, folder)));
};
