"use client";

import { signOut } from "next-auth/react";
import { LogOut, User } from "lucide-react";

type Props = { userName?: string | null };

export function AdminHeader({ userName }: Props) {
  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <span className="admin-header-title">Admin Panel</span>
      </div>
      <div className="admin-header-right">
        <span className="admin-user">
          <User size={16} />
          {userName ?? "Admin"}
        </span>
        <button
          className="admin-logout"
          onClick={() => signOut({ callbackUrl: "/auth/arafat/login" })}
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
}
