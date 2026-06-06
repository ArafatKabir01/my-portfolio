import { connectDB } from "@/lib/db";
import HeroModel from "@/lib/models/hero.model";
import { HeroForm } from "@/components/admin/hero-form";
import type { HeroData } from "@/lib/models/hero.model";

export const metadata = { title: "Edit Hero — Admin" };

export default async function AdminHeroPage() {
  let hero: HeroData | null = null;
  try {
    await connectDB();
    hero = (await HeroModel.findOne().lean()) as HeroData | null;
  } catch { /* db not available */ }

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h2 className="admin-page-title">Hero Section</h2>
        <p className="admin-page-sub">Edit the content shown in the hero section of your landing page</p>
      </div>
      <HeroForm initial={hero} />
    </div>
  );
}
