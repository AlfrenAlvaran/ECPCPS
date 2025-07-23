class HttpError extends Error {
  constructor({
    message = "HTTP Error",
    status = 500,
    code = "HTTP_ERROR",
    details = {},
  } = {}) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.code = code;
    this.details = details;
  }

  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        status: this.status,
        code: this.code,
        details: this.details,
      },
    };
  }
}
export default HttpError;