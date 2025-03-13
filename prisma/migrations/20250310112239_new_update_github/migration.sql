/*
  Warnings:

  - The values [ADVISOR_ASSISSTANCE] on the enum `DocumentType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DocumentType_new" AS ENUM ('ADVISOR_AVAILABILITY', 'KRS', 'ADVISOR_ASSISTANCE', 'SEMINAR_ATTENDANCE', 'THESIS_PROPOSAL');
ALTER TABLE "SeminarDocument" ALTER COLUMN "documentType" TYPE "DocumentType_new" USING ("documentType"::text::"DocumentType_new");
ALTER TYPE "DocumentType" RENAME TO "DocumentType_old";
ALTER TYPE "DocumentType_new" RENAME TO "DocumentType";
DROP TYPE "DocumentType_old";
COMMIT;
