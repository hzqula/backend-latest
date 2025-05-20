import { Request, Response, RequestHandler } from "express";
import { AnnouncementService } from "../services/announcement.service";
import {
  logCreateAnnouncementAttempt,
  logUpdateAnnouncementAttempt,
  logDeleteAnnouncementAttempt,
} from "../middlewares/securityLogMiddleware";

interface AuthenticatedRequest extends Request {
  user?: {
    userID: number;
    email: string;
    role: string;
  };
}

const announcementService = new AnnouncementService();

export const createAnnouncement: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { title, content } = req.body;
    let visibility = req.body.visibility;
    const file = req.file;
    const coordinatorId = req.user?.userID;
    const email = req.user?.email;

    if (!coordinatorId) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Coordinator ID tidak ditemukan";
      await logCreateAnnouncementAttempt(req, res, () => {});
      res.status(403).json({
        success: false,
        message: "Coordinator ID tidak ditemukan",
      });
      return;
    }

    if (typeof visibility === "string") {
      try {
        visibility = JSON.parse(visibility);
      } catch (error) {
        req.body.email = email;
        req.body.success = false;
        req.body.reason = "Format visibilitas tidak valid";
        await logCreateAnnouncementAttempt(req, res, () => {});
        res.status(400).json({
          success: false,
          message: "Format visibilitas tidak valid",
        });
      }
    }

    if (!Array.isArray(visibility)) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Visibilitas harus berupa array";
      await logCreateAnnouncementAttempt(req, res, () => {});
      res.status(400).json({
        success: false,
        message: "Visibilitas harus berupa array",
      });
    }

    const announcement = await announcementService.createAnnouncement(
      title,
      content,
      visibility,
      coordinatorId,
      file
    );

    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Pengumuman berhasil dibuat";
    await logCreateAnnouncementAttempt(req, res, () => {});

    res.status(201).json({
      success: true,
      announcement,
      message: "Berhasil membuat pengumuman",
    });
  } catch (error) {
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    await logCreateAnnouncementAttempt(req, res, () => {});
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat membuat pengumuman",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const updateAnnouncement: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    let visibility = req.body.visibility;
    const file = req.file;
    const coordinatorId = req.user?.userID;
    const email = req.user?.email;

    const announcementId = parseInt(id);
    if (isNaN(announcementId)) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Invalid announcement ID";
      await logUpdateAnnouncementAttempt(req, res, () => {});
      res.status(400).json({
        success: false,
        message: "ID pengumuman tidak valid",
      });
    }

    if (!coordinatorId) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Coordinator ID tidak ditemukan";
      await logUpdateAnnouncementAttempt(req, res, () => {});
      res.status(403).json({
        success: false,
        message: "Coordinator ID tidak ditemukan",
      });
      return;
    }

    if (typeof visibility === "string") {
      try {
        visibility = JSON.parse(visibility);
      } catch (error) {
        req.body.email = email;
        req.body.success = false;
        req.body.reason = "Format visibilitas tidak valid";
        await logUpdateAnnouncementAttempt(req, res, () => {});
        res.status(400).json({
          success: false,
          message: "Format visibilitas tidak valid",
        });
      }
    }

    if (!Array.isArray(visibility)) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Visibilitas harus berupa array";
      await logUpdateAnnouncementAttempt(req, res, () => {});
      res.status(400).json({
        success: false,
        message: "Visibilitas harus berupa array",
      });
    }

    const announcement = await announcementService.updateAnnouncement(
      announcementId,
      title,
      content,
      visibility,
      coordinatorId,
      file
    );

    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Pengumuman berhasil diperbarui";
    await logUpdateAnnouncementAttempt(req, res, () => {});

    res.status(200).json({
      success: true,
      announcement,
      message: "Berhasil memperbarui pengumuman",
    });
  } catch (error) {
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    await logUpdateAnnouncementAttempt(req, res, () => {});
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat memperbarui pengumuman",
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
    const { id } = req.params;
    const coordinatorId = req.user?.userID;
    const email = req.user?.email;

    const announcementId = parseInt(id);
    if (isNaN(announcementId)) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Invalid announcement ID";
      await logDeleteAnnouncementAttempt(req, res, () => {});
      res.status(400).json({
        success: false,
        message: "ID pengumuman tidak valid",
      });
    }

    if (!coordinatorId) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Coordinator ID tidak ditemukan";
      await logDeleteAnnouncementAttempt(req, res, () => {});
      res.status(403).json({
        success: false,
        message: "Coordinator ID tidak ditemukan",
      });
      return;
    }

    await announcementService.deleteAnnouncement(announcementId, coordinatorId);

    req.body.email = email;
    req.body.success = true;
    req.body.reason = "Pengumuman berhasil dihapus";
    await logDeleteAnnouncementAttempt(req, res, () => {});

    res.status(200).json({
      success: true,
      message: "Berhasil menghapus pengumuman",
    });
  } catch (error) {
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    await logDeleteAnnouncementAttempt(req, res, () => {});
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat menghapus pengumuman",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const getAllAnnouncements: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const coordinatorId = req.user?.userID;
    const email = req.user?.email;

    if (!coordinatorId) {
      req.body.email = email;
      req.body.success = false;
      req.body.reason = "Coordinator ID tidak ditemukan";
      await logCreateAnnouncementAttempt(req, res, () => {});
      res.status(403).json({
        success: false,
        message: "Coordinator ID tidak ditemukan",
      });
      return;
    }

    const announcements = await announcementService.getAllAnnouncements(
      coordinatorId
    );

    res.status(200).json({
      success: true,
      announcements,
      message: "Berhasil mendapatkan daftar pengumuman",
    });
  } catch (error) {
    req.body.email = req.user?.email;
    req.body.success = false;
    req.body.reason = error instanceof Error ? error.message : "Unknown error";
    await logCreateAnnouncementAttempt(req, res, () => {});
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mendapatkan daftar pengumuman",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const getPublicAnnouncements: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const announcements = await announcementService.getPublicAnnouncements();
    res.status(200).json({
      success: true,
      announcements,
      message: "Berhasil mendapatkan daftar pengumuman publik",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mendapatkan daftar pengumuman publik",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const getAnnouncementsForRole: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const role = req.user?.role;
    if (!role || !["STUDENT", "LECTURER"].includes(role)) {
      res.status(403).json({
        success: false,
        message: "Role tidak valid untuk mengakses pengumuman",
      });
      return;
    }

    const announcements =
      await announcementService.getAnnouncementsByVisibility(
        role as "STUDENT" | "LECTURER"
      );

    res.status(200).json({
      success: true,
      announcements,
      message: `Berhasil mendapatkan daftar pengumuman untuk ${role}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mendapatkan daftar pengumuman",
      error:
        error instanceof Error ? error.message : "Kesalahan tidak diketahui",
    });
  }
};

export const getAnnouncementById: RequestHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { id } = req.params;
    const announcementId = parseInt(id);
    if (isNaN(announcementId)) {
      res.status(400).json({
        success: false,
        message: "ID pengumuman tidak valid",
      });
      return;
    }

    const announcement = await announcementService.getAnnouncementById(
      announcementId
    );

    res.status(200).json({
      success: true,
      announcement,
      message: "Berhasil mendapatkan data pengumuman",
    });
  } catch (error) {
    res
      .status(
        error instanceof Error && error.message === "Pengumuman tidak ditemukan"
          ? 404
          : 500
      )
      .json({
        success: false,
        message: "Terjadi kesalahan saat mendapatkan data pengumuman",
        error:
          error instanceof Error ? error.message : "Kesalahan tidak diketahui",
      });
  }
};
