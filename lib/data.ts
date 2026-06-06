export type Skill = readonly [string, number];

export type StackCategory = {
  title: string;
  iconName: "code" | "layers" | "tools" | "sparkles";
  color: string;
  skills: readonly Skill[];
};

export const STACK: readonly StackCategory[] = [
  {
    title: "Frontend",
    iconName: "code",
    color: "#a78bfa",
    skills: [
      ["Next.js", 5],
      ["React", 5],
      ["TypeScript", 5],
      ["Tailwind CSS", 5],
    ],
  },
  {
    title: "State Management",
    iconName: "layers",
    color: "#60a5fa",
    skills: [
      ["Redux Toolkit", 5],
      ["Zustand", 4],
      ["React Query", 5],
    ],
  },
  {
    title: "Tools & Platforms",
    iconName: "tools",
    color: "#22c55e",
    skills: [
      ["Git & GitHub", 5],
      ["Figma", 4],
      ["VS Code", 5],
      ["Vercel", 5],
    ],
  },
  {
    title: "Other Skills",
    iconName: "sparkles",
    color: "#f59e0b",
    skills: [
      ["REST APIs", 5],
      ["GraphQL", 4],
      ["Performance", 5],
      ["SEO", 4],
    ],
  },
];

export type Project = {
  title: string;
  desc: string;
  tags: readonly string[];
  color: string;
  mock: "dashboard" | "tasks" | "ai";
  caseStudy?: string;
};

export const PROJECTS: readonly Project[] = [
  {
    title: "Yaha Chha — Freelance Marketplace",
    desc: "A complete B2C freelance marketplace connecting verified service providers with clients across Nepal — web, Android & iOS, with milestone payments and auto QR generation.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Prisma"],
    color: "#0d6b5a",
    mock: "dashboard",
    caseStudy: "yaha-chha",
  },
  {
    title: "Task Management SaaS",
    desc: "A full-featured task management application with team collaboration.",
    tags: ["Next.js", "React Query", "Tailwind", "Prisma"],
    color: "#f5f3ff",
    mock: "tasks",
  },
  {
    title: "AI Chat Assistant",
    desc: "An intelligent AI assistant with real-time chat and context-aware responses.",
    tags: ["Next.js", "OpenAI", "Tailwind", "MongoDB"],
    color: "#1a1638",
    mock: "ai",
  },
];

export type ExperienceItem = {
  when: string;
  whenColor?: string;
  title: string;
  desc: string;
  tags: readonly string[];
  nodeColor?: string;
  nodeShadow?: string;
};

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    when: "2024 - Present",
    title: "Frontend Engineer @ Bookipping",
    desc: "Building scalable web applications and UI systems. Focused on performance, accessibility and great UX.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Redux"],
  },
  {
    when: "2022 - 2024",
    whenColor: "#60a5fa",
    title: "Frontend Developer @ Tech Solutions",
    desc: "Developed responsive web apps, integrated APIs, and collaborated with cross-functional teams.",
    tags: ["React", "JavaScript", "SASS", "Git"],
    nodeColor: "#60a5fa",
    nodeShadow: "0 0 0 4px rgba(96, 165, 250, 0.15)",
  },
];

export type WIDItem = {
  title: string;
  desc: string;
  iconName: "arch" | "perf" | "uiux" | "puzzle";
  color: string;
};

export const WID: readonly WIDItem[] = [
  {
    title: "Scalable Architecture",
    desc: "Building maintainable and scalable frontend architectures.",
    iconName: "arch",
    color: "#a78bfa",
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing web applications for speed and better performance.",
    iconName: "perf",
    color: "#60a5fa",
  },
  {
    title: "UI/UX Implementation",
    desc: "Turning design into beautiful, responsive, and accessible UIs.",
    iconName: "uiux",
    color: "#22c55e",
  },
  {
    title: "Problem Solver",
    desc: "Solving complex problems with clean and efficient code.",
    iconName: "puzzle",
    color: "#f59e0b",
  },
];

// ─── Case Study Data ───
// Structure mirrors the Yaha Chha case-study page 1:1 (see reference PDF).
// NOTE: every `img: ...` field is a PLACEHOLDER. Swap the URLs for the real
// screenshots later — each one renders through a styled <img>, so any host works.
const PH = "https://placehold.co"; // placeholder image host

