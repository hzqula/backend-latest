import { PrismaClient, Lecturer } from "@prisma/client";

const prisma = new PrismaClient();

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
}
