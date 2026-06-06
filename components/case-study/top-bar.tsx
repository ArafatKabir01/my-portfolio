import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/brand-icons";

export function TopBar({ slug }: { slug: string }) {
  return (
    <div className="topbar">
      <Link className="back" href="/#projects" data-cursor="hover" data-cursor-label="Portfolio">
        <ArrowLeft size={14} /> Back to work
      </Link>
      <div className="crumb">
        case-studies <span style={{ opacity: 0.4 }}>/</span> <b>{slug}</b>
      </div>
      <div className="actions">
        <a className="back" href="#" data-cursor="hover" data-cursor-label="Live"><ExternalLink size={12} /> Live site</a>
        <a className="back" href="#" data-cursor="hover" data-cursor-label="Repo"><GithubIcon size={14} /> Repo</a>
      </div>
    </div>
  );
}
