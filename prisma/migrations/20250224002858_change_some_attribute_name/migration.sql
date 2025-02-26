/*
  Warnings:

  - The values [Student,Lecturer,Coordinator] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `no_hp` on the `Lecturer` table. All the data in the column will be lost.
  - You are about to drop the column `no_hp` on the `Student` table. All the data in the column will be lost.
  - Added the required column `phone_number` to the `Lecturer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('STUDENT', 'LECTURER', 'COORDINATOR');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
COMMIT;

-- AlterTable
ALTER TABLE "Lecturer" DROP COLUMN "no_hp",
ADD COLUMN     "phone_number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "no_hp",
ADD COLUMN     "phone_number" TEXT NOT NULL;
