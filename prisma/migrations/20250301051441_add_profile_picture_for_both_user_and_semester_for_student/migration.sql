-- AlterTable
ALTER TABLE "Coordinator" ADD COLUMN     "profile_picture" TEXT;

-- AlterTable
ALTER TABLE "Lecturer" ADD COLUMN     "profile_picture" TEXT;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "profile_picture" TEXT,
ADD COLUMN     "semester" INTEGER;
