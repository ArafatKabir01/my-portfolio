import { LoginForm } from "@/components/admin/login-form";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = { title: "Admin Login" };

async function loginAction(prevState: string | null, formData: FormData) {
  "use server";
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirectTo: "/auth/arafat/admin",
    });
  } catch (err) {
    if (err instanceof AuthError) {
      return "Invalid username or password.";
    }
    // redirect() throws internally — re-throw so it works
    throw err;
  }
  redirect("/auth/arafat/admin");
}

export default function LoginPage() {
  return (
    <div className="admin-login-shell">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <span className="admin-login-dot" />
          <span className="admin-login-brand">Portfolio Admin</span>
        </div>
        <h1 className="admin-login-title">Welcome back</h1>
        <p className="admin-login-sub">Sign in to manage your portfolio</p>
        <LoginForm action={loginAction} />
      </div>
    </div>
  );
}
