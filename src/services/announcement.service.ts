import { Announcement, Prisma } from "../../prisma/app/generated/prisma/client";
import { prisma } from "../lib/prisma";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
  getPublicIdFromUrl,
} from "../utils/cloudinary";

export class AnnouncementService {
  // Membuat pengumuman baru
  async createAnnouncement(
    data: {
      title: string;
      content: string;
      visibility: "LECTURER" | "STUDENT" | "PUBLIC"; // Tipe sesuai dengan enum Visibility
      coordinatorId: number;
    },
    file?: Express.Multer.File
  ): Promise<Announcement> {
    let image: string | undefined;

    // Jika ada file gambar, unggah ke Cloudinary
    if (file) {
      // Simpan sementara pengumuman untuk mendapatkan ID
      const tempAnnouncement = await prisma.announcement.create({
        data: {
          title: data.title,
          content: data.content,
          visibility: data.visibility, // Hapus casting ke Prisma.EnumVisibilityFilter
          coordinatorId: data.coordinatorId,
        },
      });

      const folder = `pengumuman/${tempAnnouncement.id}`;
      const publicId = `${Date.now()}-pengumuman`;
      image = await uploadToCloudinary(file.buffer, folder, publicId);

      // Perbarui pengumuman dengan URL gambar
      return prisma.announcement.update({
        where: { id: tempAnnouncement.id },
        data: { image },
      });
    }

    // Jika tidak ada gambar, buat pengumuman tanpa gambar
    return prisma.announcement.create({
      data: {
        title: data.title,
        content: data.content,
        visibility: data.visibility, // Hapus casting ke Prisma.EnumVisibilityFilter
        coordinatorId: data.coordinatorId,
      },
    });
  }

  // Mengambil pengumuman berdasarkan visibilitas dan role pengguna
  async getAnnouncements(
    role?: "STUDENT" | "LECTURER" | "COORDINATOR",
    forPublic: boolean = false
  ): Promise<Announcement[]> {
    if (forPublic) {
      // Jika untuk landing page, hanya ambil pengumuman dengan visibilitas PUBLIC
      return prisma.announcement.findMany({
        where: {
          visibility: "PUBLIC",
        },
        include: {
          coordinator: {
            select: { name: true, profilePicture: true },
          },
        },
        orderBy: { createdAt: "desc" },
      });
    }

    if (!role) {
      throw new Error("Role pengguna harus disediakan untuk dashboard");
    }

    // Untuk dashboard, ambil pengumuman berdasarkan role
    const visibilityFilter =
      role === "STUDENT" ? "STUDENT" : role === "LECTURER" ? "LECTURER" : null;

    if (!visibilityFilter) {
      return []; // Coordinator tidak perlu melihat pengumuman di dashboard mereka
    }

    return prisma.announcement.findMany({
      where: {
        visibility: visibilityFilter,
      },
      include: {
        coordinator: {
          select: { name: true, profilePicture: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  // Menghapus pengumuman
  async deleteAnnouncement(announcementId: number): Promise<void> {
    const announcement = await prisma.announcement.findUnique({
      where: { id: announcementId },
    });

    if (!announcement) {
      throw new Error("Pengumuman tidak ditemukan");
    }

    // Hapus gambar dari Cloudinary jika ada
    if (announcement.image) {
      const publicId = getPublicIdFromUrl(announcement.image);
      try {
        await deleteFromCloudinary(publicId);
        console.log("Image deleted from Cloudinary:", publicId);
      } catch (error) {
        console.error("Failed to delete image from Cloudinary:", error);
      }
    }

    // Hapus pengumuman dari database
    await prisma.announcement.delete({
      where: { id: announcementId },
    });
  }
}
