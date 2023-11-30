import { Types } from "mongoose";

export const isValidObjectId = (id) => {
  return Types.ObjectId.isValid(id);
};
