// ─────────────────────────────────────────────────────────────
// Static content for the 2026 landing page redesign.
// Everything here is hardcoded — no DB, no fetch. Edit freely.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Arafat Kabir",
  brand: "Arafat Kabir",
  role: "Frontend Engineer",
  headlineLine1: "Frontend Engineer &",
  headlineLine2: "Product Builder",
  lead: "I craft exceptional digital experiences with modern technologies and a passion for innovation.",
  status: "Available for new opportunities",
  email: "nabil786.ak@gmail.com",
  phone: "(+880) 1856-533434",
  location: "Chottagram, Bangladesh 4217",
  resumeHref: "/arafat-kabir-resume.pdf",
  // Drop your portrait into /public and set this to e.g. "/portrait.jpg"
  portrait: "/arafat.png" as string,
  socials: {
    github: "https://github.com/ArafatKabir01",
    linkedin: "https://www.linkedin.com/in/arafat-ibne-kabir",
    email: "mailto:nabil786.ak@gmail.com",
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
  { i: 1, t: "name", c: "prop", a: [{ t: ": ", c: "punc" }, { t: '"Arafat Kabir"', c: "str" }, { t: ",", c: "punc" }] },
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
      src: "https://cdn.rootdevs.com/assets/homepg/yaha-chha.webp",
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
    caseStudyHref: "/case-study/stampezee",
  },
  {
    label: "Featured Project",
    title: "Moto Life",
    subtitle: "Premium e-commerce platform for motorcycle accessories and riding gear",
    desc: "Moto Life is a dedicated e-commerce destination for motorcycle enthusiasts, offering a wide range of premium motorcycles, riding gear, accessories, and exclusive deals. Designed for a seamless shopping experience, the platform makes it easy for riders to find everything they need in one trusted destination.",
    banner: {
      src: "https://i.ibb.co.com/LM0PMGg/Chat-GPT-Image-May-3-2026-03-19-00-PM-1-Edited.png",
      alt: "Moto Life — Premium Bike Accessories product banner",
      width: 1600,
      height: 900,
    },
    info: [
      { label: "Business Type", value: "B2C E-commerce" },
      { label: "Category", value: "Automotive Accessories" },
      { label: "Platforms", value: "Web Dashboard" },
      { label: "Project lead By", value: "Arafat Kabir" },
    ],
    tags: ["E-commerce", "Product Catalog", "Cart System", "Checkout", "Search & Filters"],
    caseStudyHref: "/case-study/motolife",
  },
] as const;

// Back-compat alias — first featured project.
export const FEATURED = FEATURED_PROJECTS[0];

export const SKILLS = [
  { name: "React", level: 95, icon: "react", color: "#61dafb" },
  { name: "Next.js", level: 92, icon: "next", color: "#ffffff" },
  { name: "TypeScript", level: 90, icon: "ts", color: "#3178c6" },
  { name: "JavaScript", level: 95, icon: "js", color: "#f7df1e" },
  { name: "HTML5", level: 95, icon: "html", color: "#e34f26" },
  { name: "CSS3", level: 94, icon: "css", color: "#1572b6" },
  { name: "Tailwind CSS", level: 88, icon: "tailwind", color: "#38bdf8" },
  { name: "Socket.io", level: 85, icon: "socketio", color: "#ffffff" },
  { name: "Redux", level: 86, icon: "redux", color: "#764abc" },
  { name: "Framer Motion", level: 88, icon: "framer", color: "#ff5ca0" },
  { name: "shadcn/ui", level: 89, icon: "shadcn", color: "#ffffff" },
  { name: "Node.js", level: 85, icon: "node", color: "#3c873a" },
  { name: "Express", level: 84, icon: "express", color: "#ffffff" },
  { name: "Git", level: 90, icon: "git", color: "#f05032" },
  { name: "AI Integration", level: 87, icon: "ai", color: "#a78bfa" },
] as const;

export const EXPERIENCE = [
  {
    when: "Aug 2024 — Present",
    title: "Senior Frontend Engineer",
    company: "Rootdevs",
    desc: "Primary current role leading front-end architecture and UI delivery for key products. Mentoring developers and setting up high-performance design system standards.",
    metrics: [
      { k: "Leadership", v: "Mentoring & Arch" },
      { k: "Tech", v: "Next.js, TS, Tailwind" },
    ],
  },
  {
    when: "Jan 2025 — Present",
    title: "Project Manager",
    company: "Quickxero",
    desc: "Remote role leading agile ceremonies, project planning, and cross-functional teams to deliver high-quality digital products. Ensuring alignment between business goals and development scope.",
    metrics: [
      { k: "Focus", v: "Agile Leadership (Remote)" },
      { k: "Deliverables", v: "On-time Shipping" },
    ],
  },
  {
    when: "Apr 2024 — Aug 2024",
    title: "Mid Frontend Engineer",
    company: "Rootdevs",
    desc: "Owned major features end-to-end, optimized rendering performance, and integrated complex third-party REST/GraphQL APIs.",
    metrics: [
      { k: "Ownership", v: "Feature Lead" },
      { k: "Performance", v: "Lighthouse Optimization" },
    ],
  },
  {
    when: "Dec 2023 — Apr 2024",
    title: "Junior Frontend Engineer",
    company: "Rootdevs",
    desc: "Built responsive UI components, resolved visual bugs, and learned modern frontend workflows in a fast-paced environment.",
    metrics: [
      { k: "Role", v: "UI Specialist" },
      { k: "Growth", v: "2 promotions in 1 year" },
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
      "Arafat built our complex marketplace into a smooth, intuitive experience.",
    name: "Roshan Thapa",
    role: "Founder, Yaha Chha",
    rating: 5,
    image: "/avatar_roshan_1780751107612.png",
  },
  {
    quote:
      "He delivered a premium dashboard and scanning flows that our merchants love.",
    name: "Aarav",
    role: "Co-Founder, StampEzee",
    rating: 5,
    image: "/avatar_aarav_1780751120148.png",
  },
  {
    quote:
      "Arafat bridges the gap between clean code and business goals perfectly.",
    name: "Elias Khan",
    role: "CEO, Rootdevs",
    rating: 5,
    image: "/avatar_rahman_1780751133349.png",
  },
] as const;

export const ARTICLES = [
  {
    title: "Optimizing QR Code Scanning & Performance in React Native",
    date: "May 28, 2026",
    read: "7 min read",
    accent: "#61dafb",
    image: "/article_qr_1780751147273.png",
  },
  {
    title: "How We Built a Scalable Real-Time Chat System for a Freelance Marketplace",
    date: "Apr 15, 2026",
    read: "9 min read",
    accent: "#06b6d4",
    image: "/article_chat_1780751160605.png",
  },
  {
    title: "The Frontend PM: Bridging the Gap Between Code and Product Management",
    date: "Mar 10, 2026",
    read: "6 min read",
    accent: "#7c5cff",
    image: "/article_pm_1780751175824.png",
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
