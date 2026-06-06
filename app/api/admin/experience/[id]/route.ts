import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ExperienceModel from "@/lib/models/experience.model";
import { requireAdmin } from "@/lib/api-auth";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const { id } = await params;
    await connectDB();
    const body = await req.json();
    const item = await ExperienceModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(item);
  } catch (err) {
    console.error("experience PUT error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    const { id } = await params;
    await connectDB();
    await ExperienceModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("experience DELETE error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
