"use client";

import { useState, useTransition } from "react";
import { Pencil, Trash2, Loader2 } from "lucide-react";
import type { StackData } from "@/lib/models/stack.model";
import { StackForm } from "./stack-form";
import { AdminNotice } from "./admin-notice";

type Props = { initial: StackData[] };

export function StackList({ initial }: Props) {
  const [items, setItems] = useState<StackData[]>(initial);
  const [editing, setEditing] = useState<StackData | null>(null);
  const [deleting, startDelete] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [notice, setNotice] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function handleSaved(s: StackData) {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x._id === s._id);
      if (idx >= 0) { const n = [...prev]; n[idx] = s; return n; }
      return [s, ...prev];
    });
    setEditing(null);
    setNotice({ msg: "Stack category saved!", type: "success" });
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this stack category?")) return;
    setDeletingId(id);
    startDelete(async () => {
      const res = await fetch(`/api/admin/stack/${id}`, { method: "DELETE" });
      setDeletingId(null);
      if (res.ok) {
        setItems((prev) => prev.filter((s) => s._id !== id));
        setNotice({ msg: "Deleted.", type: "success" });
      } else {
        setNotice({ msg: "Delete failed.", type: "error" });
      }
    });
  }

  return (
    <div>
      <AdminNotice message={notice?.msg ?? null} type={notice?.type} onDismiss={() => setNotice(null)} />
      <StackForm onSaved={handleSaved} />

      {items.length > 0 && (
        <div className="admin-list">
          <div className="admin-list-title">All Categories ({items.length})</div>
          {editing && (
            <StackForm item={editing} onSaved={handleSaved} onCancel={() => setEditing(null)} />
          )}
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Icon</th>
                  <th>Color</th>
                  <th>Skills</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((s) => (
                  <tr key={s._id} className={editing?._id === s._id ? "editing-row" : ""}>
                    <td className="admin-td-main">{s.title}</td>
                    <td><span className="admin-badge">{s.iconName}</span></td>
                    <td>
                      <div className="admin-color-preview" style={{ background: s.color }} title={s.color} />
                    </td>
                    <td>{s.skills.length} skill{s.skills.length !== 1 ? "s" : ""}</td>
                    <td>
                      <div className="admin-row-actions">
                        <button className="admin-action-btn" onClick={() => setEditing(editing?._id === s._id ? null : s)} title="Edit">
                          <Pencil size={15} />
                        </button>
                        <button
                          className="admin-action-btn admin-action-btn-danger"
                          onClick={() => handleDelete(s._id!)}
                          disabled={deleting && deletingId === s._id}
                          title="Delete"
                        >
                          {deleting && deletingId === s._id ? <Loader2 size={15} className="spin" /> : <Trash2 size={15} />}
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
