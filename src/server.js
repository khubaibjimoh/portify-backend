// .\src\server.js
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import route from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";
import logger from "./utils/logger.js";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Portify API is running...");
});

app.use("/api/v1", route);

app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));

app.use(errorHandler);
