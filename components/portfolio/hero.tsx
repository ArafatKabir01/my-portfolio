"use client";

import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { magneticHandlers } from "@/hooks";
import { CodeWindow } from "./code-window";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/shared/brand-icons";
import type { HeroData } from "@/lib/models/hero.model";

type Props = { data?: HeroData | null };

export function Hero({ data }: Props) {
  const greeting = data?.greeting ?? "Hi, I'm Arafat";
  const statusPill = data?.statusPill ?? "Available for work";
  const tagline = data?.tagline ?? "Frontend Engineer";
  const leadText =
    data?.leadText ??
    "I build scalable, high-performance web applications with modern technologies and beautiful user experiences.";
  const primaryBtnLabel = data?.primaryBtnLabel ?? "View Projects";
  const secondaryBtnLabel = data?.secondaryBtnLabel ?? "Contact Me";
  const githubUrl = data?.githubUrl ?? "#";
  const linkedinUrl = data?.linkedinUrl ?? "#";
  const twitterUrl = data?.twitterUrl ?? "#";
  const emailHref = data?.emailAddress ? `mailto:${data.emailAddress}` : "#";

  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-left reveal">
        <span className="pill"><span className="pulse" /> {statusPill}</span>
        <h2>{greeting} <span className="wave">👋</span></h2>
        <h1>
        <span className="grad-text">{tagline}</span>
        </h1>
        <p className="lead">{leadText}</p>
        <div className="btn-row">
          <a
            href="#projects"
            className="btn btn-primary"
            {...magneticHandlers(0.2)}
            data-cursor="hover"
            data-cursor-label="See work"
          >
            {primaryBtnLabel} <ArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="btn btn-ghost"
            {...magneticHandlers(0.15)}
            data-cursor="hover"
            data-cursor-label="Say hi"
          >
            <MessageCircle size={16} /> {secondaryBtnLabel}
          </a>
        </div>
        <div className="socials">
          <span className="label">Let&apos;s connect</span>
          <div className="social-icons">
            <a href={githubUrl} data-cursor="hover" data-cursor-label="GitHub" aria-label="GitHub"><GithubIcon size={16} /></a>
            <a href={linkedinUrl} data-cursor="hover" data-cursor-label="LinkedIn" aria-label="LinkedIn"><LinkedinIcon size={16} /></a>
            <a href={twitterUrl} data-cursor="hover" data-cursor-label="Twitter" aria-label="Twitter"><TwitterIcon size={16} /></a>
            <a href={emailHref} data-cursor="hover" data-cursor-label="Email" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
      </div>
      <div className="hero-right reveal" style={{ position: "relative" }}>
        <div className="dot-grid" style={{ top: -10, right: -20, width: 90, height: 60 }} />
        <div className="dot-grid" style={{ bottom: -20, right: 60, width: 70, height: 50 }} />
        <CodeWindow />
      </div>
    </section>
  );
}
