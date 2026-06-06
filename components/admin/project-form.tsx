"use client";

import { useState, useTransition, useRef } from "react";
import { Save, Loader2, Upload, Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";
import type { ProjectData } from "@/lib/models/project.model";
import { AdminNotice } from "./admin-notice";

type Props = {
  project?: ProjectData;
  onSaved: (p: ProjectData) => void;
  onCancel?: () => void;
};

const EMPTY: Omit<ProjectData, "_id"> = {
  title: "",
  desc: "",
  tags: [],
  color: "#1a1b3a",
  mock: "dashboard",
  useImage: false,
  image: "",
  caseStudy: "",
  order: 0,
};

export function ProjectForm({ project, onSaved, onCancel }: Props) {
  const [form, setForm] = useState<Omit<ProjectData, "_id">>(
    project
      ? { title: project.title, desc: project.desc, tags: project.tags, color: project.color, mock: project.mock, useImage: project.useImage, image: project.image, caseStudy: project.caseStudy, order: project.order }
      : EMPTY
  );
  const [tagsInput, setTagsInput] = useState(project?.tags.join(", ") ?? "");
  const [isPending, startTransition] = useTransition();
  const [uploading, setUploading] = useState(false);
  const [notice, setNotice] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("image", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    setUploading(false);
    if (res.ok) {
      const data = await res.json();
      setForm((f) => ({ ...f, image: data.url, useImage: true }));
    } else {
      setNotice({ msg: "Image upload failed. Check your ImageBB API key.", type: "error" });
    }
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { ...form, tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean) };
    startTransition(async () => {
      const url = project?._id
        ? `/api/admin/projects/${project._id}`
        : "/api/admin/projects";
      const method = project?._id ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const saved = await res.json();
        setNotice({ msg: `Project ${project?._id ? "updated" : "created"}!`, type: "success" });
        onSaved(saved);
        if (!project?._id) {
          setForm(EMPTY);
          setTagsInput("");
        }
      } else {
        setNotice({ msg: "Failed to save project.", type: "error" });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form admin-form-card">
      <div className="admin-form-card-title">
        {project?._id ? "Edit Project" : "Add New Project"}
      </div>
      <AdminNotice message={notice?.msg ?? null} type={notice?.type} onDismiss={() => setNotice(null)} />

      <div className="admin-form-grid">
        <div className="admin-field admin-field-full">
          <label>Title <span className="req">*</span></label>
          <input name="title" value={form.title} onChange={handleChange} required placeholder="Project title" />
        </div>
        <div className="admin-field admin-field-full">
          <label>Description <span className="req">*</span></label>
          <textarea name="desc" value={form.desc} onChange={handleChange} rows={3} required placeholder="Short project description" />
        </div>
        <div className="admin-field admin-field-full">
          <label>Tags</label>
          <input value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="Next.js, TypeScript, Tailwind" />
          <span className="admin-field-hint">Comma-separated</span>
        </div>
        <div className="admin-field">
          <label>Background Color</label>
          <div className="admin-color-row">
            <input name="color" type="color" value={form.color} onChange={handleChange} className="admin-color-swatch" />
            <input name="color" type="text" value={form.color} onChange={handleChange} placeholder="#1a1b3a" className="admin-color-text" />
          </div>
        </div>
        <div className="admin-field">
          <label>Case Study Slug</label>
          <input name="caseStudy" value={form.caseStudy} onChange={handleChange} placeholder="fastshorts (optional)" />
        </div>
      </div>

      <div className="admin-form-section-title">Thumbnail</div>
      <div className="admin-thumbnail-row">
        <div className="admin-field">
          <label>Mock Preview Type</label>
          <select name="mock" value={form.mock} onChange={handleChange}>
            <option value="dashboard">Dashboard</option>
            <option value="tasks">Tasks</option>
            <option value="ai">AI Chat</option>
          </select>
        </div>
        <div className="admin-field">
          <label>Upload Image (optional)</label>
          <div className="admin-upload-row">
            <button
              type="button"
              className="admin-btn admin-btn-ghost"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? <Loader2 size={16} className="spin" /> : <Upload size={16} />}
              {uploading ? "Uploading…" : "Upload via ImageBB"}
            </button>
            {form.image && (
              <button
                type="button"
                className="admin-btn admin-btn-danger-ghost"
                onClick={() => setForm((f) => ({ ...f, image: "", useImage: false }))}
              >
                <X size={14} /> Remove
              </button>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="sr-only" onChange={handleImageUpload} />
        </div>
      </div>

      {form.image && (
        <div className="admin-thumbnail-preview">
          <Image src={form.image} alt="Project thumbnail" width={280} height={160} style={{ objectFit: "cover", borderRadius: 8 }} />
          <label className="admin-toggle-label">
            <input
              type="checkbox"
              name="useImage"
              checked={form.useImage}
              onChange={handleChange}
            />
            <span>Show uploaded image instead of mock preview</span>
          </label>
        </div>
      )}

      {!form.image && (
        <div className="admin-mock-note">
          <ImageIcon size={14} />
          <span>No image uploaded — will use the <strong>{form.mock}</strong> mock preview on the landing page.</span>
        </div>
      )}

      <div className="admin-form-actions">
        {onCancel && (
          <button type="button" className="admin-btn admin-btn-ghost" onClick={onCancel}>
            Cancel
          </button>
        )}
        <button type="submit" className="admin-btn admin-btn-primary" disabled={isPending || uploading}>
          {isPending ? <Loader2 size={16} className="spin" /> : <Save size={16} />}
          {isPending ? "Saving…" : project?._id ? "Update Project" : "Add Project"}
        </button>
      </div>
    </form>
  );
}
