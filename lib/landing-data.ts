// ─────────────────────────────────────────────────────────────
// Static content for the 2026 landing page redesign.
// Everything here is hardcoded — no DB, no fetch. Edit freely.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Arafat",
  brand: "DevPortfolio",
  role: "Frontend Engineer",
  headlineLine1: "Frontend Engineer &",
  headlineLine2: "Product Builder",
  lead: "I craft exceptional digital experiences with modern technologies and a passion for innovation.",
  status: "Available for new opportunities",
  email: "hello@arafat.dev",
  location: "Remote · Worldwide",
  resumeHref: "#",
  // Drop your portrait into /public and set this to e.g. "/portrait.jpg"
  portrait: "/arafat.png" as string,
  socials: {
    github: "https://github.com/ArafatKabir01",
    linkedin: "#",
    twitter: "#",
    email: "mailto:hello@arafat.dev",
  },
} as const;

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

// Live coding window content (hero, right side)
export const HERO_CODE = [
  { t: "const ", c: "kw", a: [{ t: "developer", c: "var" }, { t: " = {", c: "punc" }] },
  { i: 1, t: "name", c: "prop", a: [{ t: ": ", c: "punc" }, { t: '"Arafat"', c: "str" }, { t: ",", c: "punc" }] },
  { i: 1, t: "role", c: "prop", a: [{ t: ": ", c: "punc" }, { t: '"Frontend Engineer"', c: "str" }, { t: ",", c: "punc" }] },
  { i: 1, t: "location", c: "prop", a: [{ t: ": ", c: "punc" }, { t: '"Remote"', c: "str" }, { t: ",", c: "punc" }] },
  { i: 1, t: "skills", c: "prop", a: [{ t: ": [", c: "punc" }, { t: '"React"', c: "str" }, { t: ", ", c: "punc" }, { t: '"Next.js"', c: "str" }, { t: ", ", c: "punc" }, { t: '"TypeScript"', c: "str" }, { t: "],", c: "punc" }] },
  { i: 1, t: "passion", c: "prop", a: [{ t: ": ", c: "punc" }, { t: '"Building amazing products"', c: "str" }, { t: ",", c: "punc" }] },
  { t: "};", c: "punc" },
  { t: "" },
  { t: "function ", c: "kw", a: [{ t: "createExperience", c: "fn" }, { t: "() {", c: "punc" }] },
  { i: 1, t: "return ", c: "kw", a: [{ t: '"Exceptional Digital Experiences"', c: "str" }, { t: ";", c: "punc" }] },
  { t: "}", c: "punc" },
  { t: "" },
  { t: "developer", c: "var", a: [{ t: ".", c: "punc" }, { t: "createExperience", c: "fn" }, { t: "();", c: "punc" }, { t: " // Let's build something great!", c: "com" }] },
] as const;

export const STATS = [
  { icon: "calendar", value: "3+", label: "Years Experience", sub: "Building since 2019" },
  { icon: "rocket", value: "20+", label: "Projects Completed", sub: "Across various domains" },
  { icon: "github", value: "530", label: "GitHub Contributions", sub: "Total contributions" },
  { icon: "zap", value: "78%", label: "Performance Score", sub: "Top 30% developers" },
] as const;

export const ABOUT = {
  label: "About Me",
  title: "Turning ideas into polished, performant products",
  paragraphs: [
    "I'm a frontend engineer who loves living at the intersection of design and engineering — shipping interfaces that feel fast, look sharp, and stay maintainable.",
    "Over the past few years I've built everything from marketing sites to data-heavy dashboards, always with a focus on accessibility, performance, and clean, scalable architecture.",
  ],
  highlights: [
    "End-to-end product thinking, from wireframe to deploy",
    "Pixel-perfect UI with smooth, purposeful motion",
    "Performance-first builds that score in the green",
  ],
  image: {
    src: "https://cdn.rootdevs.com/assets/case-study/single-vendor/why-c-us.webp",
    alt: "Why work with me",
    width: 1200,
    height: 900,
  },
  ctaLabel: "Get in touch",
  ctaHref: "#contact",
} as const;

export const FEATURED_PROJECTS = [
  {
    label: "Featured Project",
    title: "Yaha Chha",
    subtitle: "Freelance marketplace connecting clients & creative freelancers",
    desc: "Yaha Chha is a complete freelance marketplace connecting service providers (sellers) with clients (buyers). The platform supports photography, makeup, videography, editing, social media marketing, and other creative services.",
    banner: {
      src: "https://cdn.rootdevs.com/assets/case-study/yaha-chha/yaha-chha-banner.webp",
      alt: "Yaha Chha — freelance marketplace product banner",
      width: 1600,
      height: 900,
    },
    info: [
      { label: "Business Type", value: "B2C Marketplace" },
      { label: "Category", value: "Freelance Service Platform" },
      { label: "Platforms", value: "Web, Android, iOS" },
      { label: "Project lead By", value: "Arafat Kabir" },
    ],
    tags: ["Job Posting", "Applications", "Milestones", "Chat", "Payment", "Verification"],
    caseStudyHref: "/case-study/yaha-chha",
  },
  {
    label: "Featured Project",
    title: "StampEzee",
    subtitle: "Digital loyalty platform for businesses of all sizes",
    desc: "StampEzee is a digital loyalty platform designed for businesses of all sizes. We let you create branded digital stamp cards, launch automated rewards and campaigns, and track customer behavior — all in one simple system. Whether you run a café, salon, restaurant, or retail store, StampEzee turns routine purchases into meaningful milestones — customers stay engaged, earn rewards, and keep coming back. Trusted by businesses and brands worldwide, building stronger customer relationships every day.",
    banner: {
      src: "https://i.ibb.co.com/JRJ8JzyG/Header.png",
      alt: "StampEzee — digital loyalty platform product banner",
      width: 1600,
      height: 900,
    },
    info: [
      { label: "Active Customers", value: "100+ engaging through StampEzee" },
      { label: "Repeat Visits Tracked", value: "7,500+" },
      { label: "Unique Stamp Cards", value: "170+" },
      { label: "Front-End lead By", value: "Arafat Kabir" },
    ],
    tags: ["Stamp Cards", "Rewards", "Campaigns", "Automation", "Analytics", "Customer Insights"],
    caseStudyHref: "#",
  },
] as const;

