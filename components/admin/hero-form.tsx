"use client";

import { useState, useTransition } from "react";
import { Save, Loader2 } from "lucide-react";
import type { HeroData } from "@/lib/models/hero.model";
import { AdminNotice } from "./admin-notice";

type Props = { initial: HeroData | null };

const DEFAULTS: HeroData = {
  greeting: "Hi, I'm Arafat",
  statusPill: "Available for work",
  tagline: "Frontend Engineer",
  leadText:
    "I build scalable, high-performance web applications with modern technologies and beautiful user experiences.",
  primaryBtnLabel: "View Projects",
  secondaryBtnLabel: "Contact Me",
  githubUrl: "#",
  linkedinUrl: "#",
  twitterUrl: "#",
  emailAddress: "",
};

export function HeroForm({ initial }: Props) {
  const [form, setForm] = useState<HeroData>(initial ?? DEFAULTS);
  const [isPending, startTransition] = useTransition();
  const [notice, setNotice] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const res = await fetch("/api/admin/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setNotice({ msg: "Hero section saved successfully!", type: "success" });
      } else {
        setNotice({ msg: "Failed to save. Please try again.", type: "error" });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <AdminNotice
        message={notice?.msg ?? null}
        type={notice?.type}
        onDismiss={() => setNotice(null)}
      />

      <div className="admin-form-grid">
        <div className="admin-field">
          <label>Greeting</label>
          <input name="greeting" value={form.greeting} onChange={handleChange} required />
          <span className="admin-field-hint">e.g. Hi i am arafat</span>
        </div>
        <div className="admin-field">
          <label>Status Pill</label>
          <input name="statusPill" value={form.statusPill} onChange={handleChange} required />
          <span className="admin-field-hint">Text in the top badge</span>
        </div>
        <div className="admin-field">
          <label>Tagline</label>
          <input name="tagline" value={form.tagline} onChange={handleChange} required />
          <span className="admin-field-hint">e.g. Frontend Engineer</span>
        </div>
        <div className="admin-field admin-field-full">
          <label>Lead Text</label>
          <textarea name="leadText" value={form.leadText} onChange={handleChange} rows={3} required />
          <span className="admin-field-hint">The paragraph below your title</span>
        </div>
        <div className="admin-field">
          <label>Primary Button Label</label>
          <input name="primaryBtnLabel" value={form.primaryBtnLabel} onChange={handleChange} />
        </div>
        <div className="admin-field">
          <label>Secondary Button Label</label>
          <input name="secondaryBtnLabel" value={form.secondaryBtnLabel} onChange={handleChange} />
        </div>
      </div>

      <div className="admin-form-section-title">Social Links</div>
      <div className="admin-form-grid">
        <div className="admin-field">
          <label>GitHub URL</label>
          <input name="githubUrl" type="url" value={form.githubUrl} onChange={handleChange} placeholder="https://github.com/..." />
        </div>
        <div className="admin-field">
          <label>LinkedIn URL</label>
          <input name="linkedinUrl" type="url" value={form.linkedinUrl} onChange={handleChange} placeholder="https://linkedin.com/in/..." />
        </div>
        <div className="admin-field">
          <label>Twitter URL</label>
          <input name="twitterUrl" type="url" value={form.twitterUrl} onChange={handleChange} placeholder="https://twitter.com/..." />
        </div>
        <div className="admin-field">
          <label>Email Address</label>
          <input name="emailAddress" type="email" value={form.emailAddress} onChange={handleChange} placeholder="hello@example.com" />
        </div>
      </div>

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn admin-btn-primary" disabled={isPending}>
          {isPending ? <Loader2 size={16} className="spin" /> : <Save size={16} />}
          {isPending ? "Saving…" : "Save Hero"}
        </button>
      </div>
    </form>
  );
}
