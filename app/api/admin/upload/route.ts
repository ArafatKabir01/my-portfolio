import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/api-auth";

export async function POST(req: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;
    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }
    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    const body = new URLSearchParams();
    body.set("key", process.env.IMGBB_API_KEY!);
    body.set("image", base64);

    const res = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (!data.success) {
      return NextResponse.json({ error: "ImageBB upload failed" }, { status: 500 });
    }
    return NextResponse.json({ url: data.data.url, displayUrl: data.data.display_url });
  } catch (err) {
    console.error("upload error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
