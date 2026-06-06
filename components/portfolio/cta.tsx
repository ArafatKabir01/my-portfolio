"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";
import { magneticHandlers } from "@/hooks";

export function CTA() {
  return (
    <section id="contact" className="section">
      <div className="cta reveal">
        <div className="cta-icon"><Mail size={32} /></div>
        <div>
          <h4>Let&apos;s build something great together!</h4>
          <p>I&apos;m currently available for new opportunities.</p>
          <div className="cta-meta">
            <span data-cursor="text"><Mail size={14} /> arafat.ibnekabir@gmail.com</span>
            <span><MapPin size={14} /> Dhaka, Bangladesh</span>
          </div>
        </div>
        <a
          className="btn btn-primary"
          href="mailto:arafat.ibnekabir@gmail.com"
          {...magneticHandlers(0.2)}
          data-cursor="hover"
          data-cursor-label="Email me"
        >
          Get In Touch <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
