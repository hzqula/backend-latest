/*
  Warnings:

  - You are about to drop the column `nip` on the `Coordinator` table. All the data in the column will be lost.
  - You are about to drop the `Assesment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Thesis` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "SeminarType" AS ENUM ('PROPOSAL', 'HASIL');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('ADVISOR_AVAILABILITY', 'KRS', 'ADVISOR_ASSISSTANCE', 'SEMINAR_ATTENDANCE', 'THESIS_PROPOSAL');

-- CreateEnum
CREATE TYPE "SeminarStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'SCHEDULED', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "Assesment" DROP CONSTRAINT "Assesment_lecturerId_fkey";

-- DropForeignKey
ALTER TABLE "Assesment" DROP CONSTRAINT "Assesment_thesisId_fkey";

-- DropForeignKey
ALTER TABLE "Thesis" DROP CONSTRAINT "Thesis_studentID_fkey";

-- AlterTable
ALTER TABLE "Coordinator" DROP COLUMN "nip";

-- DropTable
DROP TABLE "Assesment";

-- DropTable
DROP TABLE "Thesis";

-- DropEnum
DROP TYPE "ThesisStatus";

-- CreateTable
CREATE TABLE "Seminar" (
    "id" SERIAL NOT NULL,
    "type" "SeminarType" NOT NULL,
    "title" TEXT NOT NULL,
    "status" "SeminarStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentID" INTEGER NOT NULL,

    CONSTRAINT "Seminar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeminarAdvisor" (
    "id" SERIAL NOT NULL,
    "seminarID" INTEGER NOT NULL,
    "lecturerID" INTEGER NOT NULL,

    CONSTRAINT "SeminarAdvisor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeminarAssessor" (
    "id" SERIAL NOT NULL,
    "seminarID" INTEGER NOT NULL,
    "lecturerID" INTEGER NOT NULL,

    CONSTRAINT "SeminarAssessor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeminarDocument" (
    "id" SERIAL NOT NULL,
    "seminarID" INTEGER NOT NULL,
    "documentType" "DocumentType" NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileURL" TEXT NOT NULL,

    CONSTRAINT "SeminarDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assessment" (
    "id" SERIAL NOT NULL,
    "lecturer_role" "LecturerRole" NOT NULL,
    "writing_score" DOUBLE PRECISION,
    "presentation_score" DOUBLE PRECISION,
    "title_score" DOUBLE PRECISION,
    "guidance_score" DOUBLE PRECISION,
    "final_score" DOUBLE PRECISION,
    "feedback" TEXT,
    "lecturerID" INTEGER NOT NULL,
    "seminarID" INTEGER NOT NULL,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Seminar" ADD CONSTRAINT "Seminar_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAdvisor" ADD CONSTRAINT "SeminarAdvisor_seminarID_fkey" FOREIGN KEY ("seminarID") REFERENCES "Seminar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAdvisor" ADD CONSTRAINT "SeminarAdvisor_lecturerID_fkey" FOREIGN KEY ("lecturerID") REFERENCES "Lecturer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAssessor" ADD CONSTRAINT "SeminarAssessor_seminarID_fkey" FOREIGN KEY ("seminarID") REFERENCES "Seminar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAssessor" ADD CONSTRAINT "SeminarAssessor_lecturerID_fkey" FOREIGN KEY ("lecturerID") REFERENCES "Lecturer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarDocument" ADD CONSTRAINT "SeminarDocument_seminarID_fkey" FOREIGN KEY ("seminarID") REFERENCES "Seminar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_lecturerID_fkey" FOREIGN KEY ("lecturerID") REFERENCES "Lecturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_seminarID_fkey" FOREIGN KEY ("seminarID") REFERENCES "Seminar"("id") ON DELETE CASCADE ON UPDATE CASCADE;
