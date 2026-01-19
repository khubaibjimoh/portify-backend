import express from "express";
import userRoutes from "./userRoutes.js";
import projectRoutes from "./projectRoutes.js";
import templateRoutes from "./templateRoutes.js";
import portfolioRoutes from "./portfolioRoutes.js";
import educationRoutes from "./educationRoutes.js";
import experienceRoutes from "./experienceRoutes.js";
import othersRoutes from "./othersRoutes.js";
import personalInfoRoutes from "./personalInfoRoutes.js";
import skillRoutes from "./skillRoutes.js";
import profileProgressRoutes from "./profileProgressRoutes.js";
import certificationRoutes from "./certificationRoutes.js";

const route = express.Router();

route.use("/users", userRoutes);
route.use("/projects", projectRoutes);
route.use("/templates", templateRoutes);
route.use("/portfolios", portfolioRoutes);
route.use("/education", educationRoutes);
route.use("/experience", experienceRoutes);
route.use("/others", othersRoutes);
route.use("/personal-info", personalInfoRoutes);
route.use("/skills", skillRoutes);
route.use("/profile-progress", profileProgressRoutes);
route.use("/certifications", certificationRoutes);

export default route;
