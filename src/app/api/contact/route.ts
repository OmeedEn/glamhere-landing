import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const entry = {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  };

  // Store submissions in a local JSON file (replace with DB/email service in production)
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "contacts.json");

  try {
    await fs.mkdir(dataDir, { recursive: true });

    let existing: unknown[] = [];
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      // File doesn't exist yet
    }

    existing.push(entry);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
