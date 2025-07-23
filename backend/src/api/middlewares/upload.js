// src/api/middlewares/upload.js
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDIR = path.resolve("uploads");
if (!fs.existsSync(uploadDIR)) fs.mkdirSync(uploadDIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDIR),
  filename: (req, file, cb) =>
    cb(
      null,
      `${Date.now()}-${Math.round(Math.random() * 1e9)}-${file.originalname}`
    ),
});

export const upload = multer({ storage });
