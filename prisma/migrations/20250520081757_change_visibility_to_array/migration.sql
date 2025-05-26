/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Announcement` table. All the data in the column will be lost.
  - The `visibility` column on the `Announcement` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "updatedAt",
DROP COLUMN "visibility",
ADD COLUMN     "visibility" TEXT[];
