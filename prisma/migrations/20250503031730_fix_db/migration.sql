-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'LECTURER', 'COORDINATOR');

-- CreateEnum
CREATE TYPE "SeminarType" AS ENUM ('PROPOSAL', 'HASIL');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('ADVISOR_AVAILABILITY', 'KRS', 'ADVISOR_ASSISTANCE', 'SEMINAR_ATTENDANCE', 'THESIS_PROPOSAL');

-- CreateEnum
CREATE TYPE "SeminarStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'SCHEDULED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "LecturerRole" AS ENUM ('ADVISOR', 'ASSESSOR');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isVerify" BOOLEAN NOT NULL DEFAULT false,
    "studentID" INTEGER,
    "lecturerID" INTEGER,
    "coordinatorID" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OTP" (
    "id" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "nim" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "profile_picture" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lecturer" (
    "id" SERIAL NOT NULL,
    "nip" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "profile_picture" TEXT,

    CONSTRAINT "Lecturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordinator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profile_picture" TEXT,

    CONSTRAINT "Coordinator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seminar" (
    "id" SERIAL NOT NULL,
    "type" "SeminarType" NOT NULL,
    "title" TEXT NOT NULL,
    "status" "SeminarStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "folderId" TEXT,
    "studentNIM" TEXT NOT NULL,
    "time" TIMESTAMP(3),
    "room" TEXT,

    CONSTRAINT "Seminar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeminarAdvisor" (
    "id" SERIAL NOT NULL,
    "seminarID" INTEGER NOT NULL,
    "lecturerNIP" TEXT NOT NULL,

    CONSTRAINT "SeminarAdvisor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeminarAssessor" (
    "id" SERIAL NOT NULL,
    "seminarID" INTEGER NOT NULL,
    "lecturerNIP" TEXT NOT NULL,

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
    "lecturerNIP" TEXT NOT NULL,
    "seminarID" INTEGER NOT NULL,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecurityLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "action" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SecurityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_studentID_key" ON "User"("studentID");

-- CreateIndex
CREATE UNIQUE INDEX "User_lecturerID_key" ON "User"("lecturerID");

-- CreateIndex
CREATE UNIQUE INDEX "User_coordinatorID_key" ON "User"("coordinatorID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_nim_key" ON "Student"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "Lecturer_nip_key" ON "Lecturer"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "Assessment_seminarID_lecturerNIP_key" ON "Assessment"("seminarID", "lecturerNIP");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_lecturerID_fkey" FOREIGN KEY ("lecturerID") REFERENCES "Lecturer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_coordinatorID_fkey" FOREIGN KEY ("coordinatorID") REFERENCES "Coordinator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OTP" ADD CONSTRAINT "OTP_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seminar" ADD CONSTRAINT "Seminar_studentNIM_fkey" FOREIGN KEY ("studentNIM") REFERENCES "Student"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAdvisor" ADD CONSTRAINT "SeminarAdvisor_seminarID_fkey" FOREIGN KEY ("seminarID") REFERENCES "Seminar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAdvisor" ADD CONSTRAINT "SeminarAdvisor_lecturerNIP_fkey" FOREIGN KEY ("lecturerNIP") REFERENCES "Lecturer"("nip") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAssessor" ADD CONSTRAINT "SeminarAssessor_seminarID_fkey" FOREIGN KEY ("seminarID") REFERENCES "Seminar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarAssessor" ADD CONSTRAINT "SeminarAssessor_lecturerNIP_fkey" FOREIGN KEY ("lecturerNIP") REFERENCES "Lecturer"("nip") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeminarDocument" ADD CONSTRAINT "SeminarDocument_seminarID_fkey" FOREIGN KEY ("seminarID") REFERENCES "Seminar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_lecturerNIP_fkey" FOREIGN KEY ("lecturerNIP") REFERENCES "Lecturer"("nip") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_seminarID_fkey" FOREIGN KEY ("seminarID") REFERENCES "Seminar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecurityLog" ADD CONSTRAINT "SecurityLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
