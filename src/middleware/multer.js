import multer from "multer";
import path from "path";

// Store temporarily before Cloudinary upload
const storage = multer.diskStorage({
  filename: (_, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });
