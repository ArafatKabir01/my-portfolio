"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";

type Props = {
  message: string | null;
  type?: "success" | "error";
  onDismiss?: () => void;
};

export function AdminNotice({ message, type = "success", onDismiss }: Props) {
  const [visible, setVisible] = useState(!!message);

  useEffect(() => {
    setVisible(!!message);
    if (!message) return;
    const t = setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 4000);
    return () => clearTimeout(t);
  }, [message, onDismiss]);

  if (!visible || !message) return null;

  return (
    <div className={`admin-notice admin-notice-${type}`}>
      {type === "success" ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
      <span>{message}</span>
      <button
        className="admin-notice-close"
        onClick={() => { setVisible(false); onDismiss?.(); }}
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}
