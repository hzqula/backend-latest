import { prisma } from "../lib/prisma";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
  deleteFolderFromCloudinary,
} from "../utils/cloudinary";
import {
  Announcement,
  Visibility,
} from "../../prisma/app/generated/prisma/client";

export class AnnouncementService {
  async createAnnouncement(
    title: string,
    content: string,
    visibility: Visibility[],
    coordinatorId: number,
    file?: Express.Multer.File
  ): Promise<Announcement> {
    // Validasi visibilitas
    const validVisibilities: Visibility[] = ["LECTURER", "STUDENT", "PUBLIC"];
    const invalidVisibilities = visibility.filter(
      (v) => !validVisibilities.includes(v)
    );
    if (invalidVisibilities.length > 0) {
      throw new Error(
        `Visibilitas tidak valid: ${invalidVisibilities.join(", ")}`
      );
    }

    // Validasi koordinator
    const coordinator = await prisma.coordinator.findUnique({
      where: { id: coordinatorId },
    });
    if (!coordinator) {
      throw new Error("Koordinator tidak ditemukan");
    }

    let image: string | undefined;
    if (file) {
      const folder = `pengumuman/temp`; // Folder sementara, akan diupdate setelah ID diketahui
      const publicId = `${Date.now()}-${file.originalname.split(".")[0]}`;
      image = await uploadToCloudinary(file.buffer, folder, publicId);
    }

    // Buat pengumuman
    const announcement = await prisma.announcement.create({
      data: {
        title,
        content,
        visibility,
        coordinatorId,
        image,
      },
      include: {
        coordinator: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
    });

    // Jika ada gambar, pindahkan ke folder dengan ID pengumuman
    if (image && file) {
      const publicId = `pengumuman/${announcement.id}/${Date.now()}-${
        file.originalname.split(".")[0]
      }`;
      const newImageUrl = await uploadToCloudinary(
        file.buffer,
        `pengumuman/${announcement.id}`,
        publicId
      );
      await deleteFromCloudinary(
        `pengumuman/temp/${publicId.split("/").pop()}`
      );

      // Update URL gambar
      await prisma.announcement.update({
        where: { id: announcement.id },
        data: { image: newImageUrl },
      });
      announcement.image = newImageUrl;
    }

    return announcement;
  }

  async updateAnnouncement(
    id: number,
    title: string,
    content: string,
    visibility: Visibility[],
    coordinatorId: number,
    file?: Express.Multer.File
  ): Promise<Announcement> {
    // Validasi visibilitas
    const validVisibilities: Visibility[] = ["LECTURER", "STUDENT", "PUBLIC"];
    const invalidVisibilities = visibility.filter(
      (v) => !validVisibilities.includes(v)
    );
    if (invalidVisibilities.length > 0) {
      throw new Error(
        `Visibilitas tidak valid: ${invalidVisibilities.join(", ")}`
      );
    }

    // Validasi pengumuman
    const announcement = await prisma.announcement.findUnique({
      where: { id },
    });
    if (!announcement) {
      throw new Error("Pengumuman tidak ditemukan");
    }

    // Validasi koordinator
    if (announcement.coordinatorId !== coordinatorId) {
      throw new Error("Anda tidak berwenang untuk mengedit pengumuman ini");
    }

    let image = announcement.image;
    if (file) {
      // Hapus gambar lama jika ada
      if (announcement.image) {
        const publicId = announcement.image
          .split("/")
          .slice(-3)
          .join("/")
          .split(".")[0];
        await deleteFromCloudinary(publicId);
      }

      // Unggah gambar baru
      const folder = `pengumuman/${id}`;
      const publicId = `${Date.now()}-${file.originalname.split(".")[0]}`;
      image = await uploadToCloudinary(file.buffer, folder, publicId);
    }

    return prisma.announcement.update({
      where: { id },
      data: {
        title,
        content,
        visibility,
        image,
      },
      include: {
        coordinator: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
    });
  }

  async deleteAnnouncement(id: number, coordinatorId: number): Promise<void> {
    // Validasi pengumuman
    const announcement = await prisma.announcement.findUnique({
      where: { id },
    });
    if (!announcement) {
      throw new Error("Pengumuman tidak ditemukan");
    }

    // Validasi koordinator
    if (announcement.coordinatorId !== coordinatorId) {
      throw new Error("Anda tidak berwenang untuk menghapus pengumuman ini");
    }

    // Hapus folder Cloudinary jika ada gambar
    if (announcement.image) {
      const folder = `pengumuman/${id}`;
      await deleteFolderFromCloudinary(folder);
    }

    // Hapus pengumuman dari database
    await prisma.announcement.delete({
      where: { id },
    });
  }

  async getAllAnnouncements(coordinatorId: number): Promise<Announcement[]> {
    return prisma.announcement.findMany({
      where: { coordinatorId },
      orderBy: { createdAt: "desc" },
      include: {
        coordinator: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
    });
  }

  async getPublicAnnouncements(): Promise<Announcement[]> {
    return prisma.announcement.findMany({
      where: {
        visibility: {
          has: "PUBLIC",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        coordinator: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
    });
  }

  async getAnnouncementsByVisibility(
    visibility: Visibility
  ): Promise<Announcement[]> {
    return prisma.announcement.findMany({
      where: {
        visibility: {
          has: visibility,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        coordinator: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
    });
  }

  async getAnnouncementById(id: number): Promise<Announcement> {
    const announcement = await prisma.announcement.findUnique({
      where: { id },
      include: {
        coordinator: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
    });
    if (!announcement) {
      throw new Error("Pengumuman tidak ditemukan");
    }
    return announcement;
  }
}
