import { connectDB } from "@/lib/db";
import WIDModel from "@/lib/models/wid.model";
import { WIDList } from "@/components/admin/wid-list";
import type { WIDData } from "@/lib/models/wid.model";

export const metadata = { title: "What I Do — Admin" };

export default async function AdminWIDPage() {
  let items: WIDData[] = [];
  try {
    await connectDB();
    items = (await WIDModel.find().sort({ order: 1 }).lean()) as WIDData[];
  } catch { /* db not available */ }

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h2 className="admin-page-title">What I Do</h2>
        <p className="admin-page-sub">Manage the service cards shown on your landing page</p>
      </div>
      <WIDList initial={items} />
    </div>
  );
}
