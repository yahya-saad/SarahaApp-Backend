import appError from "../utils/appError.js";
import { httpStatusText } from "../utils/httpStatusText.js";

export const validation = (schema) => (req, res, next) => {
  const reqCopy = { ...req.body, ...req.params, ...req.query };

  const validationResults = schema.validate(reqCopy, { abortEarly: false });

  if (validationResults?.error) {
    const errorArray = validationResults.error.details.map((el) => el.message);

    return next(appError.create(errorArray, 400, httpStatusText.FAIL));
  }
  return next();
};
