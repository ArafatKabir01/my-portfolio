"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Lock,
  Video,
  Mail,
  Send,
  ArrowRight,
  Code2,
  Layers,
  MessagesSquare,
} from "lucide-react";
import { GithubIcon } from "@/components/shared/brand-icons";

export function TopBar({
  slug,
  liveUrl,
  brand,
  meetingEmail,
}: {
  slug: string;
  liveUrl?: string;
  brand?: string;
  meetingEmail?: string;
}) {
  const [repoOpen, setRepoOpen] = useState(false);

  const projectName = brand ?? slug;

  // Escape to close + lock body scroll while the modal is open.
  const close = useCallback(() => setRepoOpen(false), []);
  useEffect(() => {
    if (!repoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [repoOpen, close]);

  // Prefilled email asking for a walkthrough of this specific repo.
  const subject = `Repo walkthrough request — ${projectName} case study`;
  const body = `Hi Nabil,

I came across the ${projectName} case study on your portfolio and I'd love to see the code. I understand the repository is private — would you be open to a quick Google Meet to walk me through it?

A few times that could work for me:
-

Thanks!`;
  const mailto = meetingEmail
    ? `mailto:${meetingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    : undefined;

  return (
    <>
      <div className="topbar">
        <Link className="back" href="/#projects" data-cursor="hover" data-cursor-label="Portfolio">
          <ArrowLeft size={14} /> Back to work
        </Link>
        <div className="crumb">
          case-studies <span style={{ opacity: 0.4 }}>/</span> <b>{slug}</b>
        </div>
        <div className="actions">
          <a
            className="back"
            href={liveUrl ?? "#"}
            target={liveUrl ? "_blank" : undefined}
            rel={liveUrl ? "noopener noreferrer" : undefined}
            data-cursor="hover"
            data-cursor-label="Live"
          >
            <ExternalLink size={12} /> Live site
          </a>
          <button
            type="button"
            className="back"
            onClick={() => setRepoOpen(true)}
            data-cursor="hover"
            data-cursor-label="Repo"
          >
            <GithubIcon size={14} /> Repo
          </button>
        </div>
      </div>

      {repoOpen && (
        <div
          className="repo-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="repo-modal-title"
          onClick={close}
        >
          <div className="repo-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="repo-close"
              aria-label="Close"
              onClick={close}
              data-cursor="hover"
            >
              ×
            </button>

            <div className="repo-lock" aria-hidden="true">
              <Lock size={26} />
            </div>

            <span className="repo-badge">
              <Lock size={11} /> Private repository
            </span>
            <h3 id="repo-modal-title" className="repo-title">
              The code lives behind closed doors
            </h3>
            <p className="repo-body">
              The source for <b>{projectName}</b> is a private, client-owned
              project, so I can&apos;t share it publicly. I completely understand
              wanting to see the work behind it.
            </p>
            <p className="repo-body">
              If you&apos;re interested, I&apos;d be happy to hop on a quick{" "}
              <b>Google Meet</b> and give you a live, guided tour.
            </p>

            <ul className="repo-perks">
              <li>
                <span className="repo-perk-ic"><Code2 size={15} /></span>
                A live walkthrough of the real codebase
              </li>
              <li>
                <span className="repo-perk-ic"><Layers size={15} /></span>
                The architecture &amp; key technical decisions
              </li>
              <li>
                <span className="repo-perk-ic"><MessagesSquare size={15} /></span>
                Q&amp;A — ask me anything about how it works
              </li>
            </ul>

            <div className="repo-meet">
              <div className="repo-meet-head">
                <Video size={16} /> Request a Google Meet
              </div>
              {meetingEmail ? (
                <>
                  <p className="repo-meet-sub">
                    Send a quick note and we&apos;ll find a time that works.
                  </p>
                  <a className="repo-cta" href={mailto} data-cursor="hover">
                    <Send size={15} />
                    <span>Email me to schedule</span>
                    <ArrowRight size={15} className="repo-cta-arrow" />
                  </a>
                  <a className="repo-mail-link" href={`mailto:${meetingEmail}`} data-cursor="hover">
                    <Mail size={12} /> {meetingEmail}
                  </a>
                </>
              ) : (
                <p className="repo-meet-sub">Contact details coming soon.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
