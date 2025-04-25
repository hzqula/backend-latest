import { prisma } from "../src/lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const password = await bcrypt.hash("123321", 10);

  await prisma.student.createMany({
    data: [
      {
        id: 1,
        nim: "123456789",
        name: "Muhammad Faruq",
        phoneNumber: "08123456789",
        profilePicture: "https://example.com/student1.jpg",
      },
      {
        id: 2,
        nim: "472894473",
        name: "Muhammad Aditya Rinaldi",
        phoneNumber: "08123456789",
        profilePicture: "https://example.com/student1.jpg",
      },
      {
        id: 3,
        nim: "22343434",
        name: "Farras Lathief",
        phoneNumber: "08123456789",
        profilePicture: "https://example.com/student1.jpg",
      },
    ],
  });

  await prisma.lecturer.createMany({
    data: [
      {
        id: 1,
        nip: "987654321",
        name: "Muhammad Faruq, ST., M. Sc.",
        phoneNumber: "08198765432",
        profilePicture: "https://example.com/lecturer1.jpg",
      },
      {
        id: 2,
        nip: "987654322",
        name: "Dr. Muhammad Aditya Rinaldi, ST., MT.",
        phoneNumber: "08198765433",
        profilePicture: "https://example.com/lecturer2.jpg",
      },
      {
        id: 3,
        nip: "987654323",
        name: "Prof. Dr. Farras Lathief, ST., M. Eng.",
        phoneNumber: "08198765433",
        profilePicture: "https://example.com/lecturer2.jpg",
      },
    ],
  });

  await prisma.coordinator.create({
    data: {
      id: 1,
      name: "Teknik Lingkunga UR",
      profilePicture: "https://example.com/coordinator1.jpg",
    },
  });

  await prisma.user.createMany({
    data: [
      {
        email: "faruq@student.unri.ac.id",
        password: password,
        role: "STUDENT",
        studentID: 1,
        isVerify: true,
      },
      {
        email: "muhammadfaruq@lecturer.unri.ac.id",
        password: password,
        role: "LECTURER",
        lecturerID: 1,
        isVerify: true,
      },
      {
        email: "muhammadadityarnld@lecturer.unri.ac.id",
        password: password,
        role: "LECTURER",
        lecturerID: 2,
        isVerify: true,
      },
      {
        email: "farraslathief@lecturer.unri.ac.id",
        password: password,
        role: "LECTURER",
        lecturerID: 3,
        isVerify: true,
      },
      {
        email: "env@eng.unri.ac.id",
        password: password,
        role: "COORDINATOR",
        coordinatorID: 1,
        isVerify: true,
      },
    ],
    skipDuplicates: true,
  });
  console.log("Seeding selesai!");
}

main()
  .catch((e) => {
    console.error("Error saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
