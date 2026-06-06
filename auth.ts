import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import AdminModel from "@/lib/models/admin.model";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = (credentials?.username as string)?.toLowerCase().trim();
        const password = credentials?.password as string;
        if (!username || !password) return null;

        try {
          await connectDB();
          const admin = await AdminModel.findOne({ username }).lean() as { passwordHash: string } | null;
          if (!admin) return null;
          if (!bcrypt.compareSync(password, admin.passwordHash)) return null;
          return { id: "admin", name: username, email: "admin@portfolio.dev" };
        } catch (err) {
          console.error("Auth DB error:", err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/arafat/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
});
