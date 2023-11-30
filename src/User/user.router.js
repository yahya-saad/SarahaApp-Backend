import { Router } from "express";
import * as userController from "./user.controller.js";
import {
  uploadLocal,
  allowedFormats,
  uploadCloud,
} from "../../utils/multer.js";
import { isAuthenticated } from "../../Middleware/jsonwebtoken.js";
import { validation } from "../../Middleware/validation.js";
import { changePasswordSchema } from "./user.validation.js";

const router = Router();

// Upload Profile Picture
router.patch(
  "/profile-pic",
  isAuthenticated,
  uploadCloud(allowedFormats.IMAGE).single("profilePic"),
  userController.profilePic
);

// Delete Profile Picture
router.delete("/profile-pic", isAuthenticated, userController.deleteProfilePic);

// Change Password
router.patch(
  "/password",
  isAuthenticated,
  validation(changePasswordSchema),
  userController.changePassword
);

// Delete User
router.delete("/", isAuthenticated, userController.deleteUser);

// Get specific user
router.get("/", isAuthenticated, userController.getCurrentUser);

// Qrcode for sending msg to current user
router.get("/qrcode", isAuthenticated, userController.generateQrcode);

export default router;
