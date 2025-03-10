import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  NODE_ENV,
  PORT,
  JWT_SECRET,
  EMAIL_USER,
  EMAIL_PASSWORD,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  RECAPTCHA_SECRET_KEY,
  RECAPTCHA_SITE_KEY,
  BASE_FOLDER_ID,
} = process.env;
