import axios from "axios";
import { RECAPTCHA_SECRET_KEY } from "../configs/env";

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  ["error_codes"]?: string[];
}

const verifyCaptcha = async (token: string): Promise<boolean> => {
  const secretKey = RECAPTCHA_SECRET_KEY;

  if (!token) {
    console.error("reCAPTCHA token is missing.");
    return false;
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );

    const data: RecaptchaResponse = response.data;

    if (data.success && data.score >= 0.5) {
      console.log("reCAPTCHA verification successful:", data);
      return true; // Valid reCAPTCHA
    } else {
      console.error("reCAPTCHA verification failed:", data);
      return false; // Invalid reCAPTCHA
    }
  } catch (error: any) {
    console.error("Error verifying reCAPTCHA:", error.message || error);
    return false;
  }
};

export default verifyCaptcha;
