"use client";

import { useActionState, useState } from "react";
import { Eye, EyeOff, LogIn, Loader2 } from "lucide-react";

type LoginAction = (prevState: string | null, formData: FormData) => Promise<string | null>;

type Props = { action: LoginAction };

export function LoginForm({ action }: Props) {
  const [error, formAction, isPending] = useActionState(action, null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction} className="admin-login-form">
      <div className="admin-field">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          placeholder="arafat"
        />
      </div>
      <div className="admin-field">
        <label htmlFor="password">Password</label>
        <div className="admin-field-pw">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            placeholder="••••••••"
          />
          <button
            type="button"
            className="admin-pw-eye"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
            aria-label="Toggle password visibility"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>
      {error && <p className="admin-login-error">{error}</p>}
      <button type="submit" className="admin-login-btn" disabled={isPending}>
        {isPending ? <Loader2 size={16} className="spin" /> : <LogIn size={16} />}
        {isPending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
