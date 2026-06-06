import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import WIDModel from "@/lib/models/wid.model";
import { requireAdmin } from "@/lib/api-auth";

export async function GET() {
  try {
    await connectDB();
    const wid = await WIDModel.find().sort({ order: 1 }).lean();
    return NextResponse.json(wid);
  } catch (err) {
    console.error("wid GET error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    await connectDB();
    const body = await req.json();
    const count = await WIDModel.countDocuments();
    const item = await WIDModel.create({ ...body, order: count });
    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    console.error("wid POST error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
