import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "waitlist.json");

interface WaitlistEntry {
  name: string;
  email: string;
  role: string;
  position: number;
  timestamp: string;
}

async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, role } = body;

  if (!name || !email || !role) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  await fs.mkdir(dataDir, { recursive: true });
  const existing = await readWaitlist();

  // Check for duplicate email
  if (existing.some((e) => e.email.toLowerCase() === email.toLowerCase())) {
    const entry = existing.find((e) => e.email.toLowerCase() === email.toLowerCase())!;
    return NextResponse.json({ success: true, position: entry.position });
  }

  const position = existing.length + 1;
  const entry: WaitlistEntry = {
    name,
    email,
    role,
    position,
    timestamp: new Date().toISOString(),
  };

  existing.push(entry);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

  return NextResponse.json({ success: true, position });
}

export async function GET() {
  const existing = await readWaitlist();
  return NextResponse.json({ count: existing.length });
}
