/*
  Warnings:

  - You are about to drop the column `guidance_score` on the `Assessment` table. All the data in the column will be lost.
  - You are about to drop the column `title_score` on the `Assessment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "guidance_score",
DROP COLUMN "title_score",
ADD COLUMN     "characteristic_score" DOUBLE PRECISION,
ADD COLUMN     "mastery_score" DOUBLE PRECISION;
