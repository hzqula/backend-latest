import { google } from "googleapis";
import { Readable } from "stream";

const auth = new google.auth.GoogleAuth({
  keyFile: "./src/configs/latest-453203-4480326fb256.json",
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

export const uploadFileToDrive = async (
  file: Buffer,
  fileName: string,
  mimeType: string,
  folderID?: string
): Promise<string> => {
  const fileMetadata = {
    name: fileName,
    parents: folderID ? [folderID] : undefined,
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
    throw new Error(`Failed to upload file to Google Drive: ${error}`);
  }
};
