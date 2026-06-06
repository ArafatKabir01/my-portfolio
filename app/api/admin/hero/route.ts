import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import HeroModel from "@/lib/models/hero.model";
import { requireAdmin } from "@/lib/api-auth";

export async function GET() {
  try {
    await connectDB();
    const hero = await HeroModel.findOne().lean();
    return NextResponse.json(hero ?? {});
  } catch (err) {
    console.error("hero GET error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
  try {
    await connectDB();
    const body = await req.json();
    const hero = await HeroModel.findOneAndUpdate({}, body, {
      upsert: true,
      new: true,
      runValidators: true,
    }).lean();
    return NextResponse.json(hero);
  } catch (err) {
    console.error("hero PUT error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
