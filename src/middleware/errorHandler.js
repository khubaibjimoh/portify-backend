import logger from "../utils/logger.js";

export default (err, req, res, next) => {
  logger.error(err.message, err.stack);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
