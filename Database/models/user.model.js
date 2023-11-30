import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    profilePic: {
      secure_url: {
        type: String,
        default: process.env.DEFAULT_PROFILE_PICTURE,
      },
      public_id: {
        type: String,
        default: null,
      },
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || model("User", userSchema);

export default User;
