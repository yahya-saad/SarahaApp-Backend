class AppError extends Error {
  constructor() {
    super();
  }

  create(message, statusCode, statusText) {
    this.message = message;
    this.statusCode = statusCode;
    this.statusText = statusText;
    return this;
  }
}

const appError = new AppError();

export default appError;
