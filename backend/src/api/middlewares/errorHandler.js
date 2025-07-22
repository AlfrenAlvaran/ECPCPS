import HttpError from "../../shared/errors/HttpError.js";

export default function errorHandler(err, req, res, next) {
  const status = err instanceof HttpError ? err.status : 500;
  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}
