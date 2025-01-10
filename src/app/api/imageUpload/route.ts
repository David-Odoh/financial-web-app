import { NextResponse } from "next/server";
import { allowedMimeTypes, uploadToIPFS } from "./ipfsHelpers";
import { fileTypeFromBuffer } from "file-type";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.startsWith("application/octet-stream")) {
      return NextResponse.json(
        { error: "Unsupported content type" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await req.arrayBuffer());
    const contentDisposition = req.headers.get("content-disposition");
    const filenameMatch = contentDisposition?.match(/filename="(.+)"/);
    const filename = filenameMatch ? filenameMatch[1] : "uploaded_artwork";

    const fileType = await fileTypeFromBuffer(fileBuffer);
    const mimeType = fileType?.mime;
    if (!mimeType || !allowedMimeTypes.includes(mimeType)) {
      return NextResponse.json(
        { error: "Unsupported file type" },
        { status: 400 }
      );
    }

    const [ipfsCID] = await Promise.all([uploadToIPFS(fileBuffer, filename)]);

    return NextResponse.json({ ipfsCID });
  } catch (error) {
    console.error("Error processing media file:", error);
    return NextResponse.json(
      { error: "Failed to process media file" },
      { status: 500 }
    );
  }
}