/* A single feature block inside a "Seller / Buyer / Admin" band. */
export type Feature = {
  title: string;
  desc: string;
  /** one or more placeholder screenshots shown beside the copy — replace later */
  shots: readonly string[];
  /** layout hint: phone-tall vs. wide browser shot */
  wide?: boolean;
};

/* One banded section of features (Seller Side / Buyer Side / Admin Portal). */
export type FeatureBand = {
  key: string;
  label: string;
  /** lucide icon name for the band tag */
  icon: string;
  items: readonly Feature[];
};

/* One Tech-Stack category (Frontend / Backend / Database / Mobile App). */
export type TechCategory = {
  label: string;
  /** [name, brand-hex] tuples — hex drives the chip accent */
  items: readonly (readonly [string, string])[];
};

/* A "Set Our Goal" flow node. */
export type GoalStep = readonly [string, string]; // [step-label, body]

/* A "Development Process" timeline phase with its sub-points. */
export type DevPhase = { title: string; points: readonly string[] };

/* An "Our Process" discovery card with optional sub-bullets. */
export type ProcessCard = { title: string; lead: string; points: readonly string[] };

/* A numbered "Admin Portal" capability row. */
export type AdminRow = readonly [string, string]; // [title, desc]

export type CaseStudy = {
  slug: string;
  /** brand label shown in the top crumb / hero */
  brand: string;
  /** meta strip above the H1 (e.g. Web App • Auto QR Generation • SaaS Product) */
  metaStrip: readonly string[];
  /** main H1 line (e.g. "YAHA CHHA") */
  title: string;
  /** subtitle after the dash (e.g. "Freelance Marketplace") */
  titleSuffix: string;
  /** hero banner placeholder image — replace later */
  heroImg: string;
  /** small floating badge on the hero banner */
  heroBadge: string;

  /** ── Project Overview ── */
  overview: string;

  /** ── Project Info ── logo word + tagline + a key/value table */
  info: {
    logoText: string;
    tagline: string;
    rows: readonly (readonly [string, string])[];
  };

  /** ── Set Our Goal ── (dark band) */
  goalLead: string;
  goalSteps: readonly GoalStep[];

  /** ── Client's Business Challenge ── numbered, staggered list */
  challenges: readonly string[];

  /** ── Project Motivate ── the black quote card */
  motivate: string;

  /** ── Our Process ── discovery cards with sub-bullets */
  process: readonly ProcessCard[];
  /** the gray "discovery phase ensured…" key-insight banner */
  insightTag: string;
  insight: string;

  /** ── Solution Strategy ── arch checklist + supporting blocks */
  strategyLead: string;
  architecture: readonly string[];
  strategyBlocks: readonly { title: string; body: string; points?: readonly string[] }[];

  /** ── Tech Stack ── (dark band) categorized chips */
  techLead: string;
  tech: readonly TechCategory[];

  /** ── Development Process ── horizontal milestone timeline */
  devLead: string;
  devPhases: readonly DevPhase[];

  /** ── Challenges We Solved ── black list card + image */
  solved: readonly (readonly [string, string])[];
  solvedImg: string;

  /** ── Business Impact ── image + black checklist + closing line */
  impactImg: string;
  impact: readonly string[];
  impactClose: string;

  /** ── UI/UX Design Approach ── pill cards + statement */
  uxPills: readonly string[];
  uxStatement: string;

  /** ── Key Features ── Seller / Buyer bands + numbered Admin rows */
  features: readonly FeatureBand[];
  /** admin portal intro + numbered capabilities */
  adminLead: string;
  admin: readonly AdminRow[];

  /** ── Client Feedback ── black testimonial card (LAST SECTION) */
  feedback: { text: string; name: string; role: string };

  /** side table-of-contents anchors (ends at feedback) */
  toc: readonly (readonly [string, string])[];
};

