import mongoose, { model, Schema, Types } from "mongoose";

const messageSchema = new Schema(
  {
    content: String,
    senderUser: {
      type: Types.ObjectId,
      ref: "User",
    },
    receiverUser: {
      type: Types.ObjectId,
      ref: "User",
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message = mongoose.models.Message || model("Message", messageSchema);

export default Message;
