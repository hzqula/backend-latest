import { Response, Request, RequestHandler } from "express";
import { AnnouncementService } from "../services/announcement.service";
import { upload } from "../controllers/auth.controller";

interface AuthenticatedRequest extends Request {
  user?: {
    userID: number;
    email: string;
    role: string;
    nim?: string;
    nip?: string;
  };
}

const announcementService = new AnnouncementService();

export const createAnnouncement: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { title, content, visibility } = req.body;
    const coordinatorId = req.user?.userID;
    console.log("Req.user:", req.user); // Debugging

    if (!coordinatorId) {
      res.status(401).json({ error: "Coordinator tidak ditemukan" });
      return;
    }

    if (!title || !content || !visibility) {
      res
        .status(400)
        .json({ error: "Title, content, dan visibility harus diisi" });
      return;
    }

    if (!["LECTURER", "STUDENT", "PUBLIC"].includes(visibility)) {
      res.status(400).json({ error: "Visibilitas tidak valid" });
      return;
    }

    const announcement = await announcementService.createAnnouncement(
      {
        title,
        content,
        visibility,
        coordinatorId,
      },
      req.file
    );

    res.status(201).json({
      message: "Pengumuman berhasil dibuat",
      announcement,
    });
  } catch (error) {
    console.error("Gagal membuat pengumuman:", error);
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const getAnnouncements: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const role = req.user?.role as
      | "STUDENT"
      | "LECTURER"
      | "COORDINATOR"
      | undefined;
    const forPublic = req.query.forPublic === "true";

    if (forPublic && !role) {
      const announcements = await announcementService.getAnnouncements(
        undefined,
        true
      );
      res.status(200).json({
        announcements,
      });
      return;
    }

    if (!role) {
      res
        .status(401)
        .json({ error: "Role pengguna tidak ditemukan, silakan login" });
      return;
    }

    const announcements = await announcementService.getAnnouncements(
      role,
      forPublic
    );

    res.status(200).json({
      announcements,
    });
  } catch (error) {
    console.error("Gagal mengambil pengumuman:", error);
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const deleteAnnouncement: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const announcementId = parseInt(req.params.id);
    const coordinatorId = req.user?.userID;

    if (!coordinatorId) {
      res.status(401).json({ error: "Coordinator tidak ditemukan" });
      return;
    }

    await announcementService.deleteAnnouncement(announcementId);

    res.status(200).json({
      message: "Pengumuman berhasil dihapus",
    });
  } catch (error) {
    console.error("Gagal menghapus pengumuman:", error);
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};
