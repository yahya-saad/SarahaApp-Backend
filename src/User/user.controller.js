import User from "../../Database/models/user.model.js";
import asyncHandler from "../../Middleware/asyncHandler.js";
import appError from "../../utils/appError.js";
import { httpStatusText } from "../../utils/httpStatusText.js";
import cloudinary from "../../utils/cloudnairy.js";
import bcrypt from "bcryptjs";
import QRCode from "qrcode";
import { isValidObjectId } from "../../utils/isValidObjectId.js";

export const profilePic = asyncHandler(async (req, res, next) => {
  const userId = req.currentUser._id;

  const user = await User.findById(userId).select({
    userName: 1,
    email: 1,
    profilePic: 1,
  });

  if (!user)
    return next(
      appError.create("User not found", 404, httpStatusText.NOT_FOUND)
    );

  if (!req.file) {
    return next(
      appError.create("profile picture is required", 400, httpStatusText.FAIL)
    );
  }
  const results = await cloudinary.uploader.upload(req.file.path, {
    folder: `Saraha/${userId}/profile-pic`,
  });

  const { secure_url, public_id } = results;

  user.profilePic = { secure_url, public_id };

  await user.save();

  res.status(201).json({
    status: httpStatusText.SUCCESS,
    message: "Profile Picture Uploaded Successfully",
    data: { user },
  });
});

export const deleteProfilePic = asyncHandler(async (req, res, next) => {
  const userId = req.currentUser._id;

  const user = await User.findById(userId).select({
    userName: 1,
    email: 1,
    profilePic: 1,
  });

  if (!user)
    return next(
      appError.create("User not found", 404, httpStatusText.NOT_FOUND)
    );

  if (user.profilePic.public_id == null)
    return next(
      appError.create(
        "No custom profile picture to delete",
        400,
        httpStatusText.FAIL
      )
    );

  // Delete the image from Cloudinary
  await cloudinary.uploader.destroy(user.profilePic.public_id);

  // Set the profile picture to the default
  user.profilePic = {
    secure_url: process.env.DEFAULT_PROFILE_PICTURE,
    public_id: null,
  };

  await user.save();

  return res.status(200).json({
    status: "success",
    message: "Profile picture deleted successfully",
    data: { user },
  });
});

export const changePassword = asyncHandler(async (req, res, next) => {
  const userId = req.currentUser._id;
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(userId);

  if (!user)
    return next(
      appError.create("User not found", 404, httpStatusText.NOT_FOUND)
    );

  const oldPasswordValid = await bcrypt.compare(oldPassword, user.password);

  if (!oldPasswordValid)
    return next(
      appError.create("old password is incorrect", 400, httpStatusText.FAIL)
    );

  const newPasswordHashed = await bcrypt.hash(
    newPassword,
    parseInt(process.env.SALT)
  );

  user.password = newPasswordHashed;
  await user.save();

  return res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: "password changed successfully",
    data: { user },
  });
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  const userId = req.currentUser._id;

  const user = await User.findByIdAndDelete(userId);

  if (!user)
    return next(
      appError.create("User not found", 404, httpStatusText.NOT_FOUND)
    );

  return res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: "User Deleted Successfully",
    data: null,
  });
});

export const generateQrcode = asyncHandler(async (req, res, next) => {
  const userName = req.currentUser.userName;
  const url = `${req.protocol}://${req.headers.host}/api/message/anonymous/${userName}`;

  const qrcode = await QRCode.toDataURL(url);

  return res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: "Qrcode generated succesfully",
    data: { qrcode },
  });
});

export const getCurrentUser = asyncHandler(async (req, res, next) => {
  const userId = req.currentUser._id;
  const user = await User.findById(userId, { password: false });

  if (!user)
    return next(
      appError.create("User not found", 404, httpStatusText.NOT_FOUND)
    );

  return res
    .status(200)
    .json({ status: httpStatusText.SUCCESS, data: { user } });
});
