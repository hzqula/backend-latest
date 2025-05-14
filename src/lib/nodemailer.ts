import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASSWORD } from "../configs/env";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

interface AssessmentEmailOptions {
  to: string;
  seminarId: string;
  title: string;
  lecturerName: string;
  studentNIM: string;
  studentName: string;
  assessmentTime: string;
  writingScore: number;
  presentationScore: number;
  masteryScore: number;
  characteristicScore: number | null;
  feedback: string | undefined;
  seminarType: string;
  lecturerRole: "ADVISOR" | "ASSESSOR"; // Tambahkan lecturerRole
}

export const sendAssessmentEmail = async ({
  to,
  seminarId,
  title,
  lecturerName,
  studentNIM,
  studentName,
  assessmentTime,
  writingScore,
  presentationScore,
  masteryScore,
  characteristicScore,
  feedback,
  seminarType,
  lecturerRole,
}: AssessmentEmailOptions) => {
  // Format seminarType: kapitalisasi huruf pertama, sisanya huruf kecil
  const formattedSeminarType = seminarType.charAt(0).toUpperCase() + seminarType.slice(1).toLowerCase();

  // Tentukan subject dan roleText berdasarkan lecturerRole
  const subject = lecturerRole === "ADVISOR"
    ? `Riwayat Penilaian Seminar ${formattedSeminarType} yang anda bimbing`
    : `Riwayat Penilaian Seminar ${formattedSeminarType} yang anda uji`;
  const roleText = lecturerRole === "ADVISOR" ? "pembimbing" : "penguji";

  const mailOptions = {
    from: `"Koordiantor Tugas Akhir Teknik Lingkungan" <${EMAIL_USER}>`,
    to,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #000;">Penilaian Seminar ${formattedSeminarType}</h2>
        <p style="font-size: 16px; color: #000;">Yth. Dosen ${lecturerName},</p>
        <p style="font-size: 16px; color: #000;">Penilaian yang Anda berikan sebagai ${roleText} untuk seminar ${formattedSeminarType.toLowerCase()} berikut telah terekam:</p>
        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">

        <ul style="font-size: 14px; color: #000; list-style: none; padding: 0;">
            <li><strong>Waktu Penilaian:</strong> ${assessmentTime}</li>
            <li><strong>Judul:</strong> ${title}</li>
            <li><strong>Nama Mahasiswa:</strong> ${studentName}</li>
            <li><strong>NIM:</strong> ${studentNIM}</li>
            ${lecturerRole === "ASSESSOR" ? `<li><strong>Nilai Penulisan:</strong> <strong>${writingScore}</strong></li>` : ''}
            <li><strong>Nilai Presentasi:</strong> <strong>${presentationScore}</strong></li>
            <li><strong>Nilai Penguasaan:</strong> <strong>${masteryScore}</strong></li>
            ${lecturerRole === "ADVISOR" ? `<li><strong>Nilai Karakteristik:</strong> <strong>${characteristicScore !== null ? characteristicScore : 'Tidak Ada'}</strong></li>` : ''}
        </ul>
  
        </div>
        <p style="font-size: 14px; color: #000;">Terima kasih atas kontribusi Anda pada penilaian seminar ${formattedSeminarType}.</p>
        <p style="font-size: 14px; color: #000;">Hormat kami,<br>Koordinator Tugas Akhir Teknik Lingkungan</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Gagal mengirim email penilaian:", error);
    return false;
  }
};

export const sendOTPEmail = async (email: string, otp: number) => {
  const mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: "Kode OTP Untuk Daftar Akun di LATEST",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Your OTP Verification Code</h2>
        <p style="font-size: 16px; color: #666;">Here is your OTP code for verification:</p>
        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0;">
          <span style="font-size: 24px; font-weight: bold; color: #333;">${otp}</span>
        </div>
        <p style="font-size: 14px; color: #666;">This code will expire in 5 minutes.</p>
        <p style="font-size: 14px; color: #666;">If you did not request this code, please ignore this email.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};