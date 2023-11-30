import multer, { diskStorage } from "multer";
import { randomBytes } from "node:crypto";
import appError from "./appError.js";
import { httpStatusText } from "./httpStatusText.js";

export const allowedFormats = {
  IMAGE: ["image/jpeg", "image/png"],
  VIDEO: [],
  AUDIO: [],
};

export const uploadLocal = (fileFormat) => {
  const storage = diskStorage({
    destination: "uploads",

    filename: (req, file, cb) => {
      const uniqueFilename = `${randomBytes(10).toString("hex")}__${
        file.originalname
      }`;
      cb(null, uniqueFilename);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (!fileFormat.includes(file.mimetype))
      return cb(
        appError.create("file format not allowed", 400, httpStatusText.FAIL),
        false
      );

    return cb(null, true);
  };

  return multer({ storage, fileFilter });
};

export const uploadCloud = (fileFormat) => {
  const storage = diskStorage({});

  const fileFilter = (req, file, cb) => {
    if (!fileFormat.includes(file.mimetype))
      return cb(
        appError.create("file format not allowed", 400, httpStatusText.FAIL),
        false
      );

    return cb(null, true);
  };

  return multer({ storage, fileFilter });
};
