export function errorHandler(err, _req, res, _next) {
  const status = err.statusCode || 500;
  const message =
    status >= 500 ? "Unexpected server error" : err.message || "Request error";

  res.status(status).json({ message });
}
