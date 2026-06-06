import { connectDB } from "@/lib/db";
import ProjectModel from "@/lib/models/project.model";
import { ProjectList } from "@/components/admin/project-list";
import type { ProjectData } from "@/lib/models/project.model";

export const metadata = { title: "Projects — Admin" };

export default async function AdminProjectsPage() {
  let projects: ProjectData[] = [];
  try {
    await connectDB();
    projects = (await ProjectModel.find().sort({ order: 1 }).lean()) as ProjectData[];
  } catch { /* db not available */ }

  return (
    <div className="admin-page">
      <div className="admin-page-head">
        <h2 className="admin-page-title">Projects</h2>
        <p className="admin-page-sub">Add, edit, or remove your featured projects</p>
      </div>
      <ProjectList initial={projects} />
    </div>
  );
}
