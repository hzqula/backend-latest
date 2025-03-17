import { google } from "googleapis";
import { Readable } from "stream";

const auth = new google.auth.GoogleAuth({
  keyFile: "./src/configs/latest-453203-4480326fb256.json",
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

export const createFolder = async (
  folderName: string,
  parentFolderId?: string
): Promise<string> => {
  const fileMetadata = {
    name: folderName,
    mimeType: "application/vnd.google-apps.folder",
    parents: parentFolderId ? [parentFolderId] : undefined,
  };

  const res = await drive.files.create({
    requestBody: fileMetadata,
    fields: "id",
  });
  return res.data.id!;
};

export const uploadFileToDrive = async (
  file: Buffer,
  fileName: string,
  mimeType: string,
  folderId?: string
): Promise<string> => {
  const fileMetadata = {
    name: fileName,
    parents: folderId ? [folderId] : undefined,
  };
  const media = {
    mimeType,
    body: Readable.from(file),
  };

  try {
    const res = await drive.files.create({
      requestBody: fileMetadata,
      media,
      fields: "id, webViewLink",
    });

    await drive.permissions.create({
      fileId: res.data.id!,
      requestBody: { role: "reader", type: "anyone" },
    });

    return res.data.webViewLink!;
  } catch (error) {
    throw new Error(`Gagal mengunggah file Google Drive: ${error}`);
  }
};

export const deleteFileFromDrive = async (fileId: string): Promise<void> => {
  try {
    await drive.files.delete({ fileId });
    console.log(`Deleted file from Drive: ${fileId}`);
  } catch (error) {
    console.error(`Failed to delete file from Drive: ${error}`);
    throw new Error(`Gagal menghapus file: ${error}`);
  }
};
