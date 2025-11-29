import express from "express";
import userRoutes from "./userRoutes.js";
import projectRoutes from "./projectRoutes.js";
import templateRoutes from "./templateRoutes.js";
import portfolioRoutes from "./portfolioRoutes.js";

const route = express.Router();

route.use("/users", userRoutes);
route.use("/projects", projectRoutes);
route.use("/templates", templateRoutes);
route.use("/portfolios", portfolioRoutes);

export default route;
