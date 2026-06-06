import { connectDB } from "@/lib/db";
import StackModel from "@/lib/models/stack.model";
import { StackList } from "@/components/admin/stack-list";
import type { StackData } from "@/lib/models/stack.model";

export const metadata = { title: "Tech Stack — Admin" };

export default async function AdminStackPage() {
  let items: StackData[] = [];
  try {
    await connectDB();
    items = (await StackModel.find().sort({ order: 1 }).lean()) as StackData[];
  } catch { /* db not available */ }

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h2 className="admin-page-title">Tech Stack</h2>
        <p className="admin-page-sub">Manage the skill categories and proficiency levels shown on your site</p>
      </div>
      <StackList initial={items} />
    </div>
  );
}
