import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/api-auth";
import { runSeed } from "@/lib/seed";

export async function POST(req: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    let force = false;
    try { const body = await req.json(); force = !!body.force; } catch { /* no body */ }
    const results = await runSeed(force);
    return NextResponse.json({ success: true, results });
  } catch (err) {
    console.error("seed error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
