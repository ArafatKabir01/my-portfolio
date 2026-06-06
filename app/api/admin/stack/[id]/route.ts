import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import StackModel from "@/lib/models/stack.model";
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
    const item = await StackModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(item);
  } catch (err) {
    console.error("stack PUT error", err);
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
    await StackModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("stack DELETE error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
