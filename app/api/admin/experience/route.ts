import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ExperienceModel from "@/lib/models/experience.model";
import { requireAdmin } from "@/lib/api-auth";

export async function GET() {
  try {
    await connectDB();
    const experience = await ExperienceModel.find().sort({ order: 1 }).lean();
    return NextResponse.json(experience);
  } catch (err) {
    console.error("experience GET error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    await connectDB();
    const body = await req.json();
    const count = await ExperienceModel.countDocuments();
    const item = await ExperienceModel.create({ ...body, order: count });
    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    console.error("experience POST error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
