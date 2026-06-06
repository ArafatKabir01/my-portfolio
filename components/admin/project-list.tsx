"use client";

import { useState, useTransition } from "react";
import { Pencil, Trash2, Loader2 } from "lucide-react";
import type { ProjectData } from "@/lib/models/project.model";
import { ProjectForm } from "./project-form";
import { AdminNotice } from "./admin-notice";

type Props = { initial: ProjectData[] };

export function ProjectList({ initial }: Props) {
  const [projects, setProjects] = useState<ProjectData[]>(initial);
  const [editing, setEditing] = useState<ProjectData | null>(null);
  const [deleting, startDelete] = useTransition();
  const [notice, setNotice] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleSaved(p: ProjectData) {
    setProjects((prev) => {
      const idx = prev.findIndex((x) => x._id === p._id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = p;
        return next;
      }
      return [p, ...prev];
    });
    setEditing(null);
    setNotice({ msg: "Project saved!", type: "success" });
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this project? This cannot be undone.")) return;
    setDeletingId(id);
    startDelete(async () => {
      const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      setDeletingId(null);
      if (res.ok) {
        setProjects((prev) => prev.filter((p) => p._id !== id));
        setNotice({ msg: "Project deleted.", type: "success" });
      } else {
        setNotice({ msg: "Failed to delete project.", type: "error" });
      }
    });
  }

  return (
    <div>
      <AdminNotice message={notice?.msg ?? null} type={notice?.type} onDismiss={() => setNotice(null)} />

      <ProjectForm onSaved={handleSaved} />

      {projects.length > 0 && (
        <div className="admin-list">
          <div className="admin-list-title">All Projects ({projects.length})</div>
          {editing && (
            <ProjectForm
              project={editing}
              onSaved={handleSaved}
              onCancel={() => setEditing(null)}
            />
          )}
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Tags</th>
                  <th>Mock</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p._id} className={editing?._id === p._id ? "editing-row" : ""}>
                    <td className="admin-td-main">{p.title}</td>
                    <td>
                      <div className="admin-tag-row">
                        {p.tags.slice(0, 3).map((t) => (
                          <span key={t} className="admin-tag">{t}</span>
                        ))}
                        {p.tags.length > 3 && <span className="admin-tag-more">+{p.tags.length - 3}</span>}
                      </div>
                    </td>
                    <td><span className="admin-badge">{p.mock}</span></td>
                    <td>
                      {p.useImage && p.image ? (
                        <span className="admin-badge admin-badge-green">Image</span>
                      ) : (
                        <span className="admin-badge">Mock</span>
                      )}
                    </td>
                    <td>
                      <div className="admin-row-actions">
                        <button
                          className="admin-action-btn"
                          onClick={() => setEditing(editing?._id === p._id ? null : p)}
                          title="Edit"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          className="admin-action-btn admin-action-btn-danger"
                          onClick={() => handleDelete(p._id!)}
                          disabled={deleting && deletingId === p._id}
                          title="Delete"
                        >
                          {deleting && deletingId === p._id ? (
                            <Loader2 size={15} className="spin" />
                          ) : (
                            <Trash2 size={15} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
