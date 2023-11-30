import jwt from "jsonwebtoken";
import appError from "../utils/appError.js";
import { httpStatusText } from "../utils/httpStatusText.js";

export const generateToken = (
  payload,
  jwtSecret = process.env.JWT_SECRET,
  expiresIn = "1d"
) => {
  const token = jwt.sign(payload, jwtSecret, { expiresIn });
  return token;
};

export const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers["auth"] || req.headers["Auth"];

  if (!authHeader)
    return next(appError.create("Token Is Required", 401, httpStatusText.FAIL));

  const [bearer, token] = authHeader.split("__");

  if (bearer !== process.env.BEARER_TOKEN)
    return next(appError.create("Invalid Token", 401, httpStatusText.FAIL));

  try {
    const currentUser = jwt.verify(token, process.env.JWT_SECRET);
    req.currentUser = currentUser;
    next();
  } catch (error) {
    next(appError.create(error.message, 401, httpStatusText.FAIL));
  }
};
