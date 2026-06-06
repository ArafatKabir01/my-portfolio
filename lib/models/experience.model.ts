import mongoose, { Schema } from "mongoose";

const ExperienceSchema = new Schema(
  {
    when: { type: String, required: true },
    whenColor: { type: String, default: "" },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    tags: [{ type: String }],
    nodeColor: { type: String, default: "" },
    nodeShadow: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export type ExperienceData = {
  _id?: string;
  when: string;
  whenColor?: string;
  title: string;
  desc: string;
  tags: string[];
  nodeColor?: string;
  nodeShadow?: string;
  order: number;
};

export default mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);
