import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ProjectModel from "@/lib/models/project.model";
import { requireAdmin } from "@/lib/api-auth";

export async function GET() {
  try {
    await connectDB();
    const projects = await ProjectModel.find().sort({ order: 1 }).lean();
    return NextResponse.json(projects);
  } catch (err) {
    console.error("projects GET error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    await connectDB();
    const body = await req.json();
    const count = await ProjectModel.countDocuments();
    const project = await ProjectModel.create({ ...body, order: count });
    return NextResponse.json(project, { status: 201 });
  } catch (err) {
    console.error("projects POST error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
