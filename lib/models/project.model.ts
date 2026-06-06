import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    tags: [{ type: String }],
    color: { type: String, default: "#1a1b3a" },
    mock: {
      type: String,
      enum: ["dashboard", "tasks", "ai"],
      required: true,
    },
    useImage: { type: Boolean, default: false },
    image: { type: String, default: "" },
    caseStudy: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type ProjectData = {
  _id?: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  mock: "dashboard" | "tasks" | "ai";
  useImage: boolean;
  image: string;
  caseStudy: string;
  order: number;
};

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
