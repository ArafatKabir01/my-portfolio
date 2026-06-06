import { connectDB } from "./db";
import HeroModel from "./models/hero.model";
import ProjectModel from "./models/project.model";
import ExperienceModel from "./models/experience.model";
import StackModel from "./models/stack.model";
import WIDModel from "./models/wid.model";
import { PROJECTS, EXPERIENCE, STACK, WID } from "./data";

export async function runSeed(force = false) {
  await connectDB();

  const results: Record<string, string> = {};

  // Hero
  const heroCount = await HeroModel.countDocuments();
  if (force) await HeroModel.deleteMany({});
  if (force || heroCount === 0) {
    await HeroModel.create({
      greeting: "Hi, I'm Arafat",
      statusPill: "Available for work",
      tagline: "Frontend Engineer",
      leadText:
        "I build scalable, high-performance web applications with modern technologies and beautiful user experiences.",
      primaryBtnLabel: "View Projects",
      secondaryBtnLabel: "Contact Me",
      githubUrl: "#",
      linkedinUrl: "#",
      twitterUrl: "#",
      emailAddress: "",
    });
    results.hero = "seeded";
  } else {
    results.hero = "skipped";
  }

  // Projects
  const projectCount = await ProjectModel.countDocuments();
  if (force) await ProjectModel.deleteMany({});
  if (force || projectCount === 0) {
    await ProjectModel.insertMany(
      PROJECTS.map((p, i) => ({
        title: p.title,
        desc: p.desc,
        tags: [...p.tags],
        color: p.color,
        mock: p.mock,
        useImage: false,
        image: "",
        caseStudy: p.caseStudy ?? "",
        order: i,
      }))
    );
    results.projects = "seeded";
  } else {
    results.projects = "skipped";
  }

  // Experience
  const expCount = await ExperienceModel.countDocuments();
  if (force) await ExperienceModel.deleteMany({});
  if (force || expCount === 0) {
    await ExperienceModel.insertMany(
      EXPERIENCE.map((e, i) => ({
        when: e.when,
        whenColor: e.whenColor ?? "",
        title: e.title,
        desc: e.desc,
        tags: [...e.tags],
        nodeColor: e.nodeColor ?? "",
        nodeShadow: e.nodeShadow ?? "",
        order: i,
      }))
    );
    results.experience = "seeded";
  } else {
    results.experience = "skipped";
  }

  // Stack
  const stackCount = await StackModel.countDocuments();
  if (force) await StackModel.deleteMany({});
  if (force || stackCount === 0) {
    await StackModel.insertMany(
      STACK.map((s, i) => ({
        title: s.title,
        iconName: s.iconName,
        color: s.color,
        skills: s.skills.map(([name, level]) => ({ name, level })),
        order: i,
      }))
    );
    results.stack = "seeded";
  } else {
    results.stack = "skipped";
  }

  // WID
  const widCount = await WIDModel.countDocuments();
  if (force) await WIDModel.deleteMany({});
  if (force || widCount === 0) {
    await WIDModel.insertMany(
      WID.map((w, i) => ({
        title: w.title,
        desc: w.desc,
        iconName: w.iconName,
        color: w.color,
        order: i,
      }))
    );
    results.wid = "seeded";
  } else {
    results.wid = "skipped";
  }

  return results;
}

export async function getCollectionCounts() {
  await connectDB();
  const [hero, projects, experience, stack, wid] = await Promise.all([
    HeroModel.countDocuments(),
    ProjectModel.countDocuments(),
    ExperienceModel.countDocuments(),
    StackModel.countDocuments(),
    WIDModel.countDocuments(),
  ]);
  return { hero, projects, experience, stack, wid };
}
