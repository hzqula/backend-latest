import { Request, Response } from "express";
import https from "https";
import { RECAPTCHA_SECRET_KEY } from "../configs/env";

export const verifyRecaptcha = async (req: Request, res: Response): Promise<void> => {
  const { token } = req.body;

  if (!token) {
    res.status(400).json({ success: false, message: "reCAPTCHA token is missing." });
    return;
  }

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`;

  https.get(verificationUrl, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const parsedData = JSON.parse(data);

        if (parsedData.success) {
          res.json({ success: true, message: "reCAPTCHA verification successful." });
        } else {
          res.status(400).json({
            success: false,
            message: "reCAPTCHA verification failed.",
            errors: parsedData["error-codes"],
          });
        }
      } catch (error) {
        res.status(500).json({ success: false, message: "Failed to parse reCAPTCHA response." });
      }
    });
  }).on("error", (error) => {
    res.status(500).json({ success: false, message: "Error verifying reCAPTCHA.", error: error.message });
  });
};
