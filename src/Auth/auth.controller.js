import User from "../../Database/models/user.model.js";
import Token from "../../Database/models/token.model.js";
import asyncHandler from "../../Middleware/asyncHandler.js";
import appError from "../../utils/appError.js";
import { httpStatusText } from "../../utils/httpStatusText.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateToken } from "../../Middleware/jsonwebtoken.js";
import { sendMail } from "../../services/email/sendMail.js";
import {
  signupTemplate,
  resetPasswordTemplate,
} from "../../services/email/emailTemplates.js";
import crypto from "node:crypto";
import { isTokenValid } from "../../utils/isValidToken.js";

export const signup = asyncHandler(async (req, res, next) => {
  const { userName, email, password, gender } = req.body;

  const existingUser = await User.findOne({ $or: [{ email }, { userName }] });

  if (existingUser) {
    if (existingUser.email === email) {
      return next(
        appError.create("Email Already Registered", 400, httpStatusText.FAIL)
      );
    }

    if (existingUser.userName === userName) {
      return next(
        appError.create("Username Already Registered", 400, httpStatusText.FAIL)
      );
    }
  }

  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT)
  );

  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
    gender,
  });

  await newUser.save();

  const verifyToken = generateToken({ email }, process.env.JWT_SECRET, "10m");

  const verifyLink = `${req.protocol}://${req.headers.host}/api/auth/verify-email/${verifyToken}`;
  await sendMail({
    to: email,
    subject: "Account Verification",
    html: signupTemplate(verifyLink),
  });

  return res.status(201).json({
    status: httpStatusText.SUCCESS,
    message: "User Registered Successfully",
    data: { user: newUser },
  });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return next(
      appError.create(
        "Email or Password is incorrect",
        400,
        httpStatusText.FAIL
      )
    );

  const hashedPassword = await bcrypt.compare(password, user.password);

  if (!hashedPassword)
    return next(
      appError.create(
        "Email or Password is incorrect",
        400,
        httpStatusText.FAIL
      )
    );

  // JWT
  const token = generateToken(
    { _id: user._id, userName: user.userName, email: user.email },
    process.env.JWT_SECRET,
    "1d"
  );

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: "Login Successfully",
    data: { token },
  });
});

export const verifyEmail = asyncHandler(async (req, res, next) => {
  const { verifyToken } = req.params;
  const decodedToken = jwt.verify(verifyToken, process.env.JWT_SECRET);

  const user = await User.findOne({ email: decodedToken.email });

  if (!user)
    return next(appError.create("User not found", 404, httpStatusText.FAIL));

  if (user.isConfirmed) {
    return next(
      appError.create("Email is already verified", 400, httpStatusText.FAIL)
    );
  }

  await User.findOneAndUpdate(
    { email: decodedToken.email },
    { isConfirmed: true }
  );

  return res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: "Email verified successfully",
  });
});

export const sendPasswordResetLink = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return next(
      appError.create(
        "user with given email doesn't exist",
        404,
        httpStatusText.FAIL
      )
    );

  const latestToken = await Token.findOne({ userId: user._id }).sort({
    createdAt: -1,
  });

  if (latestToken && isTokenValid(latestToken.createdAt, 60 * 60)) {
    return next(
      appError.create(
        "Wait 1 hour to send another link",
        400,
        httpStatusText.FAIL
      )
    );
  }

  // Generate a new token
  const newToken = await new Token({
    userId: user._id,
    token: crypto.randomBytes(4).toString("hex"),
  }).save();

  const resetLink = `${req.protocol}://${req.headers.host}/api/auth/password-reset/${user._id}/${newToken.token}`;

  await sendMail({
    to: email,
    subject: "Reset Password",
    html: resetPasswordTemplate(resetLink),
  });

  return res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: "password reset link sent to your email account",
  });
});

export const resetPassword = asyncHandler(async (req, res, next) => {
  const { userId, token } = req.params;
  const { password } = req.body;

  const user = await User.findById(userId);
  if (!user)
    return next(
      appError.create("invalid link or expired", 400, httpStatusText.FAIL)
    );

  const Validtoken = await Token.findOne({ userId, token });

  if (!Validtoken)
    return next(
      appError.create("invalid link or expired", 400, httpStatusText.FAIL)
    );

  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT)
  );

  user.password = hashedPassword;
  await user.save();
  await Validtoken.deleteOne({ userId, token });

  return res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: "password reset sucessfully.",
  });
});
