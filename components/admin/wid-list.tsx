"use client";

import { useState, useTransition } from "react";
import { Pencil, Trash2, Loader2 } from "lucide-react";
import type { WIDData } from "@/lib/models/wid.model";
import { WIDForm } from "./wid-form";
import { AdminNotice } from "./admin-notice";

type Props = { initial: WIDData[] };

export function WIDList({ initial }: Props) {
  const [items, setItems] = useState<WIDData[]>(initial);
  const [editing, setEditing] = useState<WIDData | null>(null);
  const [deleting, startDelete] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [notice, setNotice] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function handleSaved(w: WIDData) {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x._id === w._id);
      if (idx >= 0) { const n = [...prev]; n[idx] = w; return n; }
      return [w, ...prev];
    });
    setEditing(null);
    setNotice({ msg: "Card saved!", type: "success" });
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this card?")) return;
    setDeletingId(id);
    startDelete(async () => {
      const res = await fetch(`/api/admin/wid/${id}`, { method: "DELETE" });
      setDeletingId(null);
      if (res.ok) {
        setItems((prev) => prev.filter((w) => w._id !== id));
        setNotice({ msg: "Deleted.", type: "success" });
      } else {
        setNotice({ msg: "Delete failed.", type: "error" });
      }
    });
  }

  return (
    <div>
      <AdminNotice message={notice?.msg ?? null} type={notice?.type} onDismiss={() => setNotice(null)} />
      <WIDForm onSaved={handleSaved} />

      {items.length > 0 && (
        <div className="admin-list">
          <div className="admin-list-title">All Cards ({items.length})</div>
          {editing && (
            <WIDForm item={editing} onSaved={handleSaved} onCancel={() => setEditing(null)} />
          )}
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Icon</th>
                  <th>Color</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((w) => (
                  <tr key={w._id} className={editing?._id === w._id ? "editing-row" : ""}>
                    <td className="admin-td-main">{w.title}</td>
                    <td><span className="admin-badge">{w.iconName}</span></td>
                    <td>
                      <div className="admin-color-preview" style={{ background: w.color }} title={w.color} />
                    </td>
                    <td>
                      <div className="admin-row-actions">
                        <button className="admin-action-btn" onClick={() => setEditing(editing?._id === w._id ? null : w)} title="Edit">
                          <Pencil size={15} />
                        </button>
                        <button
                          className="admin-action-btn admin-action-btn-danger"
                          onClick={() => handleDelete(w._id!)}
                          disabled={deleting && deletingId === w._id}
                          title="Delete"
                        >
                          {deleting && deletingId === w._id ? <Loader2 size={15} className="spin" /> : <Trash2 size={15} />}
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
