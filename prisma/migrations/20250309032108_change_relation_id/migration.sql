/*
  Warnings:

  - You are about to drop the column `lecturerID` on the `Assessment` table. All the data in the column will be lost.
  - You are about to drop the column `studentID` on the `Seminar` table. All the data in the column will be lost.
  - You are about to drop the column `lecturerID` on the `SeminarAdvisor` table. All the data in the column will be lost.
  - You are about to drop the column `lecturerID` on the `SeminarAssessor` table. All the data in the column will be lost.
  - Added the required column `lecturerNIP` to the `Assessment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentNIM` to the `Seminar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lecturerNIP` to the `SeminarAdvisor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lecturerNIP` to the `SeminarAssessor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Assessment" DROP CONSTRAINT "Assessment_lecturerID_fkey";

-- DropForeignKey
ALTER TABLE "Seminar" DROP CONSTRAINT "Seminar_studentID_fkey";

-- DropForeignKey
ALTER TABLE "SeminarAdvisor" DROP CONSTRAINT "SeminarAdvisor_lecturerID_fkey";

-- DropForeignKey
ALTER TABLE "SeminarAssessor" DROP CONSTRAINT "SeminarAssessor_lecturerID_fkey";

-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "lecturerID",
ADD COLUMN     "lecturerNIP" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Seminar" DROP COLUMN "studentID",
ADD COLUMN     "studentNIM" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SeminarAdvisor" DROP COLUMN "lecturerID",
ADD COLUMN     "lecturerNIP" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SeminarAssessor" DROP COLUMN "lecturerID",
ADD COLUMN     "lecturerNIP" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Seminar" ADD CONSTRAINT "Seminar_studentNIM_fkey" FOREIGN KEY ("studentNIM") REFERENCES "Student"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAdvisor" ADD CONSTRAINT "SeminarAdvisor_lecturerNIP_fkey" FOREIGN KEY ("lecturerNIP") REFERENCES "Lecturer"("nip") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAssessor" ADD CONSTRAINT "SeminarAssessor_lecturerNIP_fkey" FOREIGN KEY ("lecturerNIP") REFERENCES "Lecturer"("nip") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_lecturerNIP_fkey" FOREIGN KEY ("lecturerNIP") REFERENCES "Lecturer"("nip") ON DELETE RESTRICT ON UPDATE CASCADE;
