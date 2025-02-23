/*
  Warnings:

  - A unique constraint covering the columns `[studentID]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lecturerID]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[coordinatorID]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_coordinator_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_lecturer_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_student_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "coordinatorID" INTEGER,
ADD COLUMN     "lecturerID" INTEGER,
ADD COLUMN     "studentID" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_studentID_key" ON "User"("studentID");

-- CreateIndex
CREATE UNIQUE INDEX "User_lecturerID_key" ON "User"("lecturerID");

-- CreateIndex
CREATE UNIQUE INDEX "User_coordinatorID_key" ON "User"("coordinatorID");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_lecturerID_fkey" FOREIGN KEY ("lecturerID") REFERENCES "Lecturer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_coordinatorID_fkey" FOREIGN KEY ("coordinatorID") REFERENCES "Coordinator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
