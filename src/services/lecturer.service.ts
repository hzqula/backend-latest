import { Lecturer } from "@prisma/client";
import { prisma } from "../lib/prisma";

export class LecturerService {
  async createLecturer(data: {
    nip: string;
    name: string;
    phoneNumber: string;
    profilePicture?: string;
  }): Promise<Lecturer> {
    const existingLecturer = await prisma.lecturer.findUnique({
      where: { nip: data.nip },
    });
    if (existingLecturer) throw new Error("NIP sudah digunakan");

    return prisma.lecturer.create({
      data: {
        nip: data.nip,
        name: data.name,
        phoneNumber: data.phoneNumber,
        profilePicture: data.profilePicture,
      },
    });
  }

  async getAllLecturers(): Promise<Lecturer[]> {
    const lecturers = await prisma.lecturer.findMany();
    return lecturers;
  }

  async getLecturerByNIP(nip: string): Promise<Lecturer> {
    const lecture = await prisma.lecturer.findUnique({
      where: { nip },
      include: { user: { select: { email: true, role: true } } },
    });

    if (!lecture) throw new Error("Mahasiswa tidak ditemukan");

    return lecture;
  }
}