export const YAHACHHA: CaseStudy = {
  slug: "yaha-chha",
  brand: "Yaha Chha",
  metaStrip: ["Web App", "Auto QR Generation", "SaaS Product"],
  title: "YAHA CHHA",
  titleSuffix: "Freelance Marketplace",
  heroImg: `${PH}/1600x820/0d6b5a/ffffff?text=Yaha+Chha+%E2%80%94+Product+Banner`,
  heroBadge: "Project Overview",

  overview:
    "Yaha Chha is a complete freelance marketplace connecting service providers (sellers) with clients (buyers). The platform supports photography, makeup, videography, editing, social media marketing, and other creative services.",

  info: {
    logoText: "Yaha Chha",
    tagline: "Connecting Clients & Freelancers Across Nepal",
    rows: [
      ["Business Type", "B2C Marketplace"],
      ["Category", "Freelance Service Platform"],
      ["Platforms", "Web, Android, iOS"],
      ["Built By", "RootDevs (UI/UX + Development)"],
      ["Features", "Job Posting, Applications, Milestones, Chat, Payment, Verification"],
    ],
  },

  goalLead:
    "Our goal was to build a scalable platform that makes hiring and working easier for both freelancers and clients.",
  goalSteps: [
    ["Step 1", "Product Discovery"],
    ["Step 2", "Business model validation"],
    ["Step 3", "UX strategy & UI design"],
    ["Step 4", "Web development · Mobile app development · Dashboard system"],
    ["Step 5", "Quality testing"],
    ["Step 6", "Ongoing product support"],
  ],

  challenges: [
    "Local freelancers struggle to find stable, verified jobs.",
    "Buyers find it hard to identify skilled professionals.",
    "Existing platforms don't support milestone payments clearly.",
    "Mobile-first users need a simple, fast experience.",
    "Communication gaps create trust issues.",
  ],

  motivate:
    "Create a simple freelance platform where real people can connect and complete real work without confusion.",

  process: [
    {
      title: "Industry Research",
      lead: "We studied how service marketplaces work globally and locally.",
      points: [],
    },
    {
      title: "User Interviews",
      lead: "We met freelancers and clients to understand:",
      points: ["Pain points", "Expectations", "Typical workflow", "Payment concerns"],
    },
    {
      title: "Business Model Validation",
      lead: "We helped the client finalize:",
      points: ["Commission structure", "Milestone payment system", "Dispute handling", "Verification process", "Category-based service listing"],
    },
    {
      title: "Defining Success Metrics",
      lead: "Together with the client, we identified key goals:",
      points: ["Faster job matching", "Smooth hiring flow", "Minimum drop-off during registration", "Easy milestone approval", "High freelancer engagement"],
    },
  ],
  insightTag: "This discovery phase ensured",
  insight: "We didn't just “build a website” — we built a business-ready product.",

  strategyLead: "We prepared a complete product plan including:",
  architecture: [
    "Buyer system",
    "Seller system",
    "Admin dashboard",
    "Job workflows",
    "Notification system",
    "Payment logic",
    "Milestone tracking",
  ],
  strategyBlocks: [
    {
      title: "Feature List Finalization",
      body: "We broke the platform into phases to help the client launch faster and scale later.",
    },
    {
      title: "Web + Mobile Approach",
      body: "Because both freelancers and buyers depend heavily on mobile usage, we chose a dual-platform solution:",
      points: ["Web platform (full control + dashboard)", "Mobile app (fast hiring + instant notifications)"],
    },
    {
      title: "Design System",
      body: "We created a consistent design language usable across Web + App.",
    },
  ],

  techLead: "We selected a scalable, secure, and future-ready tech stack:",
  tech: [
    {
      label: "Frontend",
      items: [
        ["Next.js", "#ffffff"],
        ["React", "#61dafb"],
        ["TypeScript", "#3178c6"],
        ["Tailwind CSS", "#06b6d4"],
      ],
    },
    {
      label: "Backend",
      items: [
        ["TypeScript", "#3178c6"],
        ["Node.js", "#3c873a"],
        ["Express.js", "#cbd5e1"],
        ["Prisma", "#0c344b"],
      ],
    },
    {
      label: "Database",
      items: [
        ["PostgreSQL", "#336791"],
        ["Redis", "#dc382d"],
      ],
    },
    {
      label: "Mobile App",
      items: [
        ["React Native", "#61dafb"],
        ["Expo", "#ffffff"],
      ],
    },
  ],

  devLead:
    "We followed a Milestone-based development model, kept the client updated in every sprint with demo presentations.",
  devPhases: [
    { title: "Authentication & Profiles", points: ["Registration", "Buyer/Seller flow separation"] },
    { title: "Job System", points: ["Job posting", "Job listing", "Job applying"] },
    { title: "Project Management", points: ["Hiring flow", "Milestones", "Delivery submission"] },
    { title: "Communication System", points: ["Real-time chat", "Push notifications"] },
    { title: "Payment & Wallet", points: ["Secure payment", "Withdrawal system"] },
    { title: "Testing & QA", points: ["Functionality testing", "Device testing", "UX testing", "Bug fixing"] },
  ],

  solved: [
    ["Simplifying complex milestone logic", "We turned a complicated workflow into a smooth and understandable system."],
    ["Designing for mobile-first freelancers", "We optimized screens for one-hand usage."],
    ["Creating trust between buyer and seller", "Badges, verified profiles, milestone tracking, and clear communication."],
    ["Making job comparison easy for buyers", "Structured application cards + profiles."],
    ["Balancing two different user journeys", "Separate flows but one unified system."],
  ],
  solvedImg: `${PH}/720x620/0c1e1a/34d399?text=Challenges+Solved`,

  impactImg: `${PH}/720x620/0c1e1a/34d399?text=Business+Impact`,
  impact: [
    "A competitive local marketplace",
    "Faster job matching",
    "Higher freelancer engagement",
    "Professional platform reputation",
    "A scalable system ready for future features",
    "Improved hiring experience",
    "Cleaner business operations through the admin system",
  ],
  impactClose:
    "This platform created a digital space where both freelancers and clients feel confident and supported.",

  uxPills: [
    "Minimum steps for job posting",
    "Simple job applying flow",
    "Clear milestone timeline",
    "Trust-building UI",
    "Modern, clean interface",
    "High readability for all devices",
  ],
  uxStatement:
    "We created wireframe, then high-fidelity screens, ensuring the client clearly understood the product before development started.",

  features: [
    {
      key: "seller",
      label: "Seller Side",
      icon: "store",
      items: [
        {
          title: "Verified Freelancer Profile & Professional Portfolio Setup",
          desc: "Freelancers can create a complete professional profile with verified identity, skill details, and a curated portfolio. The verification system builds trust, while the Pro Badge highlights top-quality sellers, helping clients quickly identify reliable professionals and make confident hiring decisions.",
          shots: [`${PH}/640x500/eef2f5/0d6b5a?text=Seller+Profile`, `${PH}/640x500/eef2f5/0d6b5a?text=Portfolio`],
          wide: true,
        },
        {
          title: "Monthly & Yearly Subscription Options for Sellers",
          desc: "Sellers can choose between monthly and yearly subscription plans, each offering multiple package options. These plans provide access to premium features such as increased bids, enhanced profile visibility, and advanced tools—helping sellers grow faster and secure more jobs.",
          shots: [`${PH}/640x500/eef2f5/0d6b5a?text=Subscription+Dashboard`, `${PH}/640x500/eef2f5/0d6b5a?text=Plan+Details`],
          wide: true,
        },
        {
          title: "Find the Right Jobs, Faster",
          desc: "Freelancers can easily find the most relevant opportunities using smart filters and category-based search. The best-match system highlights jobs aligned with their skills and preferences, reducing search time and helping them focus on work that truly fits their expertise.",
          shots: [`${PH}/360x620/eef2f5/0d6b5a?text=Feed+%28App%29`, `${PH}/640x500/eef2f5/0d6b5a?text=Personalized+Feed`],
        },
        {
          title: "Apply with Bids to Stand Out",
          desc: "Freelancers apply to jobs using a bid system that lets them highlight their interest and increase visibility on job posts. Monthly bid allocations encourage thoughtful applications, helping clients receive more relevant proposals while giving freelancers better chances of getting hired.",
          shots: [`${PH}/520x320/eef2f5/0d6b5a?text=Submit+a+Proposal`],
          wide: true,
        },
        {
          title: "Work by Milestones or Complete Projects",
          desc: "The platform supports both milestone-based and fixed project workflows during job application. Sellers can deliver work in structured milestones or complete the project as a whole, while milestone-based submissions ensure secure and timely payments upon successful completion of each phase.",
          shots: [`${PH}/360x620/eef2f5/0d6b5a?text=Proposal+%28App%29`, `${PH}/640x420/eef2f5/0d6b5a?text=Payment+Terms`],
          wide: true,
        },
        {
          title: "Smart Notification System",
          desc: "Stay updated with real-time alerts for jobs, messages, project milestones, payments, and subscription activities—so sellers never miss important actions or opportunities.",
          shots: [`${PH}/360x620/eef2f5/0d6b5a?text=Notifications`],
        },
        {
          title: "Seamless Communication Throughout the Project",
          desc: "The real-time chat system supports continuous communication from initial discussion to project completion, improving transparency, decision-making, and overall project success.",
          shots: [`${PH}/360x620/eef2f5/0d6b5a?text=Messages+%28App%29`, `${PH}/720x460/eef2f5/0d6b5a?text=Chat+%28Web%29`],
          wide: true,
        },
        {
          title: "Earnings Overview & Secure Withdrawals",
          desc: "Sellers can track their earnings in real time through a clear and transparent earnings dashboard. Completed milestones and projects reflect instantly, allowing sellers to withdraw funds securely and manage their income with confidence.",
          shots: [`${PH}/720x300/eef2f5/0d6b5a?text=Available+Balance`, `${PH}/720x300/eef2f5/0d6b5a?text=Withdrawal+History`],
          wide: true,
        },
      ],
    },
    {
      key: "buyer",
      label: "Buyer Side",
      icon: "shopping-bag",
      items: [
        {
          title: "Buyer Home Page",
          desc: "A personalized home view where buyers can explore talent, manage jobs, and take quick actions — quick access to create and manage job posts, view active projects and contracts, and discover and filter suitable talent easily.",
          shots: [`${PH}/640x520/eef2f5/0d6b5a?text=Buyer+Home`],
        },
        {
          title: "Create Job Post with Clear Requirements",
          desc: "Buyers can easily create detailed job posts by defining service category, budget, project type, and timeline. A structured job creation flow ensures sellers receive clear requirements, leading to higher-quality applications and faster hiring decisions.",
          shots: [`${PH}/520x320/eef2f5/0d6b5a?text=Strong+Title`, `${PH}/520x320/eef2f5/0d6b5a?text=Job+Description`],
          wide: true,
        },
        {
          title: "Manage Jobs & Contracts",
          desc: "Buyers can view all their job posts, contracts, and project statuses—published, unpublished, or closed. Each project card shows proposals submitted, messages exchanged, and hired freelancers, giving a clear overview at a glance. They can also filter freelancers by name, district, city, or category.",
          shots: [`${PH}/720x500/eef2f5/0d6b5a?text=All+Job+Posts`, `${PH}/720x500/eef2f5/0d6b5a?text=Talent+Filters`],
          wide: true,
        },
      ],
    },
  ],

  adminLead:
    "The admin portal provides full control over users, jobs, projects, payments, subscriptions, disputes, and platform operations from a single centralized system.",
  admin: [
    ["Centralized Admin Dashboard", "A unified dashboard that allows administrators to manage users, jobs, projects, payments, and overall platform activity efficiently from one place."],
    ["Buyer & Seller KYC Verification", "A secure KYC verification process for both buyers and sellers to ensure verified identities, build trust, and maintain a safe marketplace environment."],
    ["User Role & Permission Management", "Manage buyer, seller, and admin roles with defined permissions, ensuring each user has the right level of access and control within the platform."],
    ["Payment & Transaction Management", "Oversee all platform payments, payouts, and earnings from a centralized system to ensure accuracy, transparency, and smooth financial operations."],
    ["Fraud Detection & Risk Monitoring", "Monitor suspicious activities and potential risks to prevent fraud, protect users, and maintain platform security."],
    ["Blog & Content Management", "Create and manage blog posts and platform content to share updates, announcements, and educational resources with users."],
  ],

  feedback: {
    text: "The team truly understood our business vision and transformed it into a complete, scalable freelance marketplace. From strategy to execution, every step was handled with care and professionalism. The result exceeded our expectations.",
    name: "R Thapa",
    role: "Founder, Yaha Chha",
  },

  toc: [
    ["overview", "Overview"],
    ["info", "Project Info"],
    ["goals", "Goal"],
    ["challenge", "Challenge"],
    ["process", "Process"],
    ["strategy", "Strategy"],
    ["stack", "Stack"],
    ["build", "Development"],
    ["solved", "Solved"],
    ["impact", "Impact"],
    ["ux", "UI/UX"],
    ["features", "Features"],
    ["feedback", "Feedback"],
  ],
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "yaha-chha": YAHACHHA,
};
