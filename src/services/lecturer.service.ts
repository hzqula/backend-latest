import { Lecturer } from "../../prisma/app/generated/prisma/client";
import { prisma } from "../lib/prisma";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
  getPublicIdFromUrl,
} from "../utils/cloudinary";

export class LecturerService {
  async createLecturer(data: {
    nip: string;
    name: string;
    phoneNumber: string;
    userID: number;
    file?: Express.Multer.File;
  }): Promise<Lecturer> {
    const existingLecturer = await prisma.lecturer.findUnique({
      where: { nip: data.nip },
    });
    if (existingLecturer) throw new Error("NIP sudah digunakan");

    let profilePicture: string | undefined;
    if (data.file) {
      const folder = `profile-pictures/${data.nip}`;
      const publicId = `${Date.now()}-${data.file.originalname.split(".")[0]}`;
      profilePicture = await uploadToCloudinary(
        data.file.buffer,
        folder,
        publicId
      );
    }

    return prisma.lecturer.create({
      data: {
        nip: data.nip,
        name: data.name,
        phoneNumber: data.phoneNumber,
        profilePicture,
      },
    });
  }

  async updateProfilePicture(
    nip: string,
    file: Express.Multer.File
  ): Promise<Lecturer> {
    const lecturer = await prisma.lecturer.findUnique({ where: { nip } });
    if (!lecturer) throw new Error("Dosen tidak ditemukan");

    // Hapus foto lama dari Cloudinary jika ada
    if (lecturer.profilePicture) {
      console.log("Old profile picture URL:", lecturer.profilePicture); // Debug URL sebelum penghapusan
      const publicId = getPublicIdFromUrl(lecturer.profilePicture);
      console.log("Attempting to delete publicId:", publicId); // Debug
      try {
        await deleteFromCloudinary(publicId);
        console.log("Old profile picture deleted for lecturer:", nip);
      } catch (error) {
        console.error("Failed to delete old profile picture:", error);
      }
    }

    // Unggah foto baru
    const folder = `profile-pictures/${nip}`;
    const publicId = `${Date.now()}-${file.originalname.split(".")[0]}`;
    const profilePicture = await uploadToCloudinary(
      file.buffer,
      folder,
      publicId
    );

    return prisma.lecturer.update({
      where: { nip },
      data: { profilePicture },
    });
  }

  async deleteProfilePictureAfterTwoYears(userID: number): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { id: userID },
      include: { lecturer: true },
    });

    if (!user || !user.lecturer || !user.lecturer.profilePicture) return;

    const createdAt = user.createdAt;
    const twoYearsInMs = 2 * 365 * 24 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - createdAt.getTime();

    if (timeDiff > twoYearsInMs) {
      const publicId = getPublicIdFromUrl(user.lecturer.profilePicture);
      await deleteFromCloudinary(publicId);
      await prisma.lecturer.update({
        where: { id: user.lecturer.id },
        data: { profilePicture: null },
      });
    }
  }

  async getAllLecturers(): Promise<Lecturer[]> {
    const lecturers = await prisma.lecturer.findMany();
    return lecturers;
  }

  async getLecturerByNIP(nip: string): Promise<Lecturer> {
    const lecturer = await prisma.lecturer.findUnique({
      where: { nip },
      include: { user: { select: { email: true, role: true } } },
    });

    if (!lecturer) throw new Error("Dosen tidak ditemukan");

    return lecturer;
  }

  async updateProfileData(
    nip: string,
    data: { name?: string; phoneNumber?: string; nip?: string }
  ): Promise<Lecturer> {
    const lecturer = await prisma.lecturer.findUnique({ where: { nip } });
    if (!lecturer) throw new Error("Dosen tidak ditemukan");

    if (data.nip && data.nip !== nip) {
      const existingLecturer = await prisma.lecturer.findUnique({
        where: { nip: data.nip },
      });
      if (existingLecturer) throw new Error("NIP sudah digunakan");
    }

    return prisma.lecturer.update({
      where: { nip },
      data: {
        name: data.name || lecturer.name,
        phoneNumber: data.phoneNumber || lecturer.phoneNumber,
        nip: data.nip || lecturer.nip,
      },
    });
  }
}
