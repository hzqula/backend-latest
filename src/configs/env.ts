import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  NODE_ENV,
  PORT,
  JWT_SECRET,
  RECAPTCHA_SECRET_KEY,
  EMAIL_USER,
  EMAIL_PASSWORD,
} = process.env;
