-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "DocumentType" ADD VALUE 'FREE_THEORY_CERTIFICATE';
ALTER TYPE "DocumentType" ADD VALUE 'ADVISOR_APPROVAL';
ALTER TYPE "DocumentType" ADD VALUE 'EXAMINER_APPROVAL';
ALTER TYPE "DocumentType" ADD VALUE 'TRANSCRIPT';
ALTER TYPE "DocumentType" ADD VALUE 'ASSISTANCE_SHEET';
ALTER TYPE "DocumentType" ADD VALUE 'FINAL_THESIS';
