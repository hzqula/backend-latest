import { Student } from "../../prisma/app/generated/prisma/client";
import { prisma } from "../lib/prisma";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
  getPublicIdFromUrl,
} from "../utils/cloudinary";

export class StudentService {
  private calculateSemester(nim: string): number {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const entryYear = parseInt(nim.slice(0, 2), 10);
    const yearDiff = currentYear - entryYear;

    const isOddSemester = currentDate.getMonth() >= 6;
    return isOddSemester ? yearDiff * 2 + 1 : yearDiff * 2;
  }

  async createStudent(data: {
    nim: string;
    name: string;
    phoneNumber: string;
    userID: number;
    file?: Express.Multer.File;
  }): Promise<Student> {
    const existingStudent = await prisma.student.findUnique({
      where: { nim: data.nim },
    });
    if (existingStudent) throw new Error("NIM sudah digunakan");

    let profilePicture: string | undefined;
    if (data.file) {
      const folder = `profile-pictures/${data.nim}`;
      const publicId = `${Date.now()}-${data.file.originalname.split(".")[0]}`;
      profilePicture = await uploadToCloudinary(
        data.file.buffer,
        folder,
        publicId
      );
    }

    return prisma.student.create({
      data: {
        nim: data.nim,
        name: data.name,
        phoneNumber: data.phoneNumber,
        profilePicture,
      },
    });
  }

  async updateProfilePicture(
    nim: string,
    file: Express.Multer.File
  ): Promise<Student> {
    const student = await prisma.student.findUnique({ where: { nim } });
    if (!student) throw new Error("Mahasiswa tidak ditemukan");

    // Hapus foto lama dari Cloudinary jika ada
    if (student.profilePicture) {
      console.log("Old profile picture URL:", student.profilePicture); // Debug URL sebelum penghapusan
      const publicId = getPublicIdFromUrl(student.profilePicture);
      console.log("Attempting to delete publicId:", publicId); // Debug
      try {
        await deleteFromCloudinary(publicId);
        console.log("Old profile picture deleted for student:", nim);
      } catch (error) {
        console.error("Failed to delete old profile picture:", error);
      }
    }

    // Unggah foto baru
    const folder = `profile-pictures/${nim}`;
    const publicId = `${Date.now()}-${file.originalname.split(".")[0]}`;
    const profilePicture = await uploadToCloudinary(
      file.buffer,
      folder,
      publicId
    );

    return prisma.student.update({
      where: { nim },
      data: { profilePicture },
    });
  }

  async deleteProfilePictureAfterTwoYears(userID: number): Promise<void> {
    const user = await prisma.user.findUnique({
      where: { id: userID },
      include: { student: true },
    });

    if (!user || !user.student || !user.student.profilePicture) return;

    const createdAt = user.createdAt;
    const twoYearsInMs = 2 * 365 * 24 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - createdAt.getTime();

    if (timeDiff > twoYearsInMs) {
      const publicId = getPublicIdFromUrl(user.student.profilePicture);
      await deleteFromCloudinary(publicId);
      await prisma.student.update({
        where: { id: user.student.id },
        data: { profilePicture: null },
      });
    }
  }

  async getAllStudents(): Promise<(Student & { semester: number })[]> {
    const students = await prisma.student.findMany();
    return students.map((student) => ({
      ...student,
      semester: this.calculateSemester(student.nim),
    }));
  }

  async getStudentByNIM(nim: string): Promise<Student & { semester: number }> {
    const student = await prisma.student.findUnique({
      where: { nim },
      include: { user: { select: { email: true, role: true } } },
    });
    if (!student) throw new Error("Mahasiswa tidak ditemukan");
    const semester = this.calculateSemester(nim);
    return { ...student, semester };
  }
}
