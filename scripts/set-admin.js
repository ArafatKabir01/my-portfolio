#!/usr/bin/env node

/**
 * Usage:
 *   npm run set-admin                         → interactive prompts
 *   npm run set-admin -- <username> <password> → inline args
 */

const bcrypt = require("bcryptjs");
const readline = require("readline");
const path = require("path");
const fs = require("fs");

// Load .env.local so MONGODB_URI is available
const envPath = path.resolve(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    // Strip surrounding single or double quotes
    if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("\n  ✖ MONGODB_URI not found in .env.local\n");
  process.exit(1);
}

async function prompt(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => { rl.close(); resolve(answer.trim()); });
  });
}

async function main() {
  const args = process.argv.slice(2);
  let username = args[0];
  let password = args[1];

  console.log("\n🔐  Admin Credential Setup (MongoDB)\n");

  if (!username) username = (await prompt("  Username (default: arafat): ")) || "arafat";
  if (!password) password = await prompt("  Password: ");

  if (!password) {
    console.error("\n  ✖ Password cannot be empty.\n");
    process.exit(1);
  }

  username = username.toLowerCase().trim();

  console.log("\n  Hashing password…");
  const passwordHash = bcrypt.hashSync(password, 12);

  // Connect to MongoDB and upsert admin
  console.log("  Connecting to MongoDB…");
  const mongoose = require("mongoose");

  const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
  }, { timestamps: true });

  const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

  await mongoose.connect(MONGODB_URI, { bufferCommands: false });

  await Admin.findOneAndUpdate(
    { username },
    { username, passwordHash },
    { upsert: true, returnDocument: "after" }
  );

  await mongoose.disconnect();

  console.log(`\n  ✔ Username  : ${username}`);
  console.log(`  ✔ Password  : ${"•".repeat(password.length)}`);
  console.log(`  ✔ Stored in : MongoDB (admins collection)`);
  console.log("\n  Done! You can now log in at /auth/arafat/login\n");
}

main().catch((err) => { console.error("\n  ✖ Error:", err.message, "\n"); process.exit(1); });
