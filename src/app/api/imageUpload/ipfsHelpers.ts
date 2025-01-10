import pinataSDK from "@pinata/sdk";
import { Readable } from "stream";

const pinata = new pinataSDK(
  process.env.NEXT_PUBLIC_PINATA_API_KEY!,
  process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY!
);

export const allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

function bufferToStream(buffer: Buffer): Readable {
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);
  return readable;
}

export async function uploadToIPFS(
  fileBuffer: Buffer,
  filename: string
): Promise<string> {
  const stream = bufferToStream(fileBuffer);
  const options = { pinataMetadata: { name: filename } };
  const result = await pinata.pinFileToIPFS(stream, options);
  return result.IpfsHash;
}
