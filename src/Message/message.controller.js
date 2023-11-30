import Message from "../../Database/models/message.model.js";
import User from "../../Database/models/user.model.js";
import asyncHandler from "../../Middleware/asyncHandler.js";
import appError from "../../utils/appError.js";
import { httpStatusText } from "../../utils/httpStatusText.js";
import { isValidObjectId } from "../../utils/isValidObjectId.js";

const sendMessage = async (req, res, next, senderUser) => {
  const content = req.body.content;
  const receiverUser = req.params.receiver;

  const receiver = await User.findOne({ userName: receiverUser });

  if (!receiver)
    return next(appError.create("Invalid Receiver", 404, httpStatusText.FAIL));

  if (senderUser) {
    if (senderUser.toString() === receiver._id.toString())
      return next(
        appError.create(
          "Cannot send a message to yourself",
          400,
          httpStatusText.FAIL
        )
      );
    const user = await User.findById(senderUser);

    if (!user)
      return next(
        appError.create("Invalid Sender", 404, httpStatusText.NOT_FOUND)
      );

    if (!user.isConfirmed)
      return next(
        appError.create("Account not verified", 403, httpStatusText.NOT_FOUND)
      );
  }

  if (!content || content === "")
    return next(
      appError.create("Content is missing", 400, httpStatusText.FAIL)
    );

  const newMessage = new Message({
    content,
    senderUser,
    receiverUser: receiver._id,
  });

  await newMessage.save();

  res.status(201).json({
    status: httpStatusText.SUCCESS,
    message: "Message Sent Successfully",
    data: { message: newMessage },
  });
};

export const sendMessageAuth = asyncHandler(async (req, res, next) => {
  const senderUser = req.currentUser._id;
  await sendMessage(req, res, next, senderUser);
});

export const sendMessageUnauth = asyncHandler(async (req, res, next) => {
  await sendMessage(req, res, next, null);
});

export const getAllSentMsgs = asyncHandler(async (req, res, next) => {
  //pagination
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const sort = parseInt(req.query.sort) || -1;

  const senderUser = req.currentUser._id;

  const sentMessages = await Message.find({ senderUser })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: sort })
    .populate({ path: "receiverUser", select: "userName email profilePic" });

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    data: {
      messages: sentMessages,
    },
  });
});

export const getAllReceivedMsgs = asyncHandler(async (req, res, next) => {
  //pagination
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const sort = parseInt(req.query.sort) || -1;

  const receiverUser = req.currentUser._id;

  const receivedMessages = await Message.find({ receiverUser })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: sort })
    .populate({ path: "senderUser", select: "userName email profilePic" });

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    data: {
      messages: receivedMessages,
    },
  });
});

export const getAllFavouriteMsgs = asyncHandler(async (req, res, next) => {
  //pagination
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  const sort = parseInt(req.query.sort) || -1;

  const receiverUser = req.currentUser._id;

  const favouriteMessages = await Message.find({
    receiverUser,
    isFavourite: true,
  })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: sort })
    .populate({ path: "senderUser", select: "userName email profilePic" });

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    data: {
      messages: favouriteMessages,
    },
  });
});

export const toggleFavorite = asyncHandler(async (req, res, next) => {
  const messageId = req.params.id;

  if (!isValidObjectId(messageId))
    return next(
      appError.create("Invalid message id", 400, httpStatusText.FAIL)
    );

  const message = await Message.findById(messageId);

  if (!message) {
    return next(
      appError.create("Message not found", 404, httpStatusText.NOT_FOUND)
    );
  }

  if (message.receiverUser._id.toString() !== req.currentUser._id.toString()) {
    return next(
      appError.create(
        "Unauthorized to toggle this message",
        403,
        httpStatusText.FAIL
      )
    );
  }

  // Toggle the favorite status
  message.isFavourite = !message.isFavourite;
  await message.save();

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: `Message ${
      message.isFavourite ? "marked" : "unmarked"
    } as favorite successfully`,
    data: { message },
  });
});

export const getMessageById = asyncHandler(async (req, res, next) => {
  const messageId = req.params.id;
  const userId = req.currentUser._id;

  if (!isValidObjectId(messageId))
    return next(
      appError.create("Invalid message id", 400, httpStatusText.FAIL)
    );

  const message = await Message.findById(messageId).populate([
    {
      path: "senderUser",
      select: "userName email profilePic",
    },
    {
      path: "receiverUser",
      select: "userName email profilePic",
    },
  ]);

  if (!message) {
    return next(appError.create("Message not found", 404, httpStatusText.FAIL));
  }

  if (
    message.senderUser &&
    message.senderUser._id.toString() !== userId.toString() &&
    message.receiverUser._id.toString() !== userId.toString()
  )
    return next(
      appError.create(
        "Unauthorized to access this message",
        403,
        httpStatusText.FAIL
      )
    );

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    data: { message },
  });
});

export const deleteMessageById = asyncHandler(async (req, res, next) => {
  const messageId = req.params.id;

  if (!isValidObjectId(messageId))
    return next(
      appError.create("Invalid message id", 400, httpStatusText.FAIL)
    );

  const message = await Message.findById(messageId);

  if (!message) {
    return next(
      appError.create("Message not found", 404, httpStatusText.NOT_FOUND)
    );
  }

  if (message.receiverUser._id.toString() !== req.currentUser._id.toString()) {
    return next(
      appError.create(
        "Unauthorized to delete this message",
        403,
        httpStatusText.FAIL
      )
    );
  }

  // Delete the message
  await message.deleteOne({ _id: messageId });

  res.status(200).json({
    status: httpStatusText.SUCCESS,
    message: "Message deleted successfully",
    data: null,
  });
});