// Back-compat alias — first featured project.
export const FEATURED = FEATURED_PROJECTS[0];

export const SKILLS = [
  { name: "React", level: 95, icon: "react", color: "#61dafb" },
  { name: "Next.js", level: 92, icon: "next", color: "#ffffff" },
  { name: "TypeScript", level: 90, icon: "ts", color: "#3178c6" },
  { name: "Tailwind CSS", level: 88, icon: "tailwind", color: "#38bdf8" },
  { name: "Node.js", level: 85, icon: "node", color: "#3c873a" },
  { name: "Redux", level: 86, icon: "redux", color: "#764abc" },
  { name: "Express", level: 84, icon: "express", color: "#ffffff" },
  { name: "Framer Motion", level: 88, icon: "framer", color: "#ff5ca0" },
  { name: "shadcn/ui", level: 89, icon: "shadcn", color: "#ffffff" },
  { name: "AI Integration", level: 87, icon: "ai", color: "#a78bfa" },
] as const;

export const EXPERIENCE = [
  {
    when: "Dec 2023 — Present",
    title: "Senior Frontend Engineer",
    company: "Rootdevs",
    desc: "Joined as a Junior Frontend Engineer and grew into a Senior role through two promotions, leading frontend delivery and mentoring across projects.",
    metrics: [
      { k: "Career Path", v: "Junior → Mid → Senior" },
      { k: "Promotions", v: "2 in 2 years" },
    ],
  },
  {
    when: "Oct 2022 — May 2023",
    title: "Frontend Developer",
    company: "SIMMI Foundation",
    desc: "Remote contractual role building and maintaining responsive web interfaces for the organization.",
    metrics: [
      { k: "Engagement", v: "Remote · Contract" },
      { k: "Technologies", v: "React, JS, CSS" },
    ],
  },
] as const;

// Real data pulled from github.com/ArafatKabir01 (all-time 517) + office
// account github.com/dev-nabil (all-time 13). Streaks/PRs computed from the
// public contribution graph. Update when refreshing the page.
export const GITHUB = {
  contributions: "530 contributions",
  longestStreak: "7",
  repos: "53",
  since: "2021",
} as const;

export const TESTIMONIALS = [
  {
    quote:
      "Arafat is an exceptional developer who consistently delivers high-quality code and innovative solutions.",
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    rating: 5,
  },
  {
    quote:
      "Working with Arafat was a game-changer for our project. His expertise and dedication are unmatched.",
    name: "Mike Chen",
    role: "CTO at StartupXYZ",
    rating: 5,
  },
] as const;

export const ARTICLES = [
  {
    title: "Building Scalable React Applications with TypeScript",
    date: "May 28, 2024",
    read: "8 min read",
    accent: "#7c5cff",
  },
  {
    title: "AI Integration in Modern Web Applications",
    date: "May 20, 2024",
    read: "12 min read",
    accent: "#60a5fa",
  },
  {
    title: "Performance Optimization Best Practices",
    date: "May 15, 2024",
    read: "6 min read",
    accent: "#ec4899",
  },
] as const;

export const SERVICES = [
  {
    icon: "layout",
    title: "Frontend Development",
    desc: "Modern, responsive web applications with cutting-edge technologies.",
    color: "#7c5cff",
  },
  {
    icon: "palette",
    title: "UI/UX Implementation",
    desc: "Pixel-perfect implementation of designs with smooth animations.",
    color: "#60a5fa",
  },
  {
    icon: "gauge",
    title: "Performance Optimization",
    desc: "Optimize applications for maximum performance and user experience.",
    color: "#22c55e",
  },
  {
    icon: "sparkles",
    title: "AI Integration",
    desc: "Integrate AI capabilities to enhance user experience and automate workflows.",
    color: "#ec4899",
  },
] as const;

export type SkillItem = (typeof SKILLS)[number];
export type ExperienceItem = (typeof EXPERIENCE)[number];
export type StatItem = (typeof STATS)[number];
export type ServiceItem = (typeof SERVICES)[number];
export type ArticleItem = (typeof ARTICLES)[number];
export type TestimonialItem = (typeof TESTIMONIALS)[number];
