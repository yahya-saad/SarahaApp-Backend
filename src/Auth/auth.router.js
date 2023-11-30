import { Router } from "express";
import * as authController from "./auth.controller.js";
import { validation } from "../../Middleware/validation.js";
import {
  loginSchema,
  signupSchema,
  sendPasswordResetSchema,
  resetPasswordSchema,
} from "./auth.validation.js";

const router = Router();

router.post("/signup", validation(signupSchema), authController.signup);

router.post("/login", validation(loginSchema), authController.login);

router.get("/verify-email/:verifyToken", authController.verifyEmail);

router.post(
  "/password-reset",
  validation(sendPasswordResetSchema),
  authController.sendPasswordResetLink
);

router.post(
  "/password-reset/:userId/:token",
  validation(resetPasswordSchema),
  authController.resetPassword
);

export default router;
