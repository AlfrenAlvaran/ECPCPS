import HttpError from "./HttpError.js";

class BadRequestError extends HttpError {
  constructor(message = "Bad Request", details = {}) {
    super({ message, status: 400, code: "BAD_REQUEST", details });
  }
}

class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized", details = {}) {
    super({ message, status: 401, code: "UNAUTHORIZED", details });
  }
}

class ForbiddenError extends HttpError {
  constructor(message = "Forbidden", details = {}) {
    super({ message, status: 403, code: "FORBIDDEN", details });
  }
}

class NotFoundError extends HttpError {
  constructor(message = "Not Found", details = {}) {
    super({ message, status: 404, code: "NOT_FOUND", details });
  }
}

class InternalServerError extends HttpError {
  constructor(message = "Internal Server Error", details = {}) {
    super({ message, status: 500, code: "INTERNAL_SERVER_ERROR", details });
  }
}

export {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  InternalServerError,
};
