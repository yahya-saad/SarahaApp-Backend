import { Router } from "express";
import * as messageController from "./message.controller.js";
import { isAuthenticated } from "../../Middleware/jsonwebtoken.js";
const router = Router();

// Send Message (auth)
router.post("/:receiver", isAuthenticated, messageController.sendMessageAuth);

// Send Message (unauth)
router.post("/anonymous/:receiver", messageController.sendMessageUnauth);

// Get All Sent Msgs
router.get("/sent", isAuthenticated, messageController.getAllSentMsgs);

// Get All Received Msgs
router.get("/received", isAuthenticated, messageController.getAllReceivedMsgs);

// Get All Favourite Msgs
router.get("/favorite", isAuthenticated, messageController.getAllFavouriteMsgs);

// Get Specific Message
router.get("/:id", isAuthenticated, messageController.getMessageById);

// Delete Specific Message
router.delete("/:id", isAuthenticated, messageController.deleteMessageById);

// Toggle the favorite status
router.patch(
  "/:id/favorite",
  isAuthenticated,
  messageController.toggleFavorite
);

export default router;
