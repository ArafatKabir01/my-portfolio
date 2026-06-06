import mongoose, { Schema } from "mongoose";

const WIDSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    iconName: {
      type: String,
      enum: ["arch", "perf", "uiux", "puzzle"],
      required: true,
    },
    color: { type: String, default: "#a78bfa" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type WIDData = {
  _id?: string;
  title: string;
  desc: string;
  iconName: "arch" | "perf" | "uiux" | "puzzle";
  color: string;
  order: number;
};

export default mongoose.models.WID || mongoose.model("WID", WIDSchema);
