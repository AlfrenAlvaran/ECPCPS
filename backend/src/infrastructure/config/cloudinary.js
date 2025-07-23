import { v2 as cloudinary } from "cloudinary";
import { env } from "./env.js";

cloudinary.config({
  cloud_name: env.cloudinary[0].name,
  api_key: env.cloudinary[0].key,
  api_secret: env.cloudinary[0].secret,
});

export { cloudinary };
