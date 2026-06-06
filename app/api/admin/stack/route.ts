import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import StackModel from "@/lib/models/stack.model";
import { requireAdmin } from "@/lib/api-auth";

export async function GET() {
  try {
    await connectDB();
    const stack = await StackModel.find().sort({ order: 1 }).lean();
    return NextResponse.json(stack);
  } catch (err) {
    console.error("stack GET error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    await connectDB();
    const body = await req.json();
    const count = await StackModel.countDocuments();
    const item = await StackModel.create({ ...body, order: count });
    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    console.error("stack POST error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
