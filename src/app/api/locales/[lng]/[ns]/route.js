import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  const { lng, ns } = params;
  const filePath = path.resolve(".", `src/locales/${lng}/${ns}.json`);

  console.log(`Attempting to read file at: ${filePath}`);

  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
    return new Response(JSON.stringify({ error: "File not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
