import mongoose, { Schema } from "mongoose";

const SkillSchema = new Schema(
  {
    name: { type: String, required: true },
    level: { type: Number, min: 1, max: 5, required: true },
  },
  { _id: false }
);

const StackSchema = new Schema(
  {
    title: { type: String, required: true },
    iconName: {
      type: String,
      enum: ["code", "layers", "tools", "sparkles"],
      required: true,
    },
    color: { type: String, default: "#a78bfa" },
    skills: [SkillSchema],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type SkillData = { name: string; level: number };

export type StackData = {
  _id?: string;
  title: string;
  iconName: "code" | "layers" | "tools" | "sparkles";
  color: string;
  skills: SkillData[];
  order: number;
};

export default mongoose.models.Stack || mongoose.model("Stack", StackSchema);
