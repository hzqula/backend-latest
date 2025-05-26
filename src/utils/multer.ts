import multer from "multer";

export const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    const maxSize = 2 * 1024 * 1024;
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Hanya file gambar (JPEG, PNG) yang diperbolehkan"));
    }
    if (file.size > maxSize) {
      return cb(new Error("Ukuran file maksimum adalah 2MB"));
    }
    cb(null, true);
  },
  limits: { fileSize: 2 * 1024 * 1024 },
});
