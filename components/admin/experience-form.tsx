"use client";

import { useState, useTransition } from "react";
import { Save, Loader2 } from "lucide-react";
import type { ExperienceData } from "@/lib/models/experience.model";
import { AdminNotice } from "./admin-notice";

type Props = {
  item?: ExperienceData;
  onSaved: (e: ExperienceData) => void;
  onCancel?: () => void;
};

const EMPTY: Omit<ExperienceData, "_id"> = {
  when: "",
  whenColor: "",
  title: "",
  desc: "",
  tags: [],
  nodeColor: "",
  nodeShadow: "",
  order: 0,
};

export function ExperienceForm({ item, onSaved, onCancel }: Props) {
  const [form, setForm] = useState<Omit<ExperienceData, "_id">>(
    item
      ? { when: item.when, whenColor: item.whenColor ?? "", title: item.title, desc: item.desc, tags: item.tags, nodeColor: item.nodeColor ?? "", nodeShadow: item.nodeShadow ?? "", order: item.order }
      : EMPTY
  );
  const [tagsInput, setTagsInput] = useState(item?.tags.join(", ") ?? "");
  const [isPending, startTransition] = useTransition();
  const [notice, setNotice] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { ...form, tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean) };
    startTransition(async () => {
      const url = item?._id
        ? `/api/admin/experience/${item._id}`
        : "/api/admin/experience";
      const method = item?._id ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const saved = await res.json();
        setNotice({ msg: `Experience ${item?._id ? "updated" : "added"}!`, type: "success" });
        onSaved(saved);
        if (!item?._id) { setForm(EMPTY); setTagsInput(""); }
      } else {
        setNotice({ msg: "Failed to save. Try again.", type: "error" });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form admin-form-card">
      <div className="admin-form-card-title">
        {item?._id ? "Edit Experience" : "Add Experience"}
      </div>
      <AdminNotice message={notice?.msg ?? null} type={notice?.type} onDismiss={() => setNotice(null)} />

      <div className="admin-form-grid">
        <div className="admin-field">
          <label>Period <span className="req">*</span></label>
          <input name="when" value={form.when} onChange={handleChange} required placeholder="2024 - Present" />
        </div>
        <div className="admin-field">
          <label>Period Color</label>
          <div className="admin-color-row">
            <input name="whenColor" type="color" value={form.whenColor || "#a78bfa"} onChange={handleChange} className="admin-color-swatch" />
            <input name="whenColor" type="text" value={form.whenColor} onChange={handleChange} placeholder="#a78bfa (optional)" className="admin-color-text" />
          </div>
        </div>
        <div className="admin-field admin-field-full">
          <label>Title <span className="req">*</span></label>
          <input name="title" value={form.title} onChange={handleChange} required placeholder="Frontend Engineer @ Company" />
        </div>
        <div className="admin-field admin-field-full">
          <label>Description <span className="req">*</span></label>
          <textarea name="desc" value={form.desc} onChange={handleChange} rows={3} required placeholder="What did you build / achieve?" />
        </div>
        <div className="admin-field admin-field-full">
          <label>Tags</label>
          <input value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="React, TypeScript, Tailwind" />
          <span className="admin-field-hint">Comma-separated</span>
        </div>
        <div className="admin-field">
          <label>Node Color</label>
          <div className="admin-color-row">
            <input name="nodeColor" type="color" value={form.nodeColor || "#a78bfa"} onChange={handleChange} className="admin-color-swatch" />
            <input name="nodeColor" type="text" value={form.nodeColor} onChange={handleChange} placeholder="#a78bfa (optional)" className="admin-color-text" />
          </div>
        </div>
      </div>

      <div className="admin-form-actions">
        {onCancel && (
          <button type="button" className="admin-btn admin-btn-ghost" onClick={onCancel}>Cancel</button>
        )}
        <button type="submit" className="admin-btn admin-btn-primary" disabled={isPending}>
          {isPending ? <Loader2 size={16} className="spin" /> : <Save size={16} />}
          {isPending ? "Saving…" : item?._id ? "Update" : "Add Experience"}
        </button>
      </div>
    </form>
  );
}
