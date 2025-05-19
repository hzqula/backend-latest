import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../configs/env";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// Fungsi untuk mengunggah gambar ke Cloudinary
export const uploadToCloudinary = (
  fileBuffer: Buffer,
  folder: string,
  publicId: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: publicId,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result!.secure_url);
      }
    );
    stream.end(fileBuffer);
  });
};

// Fungsi untuk menghapus gambar dari Cloudinary
export const deleteFromCloudinary = (publicId: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(
      publicId,
      { invalidate: true },
      (error, result) => {
        if (error) {
          console.error("Error deleting from Cloudinary:", error);
          reject(error);
        } else {
          console.log("Successfully deleted from Cloudinary:", publicId);
          console.log("Cloudinary delete result:", result); // Tambahkan log untuk melihat detail hasil
          resolve();
        }
      }
    );
  });
};

// Fungsi untuk mendapatkan public_id dari URL Cloudinary
export const getPublicIdFromUrl = (url: string): string => {
  const parts = url.split("/");
  const fileName = parts[parts.length - 1]; // Misalnya: "1747652184861-bg.png"
  const folderPath = parts
    .slice(parts.indexOf("profile-pictures"), -1)
    .join("/"); // Misalnya: "profile-pictures/12250111603"
  const publicId = fileName.split(".")[0]; // Misalnya: "1747652184861-bg"
  const fullPublicId = `${folderPath}/${publicId}`; // Harusnya: "profile-pictures/12250111603/1747652184861-bg"
  console.log("Extracted fullPublicId:", fullPublicId); // Debug
  return fullPublicId;
};
