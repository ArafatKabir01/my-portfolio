import mongoose, { Schema } from "mongoose";

const HeroSchema = new Schema(
  {
    greeting: { type: String, default: "Hi, I'm Arafat" },
    statusPill: { type: String, default: "Available for work" },
    tagline: { type: String, default: "Frontend Engineer" },
    leadText: {
      type: String,
      default:
        "I build scalable, high-performance web applications with modern technologies and beautiful user experiences.",
    },
    primaryBtnLabel: { type: String, default: "View Projects" },
    secondaryBtnLabel: { type: String, default: "Contact Me" },
    githubUrl: { type: String, default: "#" },
    linkedinUrl: { type: String, default: "#" },
    twitterUrl: { type: String, default: "#" },
    emailAddress: { type: String, default: "" },
  },
  { timestamps: true }
);

export type HeroData = {
  _id?: string;
  greeting: string;
  statusPill: string;
  tagline: string;
  leadText: string;
  primaryBtnLabel: string;
  secondaryBtnLabel: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  emailAddress: string;
};

export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
