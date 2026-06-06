"use client";

import { useState, useTransition } from "react";
import { Pencil, Trash2, Loader2 } from "lucide-react";
import type { ExperienceData } from "@/lib/models/experience.model";
import { ExperienceForm } from "./experience-form";
import { AdminNotice } from "./admin-notice";

type Props = { initial: ExperienceData[] };

export function ExperienceList({ initial }: Props) {
  const [items, setItems] = useState<ExperienceData[]>(initial);
  const [editing, setEditing] = useState<ExperienceData | null>(null);
  const [deleting, startDelete] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [notice, setNotice] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function handleSaved(e: ExperienceData) {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x._id === e._id);
      if (idx >= 0) { const n = [...prev]; n[idx] = e; return n; }
      return [e, ...prev];
    });
    setEditing(null);
    setNotice({ msg: "Experience saved!", type: "success" });
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this experience item?")) return;
    setDeletingId(id);
    startDelete(async () => {
      const res = await fetch(`/api/admin/experience/${id}`, { method: "DELETE" });
      setDeletingId(null);
      if (res.ok) {
        setItems((prev) => prev.filter((e) => e._id !== id));
        setNotice({ msg: "Deleted.", type: "success" });
      } else {
        setNotice({ msg: "Delete failed.", type: "error" });
      }
    });
  }

  return (
    <div>
      <AdminNotice message={notice?.msg ?? null} type={notice?.type} onDismiss={() => setNotice(null)} />
      <ExperienceForm onSaved={handleSaved} />

      {items.length > 0 && (
        <div className="admin-list">
          <div className="admin-list-title">All Experience ({items.length})</div>
          {editing && (
            <ExperienceForm item={editing} onSaved={handleSaved} onCancel={() => setEditing(null)} />
          )}
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Title</th>
                  <th>Tags</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((e) => (
                  <tr key={e._id} className={editing?._id === e._id ? "editing-row" : ""}>
                    <td style={{ color: e.whenColor || undefined, whiteSpace: "nowrap" }}>{e.when}</td>
                    <td className="admin-td-main">{e.title}</td>
                    <td>
                      <div className="admin-tag-row">
                        {e.tags.slice(0, 3).map((t) => <span key={t} className="admin-tag">{t}</span>)}
                        {e.tags.length > 3 && <span className="admin-tag-more">+{e.tags.length - 3}</span>}
                      </div>
                    </td>
                    <td>
                      <div className="admin-row-actions">
                        <button className="admin-action-btn" onClick={() => setEditing(editing?._id === e._id ? null : e)} title="Edit">
                          <Pencil size={15} />
                        </button>
                        <button
                          className="admin-action-btn admin-action-btn-danger"
                          onClick={() => handleDelete(e._id!)}
                          disabled={deleting && deletingId === e._id}
                          title="Delete"
                        >
                          {deleting && deletingId === e._id ? <Loader2 size={15} className="spin" /> : <Trash2 size={15} />}
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
