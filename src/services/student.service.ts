import { Student } from "@prisma/client";
import { prisma } from "../lib/prisma";

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
    profilePicture?: string;
  }): Promise<Student> {
    const existingStudent = await prisma.student.findUnique({
      where: { nim: data.nim },
    });
    if (existingStudent) throw new Error("NIM sudah digunakan");

    return prisma.student.create({
      data: {
        nim: data.nim,
        name: data.name,
        phoneNumber: data.phoneNumber,
        profilePicture: data.profilePicture,
      },
    });
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
