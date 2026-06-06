import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ProjectModel from "@/lib/models/project.model";
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
    const project = await ProjectModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(project);
  } catch (err) {
    console.error("projects PUT error", err);
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
    await ProjectModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("projects DELETE error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
