/*
  Warnings:

  - Added the required column `visibility` to the `Announcement` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('LECTURER', 'STUDENT', 'PUBLIC');

-- AlterTable
ALTER TABLE "Announcement" ADD COLUMN     "image" TEXT,
ADD COLUMN     "visibility" "Visibility" NOT NULL;
