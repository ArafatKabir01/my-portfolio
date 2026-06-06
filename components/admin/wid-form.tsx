"use client";

import { useState, useTransition } from "react";
import { Save, Loader2 } from "lucide-react";
import type { WIDData } from "@/lib/models/wid.model";
import { AdminNotice } from "./admin-notice";

type Props = {
  item?: WIDData;
  onSaved: (w: WIDData) => void;
  onCancel?: () => void;
};

const EMPTY: Omit<WIDData, "_id"> = {
  title: "",
  desc: "",
  iconName: "arch",
  color: "#a78bfa",
  order: 0,
};

const ICON_OPTIONS: WIDData["iconName"][] = ["arch", "perf", "uiux", "puzzle"];
const ICON_LABELS: Record<WIDData["iconName"], string> = {
  arch: "Architecture (Network)",
  perf: "Performance (Gauge)",
  uiux: "UI/UX (Triangle)",
  puzzle: "Problem Solver (Puzzle)",
};

export function WIDForm({ item, onSaved, onCancel }: Props) {
  const [form, setForm] = useState<Omit<WIDData, "_id">>(
    item
      ? { title: item.title, desc: item.desc, iconName: item.iconName, color: item.color, order: item.order }
      : EMPTY
  );
  const [isPending, startTransition] = useTransition();
  const [notice, setNotice] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const url = item?._id ? `/api/admin/wid/${item._id}` : "/api/admin/wid";
      const method = item?._id ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const saved = await res.json();
        setNotice({ msg: `Card ${item?._id ? "updated" : "added"}!`, type: "success" });
        onSaved(saved);
        if (!item?._id) setForm(EMPTY);
      } else {
        setNotice({ msg: "Failed to save.", type: "error" });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form admin-form-card">
      <div className="admin-form-card-title">
        {item?._id ? "Edit Card" : "Add What I Do Card"}
      </div>
      <AdminNotice message={notice?.msg ?? null} type={notice?.type} onDismiss={() => setNotice(null)} />

      <div className="admin-form-grid">
        <div className="admin-field admin-field-full">
          <label>Title <span className="req">*</span></label>
          <input name="title" value={form.title} onChange={handleChange} required placeholder="Scalable Architecture" />
        </div>
        <div className="admin-field admin-field-full">
          <label>Description <span className="req">*</span></label>
          <textarea name="desc" value={form.desc} onChange={handleChange} rows={3} required placeholder="Short description of what you do" />
        </div>
        <div className="admin-field">
          <label>Icon</label>
          <select name="iconName" value={form.iconName} onChange={handleChange}>
            {ICON_OPTIONS.map((o) => (
              <option key={o} value={o}>{ICON_LABELS[o]}</option>
            ))}
          </select>
        </div>
        <div className="admin-field">
          <label>Color</label>
          <div className="admin-color-row">
            <input name="color" type="color" value={form.color} onChange={handleChange} className="admin-color-swatch" />
            <input name="color" type="text" value={form.color} onChange={handleChange} placeholder="#a78bfa" className="admin-color-text" />
          </div>
        </div>
      </div>

      <div className="admin-form-actions">
        {onCancel && (
          <button type="button" className="admin-btn admin-btn-ghost" onClick={onCancel}>Cancel</button>
        )}
        <button type="submit" className="admin-btn admin-btn-primary" disabled={isPending}>
          {isPending ? <Loader2 size={16} className="spin" /> : <Save size={16} />}
          {isPending ? "Saving…" : item?._id ? "Update Card" : "Add Card"}
        </button>
      </div>
    </form>
  );
}
