/*
  Warnings:

  - A unique constraint covering the columns `[seminarID,lecturerNIP]` on the table `Assessment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Assessment_seminarID_lecturerNIP_key" ON "Assessment"("seminarID", "lecturerNIP");
