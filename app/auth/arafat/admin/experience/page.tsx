import { connectDB } from "@/lib/db";
import ExperienceModel from "@/lib/models/experience.model";
import { ExperienceList } from "@/components/admin/experience-list";
import type { ExperienceData } from "@/lib/models/experience.model";

export const metadata = { title: "Experience — Admin" };

export default async function AdminExperiencePage() {
  let items: ExperienceData[] = [];
  try {
    await connectDB();
    items = (await ExperienceModel.find().sort({ order: 1 }).lean()) as ExperienceData[];
  } catch { /* db not available */ }

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h2 className="admin-page-title">Experience</h2>
        <p className="admin-page-sub">Manage your work history shown in the timeline</p>
      </div>
      <ExperienceList initial={items} />
    </div>
  );
}
