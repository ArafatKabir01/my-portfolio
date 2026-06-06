"use client";

import { useState, useTransition } from "react";
import { Save, Loader2, Plus, X } from "lucide-react";
import type { StackData, SkillData } from "@/lib/models/stack.model";
import { AdminNotice } from "./admin-notice";

type Props = {
  item?: StackData;
  onSaved: (s: StackData) => void;
  onCancel?: () => void;
};

const EMPTY: Omit<StackData, "_id"> = {
  title: "",
  iconName: "code",
  color: "#a78bfa",
  skills: [],
  order: 0,
};

const ICON_OPTIONS: StackData["iconName"][] = ["code", "layers", "tools", "sparkles"];
const ICON_LABELS: Record<StackData["iconName"], string> = {
  code: "Code ( </> )",
  layers: "Layers",
  tools: "Tools",
  sparkles: "Sparkles",
};

export function StackForm({ item, onSaved, onCancel }: Props) {
  const [form, setForm] = useState<Omit<StackData, "_id">>(
    item
      ? { title: item.title, iconName: item.iconName, color: item.color, skills: [...item.skills], order: item.order }
      : EMPTY
  );
  const [isPending, startTransition] = useTransition();
  const [notice, setNotice] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function addSkill() {
    setForm((f) => ({ ...f, skills: [...f.skills, { name: "", level: 3 }] }));
  }

  function removeSkill(i: number) {
    setForm((f) => ({ ...f, skills: f.skills.filter((_, idx) => idx !== i) }));
  }

  function updateSkill(i: number, field: keyof SkillData, value: string | number) {
    setForm((f) => {
      const skills = [...f.skills];
      skills[i] = { ...skills[i], [field]: typeof value === "string" && field === "level" ? Number(value) : value };
      return { ...f, skills };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const url = item?._id ? `/api/admin/stack/${item._id}` : "/api/admin/stack";
      const method = item?._id ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const saved = await res.json();
        setNotice({ msg: `Stack category ${item?._id ? "updated" : "added"}!`, type: "success" });
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
        {item?._id ? "Edit Category" : "Add Stack Category"}
      </div>
      <AdminNotice message={notice?.msg ?? null} type={notice?.type} onDismiss={() => setNotice(null)} />

      <div className="admin-form-grid">
        <div className="admin-field">
          <label>Category Name <span className="req">*</span></label>
          <input name="title" value={form.title} onChange={handleChange} required placeholder="Frontend" />
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

      <div className="admin-form-section-title">
        Skills
        <button type="button" className="admin-add-skill-btn" onClick={addSkill}>
          <Plus size={14} /> Add Skill
        </button>
      </div>
      <div className="admin-skills-list">
        {form.skills.map((skill, i) => (
          <div key={i} className="admin-skill-row">
            <input
              value={skill.name}
              onChange={(e) => updateSkill(i, "name", e.target.value)}
              placeholder="Skill name"
              className="admin-skill-name"
            />
            <div className="admin-skill-dots">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`admin-dot${skill.level >= n ? " on" : ""}`}
                  onClick={() => updateSkill(i, "level", n)}
                  title={`Level ${n}`}
                />
              ))}
              <span className="admin-skill-level-label">{skill.level}/5</span>
            </div>
            <button type="button" className="admin-remove-skill" onClick={() => removeSkill(i)} title="Remove">
              <X size={14} />
            </button>
          </div>
        ))}
        {form.skills.length === 0 && (
          <p className="admin-empty-hint">No skills yet. Click "Add Skill" to start.</p>
        )}
      </div>

      <div className="admin-form-actions">
        {onCancel && (
          <button type="button" className="admin-btn admin-btn-ghost" onClick={onCancel}>Cancel</button>
        )}
        <button type="submit" className="admin-btn admin-btn-primary" disabled={isPending}>
          {isPending ? <Loader2 size={16} className="spin" /> : <Save size={16} />}
          {isPending ? "Saving…" : item?._id ? "Update Category" : "Add Category"}
        </button>
      </div>
    </form>
  );
}
