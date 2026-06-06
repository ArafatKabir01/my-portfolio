import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

export type AdminDoc = {
  _id?: string;
  username: string;
  passwordHash: string;
};

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
