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
  /** optional public URL for the "Live site" button in the top bar */
  liveUrl?: string;
  /** email used for the "Request a Google Meet" CTA in the private-repo modal */
  meetingEmail?: string;
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
    /** 2-letter monogram shown in the brand badge (e.g. "YC", "SE") */
    logoMark: string;
    tagline: string;
    rows: readonly (readonly [string, string])[];
  };

  /** ── Set Our Goal ── (dark band) */
  goalLead: string;
  goalSteps: readonly GoalStep[];

  /** ── Client's Business Challenge ── numbered, staggered list */
  challenges: readonly string[];
  /** phrases inside `challenges` to bold for emphasis (optional) */
  emphasize?: readonly string[];

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
  liveUrl: "https://yahachha.com",
  meetingEmail: "nabil786.ak@gmail.com",
  metaStrip: ["Web App", "Auto QR Generation", "SaaS Product"],
  title: "YAHA CHHA",
  titleSuffix: "Freelance Marketplace",
  heroImg: `https://cdn.rootdevs.com/assets/case-study/yaha-chha/yaha-chha-banner.webp`,
  heroBadge: "Project Overview",

  overview:
    "Yaha Chha is a complete freelance marketplace connecting service providers (sellers) with clients (buyers). The platform supports photography, makeup, videography, editing, social media marketing, and other creative services.",

  info: {
    logoText: "Yaha Chha",
    logoMark: "YC",
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
  emphasize: [
    "stable, verified jobs",
    "find it hard",
    "don't support milestone payments",
    "Communication gaps",
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
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/yaha-chha-seller-profile.webp`, `https://cdn.rootdevs.com/assets/case-study/yaha-chha/yaha-chha-portfolio.webp`],
          wide: true,
        },
        {
          title: "Monthly & Yearly Subscription Options for Sellers",
          desc: "Sellers can choose between monthly and yearly subscription plans, each offering multiple package options. These plans provide access to premium features such as increased bids, enhanced profile visibility, and advanced tools—helping sellers grow faster and secure more jobs.",
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/subscription.webp`, `https://cdn.rootdevs.com/assets/case-study/yaha-chha/subscription.webp`],
          wide: true,
        },
        {
          title: "Find the Right Jobs, Faster",
          desc: "Freelancers can easily find the most relevant opportunities using smart filters and category-based search. The best-match system highlights jobs aligned with their skills and preferences, reducing search time and helping them focus on work that truly fits their expertise.",
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/filter-feed.webp`, `https://cdn.rootdevs.com/assets/case-study/yaha-chha/find-jobs.webp`],
        },
        {
          title: "Apply with Bids to Stand Out",
          desc: "Freelancers apply to jobs using a bid system that lets them highlight their interest and increase visibility on job posts. Monthly bid allocations encourage thoughtful applications, helping clients receive more relevant proposals while giving freelancers better chances of getting hired.",
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/create-job-post-step-4.webp`],
          wide: true,
        },
        {
          title: "Work by Milestones or Complete Projects",
          desc: "The platform supports both milestone-based and fixed project workflows during job application. Sellers can deliver work in structured milestones or complete the project as a whole, while milestone-based submissions ensure secure and timely payments upon successful completion of each phase.",
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/proposal-submission.webp`],
          wide: true,
        },
        {
          title: "Smart Notification System",
          desc: "Stay updated with real-time alerts for jobs, messages, project milestones, payments, and subscription activities—so sellers never miss important actions or opportunities.",
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/notification-for-mobile.webp`],
        },
        {
          title: "Seamless Communication Throughout the Project",
          desc: "The real-time chat system supports continuous communication from initial discussion to project completion, improving transparency, decision-making, and overall project success.",
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/message-system.webp`],
          wide: true,
        },
        {
          title: "Earnings Overview & Secure Withdrawals",
          desc: "Sellers can track their earnings in real time through a clear and transparent earnings dashboard. Completed milestones and projects reflect instantly, allowing sellers to withdraw funds securely and manage their income with confidence.",
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/withdraw-history.webp`],
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
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/yaha-chhal-landing.webp`],
        },
        {
          title: "Create Job Post with Clear Requirements",
          desc: "Buyers can easily create detailed job posts by defining service category, budget, project type, and timeline. A structured job creation flow ensures sellers receive clear requirements, leading to higher-quality applications and faster hiring decisions.",
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/create-job-post-step-2.webp`, `https://cdn.rootdevs.com/assets/case-study/yaha-chha/create-job-post-step-3.webp`],
          wide: true,
        },
        {
          title: "Manage Jobs & Contracts",
          desc: "Buyers can view all their job posts, contracts, and project statuses—published, unpublished, or closed. Each project card shows proposals submitted, messages exchanged, and hired freelancers, giving a clear overview at a glance. They can also filter freelancers by name, district, city, or category.",
          shots: [`https://cdn.rootdevs.com/assets/case-study/yaha-chha/all-talent.webp`, `https://cdn.rootdevs.com/assets/case-study/yaha-chha/filter-talent.webp`],
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

export const STAMPEZEE: CaseStudy = {
  slug: "stampezee",
  brand: "StampEzee",
  liveUrl: "https://www.stampezee.com",
  meetingEmail: "nabil786.ak@gmail.com",
  metaStrip: ["Web App", "Mobile App", "Digital Loyalty SaaS"],
  title: "STAMPEZEE",
  titleSuffix: "Digital Loyalty Platform",
  heroImg: `https://i.ibb.co.com/JRJ8JzyG/Header.png`,
  heroBadge: "Project Overview",

  overview:
    "StampEzee is a digital loyalty platform that helps businesses turn everyday purchases into repeat visits. Retailers create branded digital stamp cards, launch automated reward campaigns, and engage customers with playful gamification — all while tracking real growth through clear analytics. From cafés and salons to retail chains, businesses of every size use StampEzee to build stronger customer relationships every day.",

  info: {
    logoText: "StampEzee",
    logoMark: "SE",
    tagline: "Grow customer loyalty with digital stamp cards",
    rows: [
      ["Business Type", "B2B SaaS · Loyalty Platform"],
      ["Category", "Customer Loyalty & Engagement"],
      ["Platforms", "Web Dashboard, Android, iOS"],
      ["Industries", "Cafés, Salons, Restaurants, Retail Chains"],
      ["Features", "Stamp Cards, Campaigns, EzeeCodes, Gamification, Analytics"],
    ],
  },

  goalLead:
    "Our goal was to replace paper punch-cards with a single digital system that grows loyalty automatically — easy for any business to launch and effortless for customers to use.",
  goalSteps: [
    ["Step 1", "Product discovery & loyalty research"],
    ["Step 2", "Defining the three-role model · Retailer · Customer · Loyalty Executive"],
    ["Step 3", "UX strategy & branded UI system"],
    ["Step 4", "Web dashboard · Mobile app · Staff scanner app"],
    ["Step 5", "Campaign automation & analytics engine"],
    ["Step 6", "Quality testing & ongoing support"],
  ],

  challenges: [
    "Paper stamp cards get lost, faked, and leave businesses with zero customer data.",
    "Small businesses struggle to bring customers back after a first visit.",
    "Manual follow-ups for birthdays and lapsed customers never actually happen.",
    "Owners can't measure which rewards drive real repeat behaviour.",
    "Multi-location chains lack one place to manage loyalty across every outlet.",
  ],
  emphasize: [
    "lost, faked",
    "zero customer data",
    "bring customers back",
    "never actually happen",
    "one place",
  ],

  motivate:
    "Make loyalty effortless — a system where everyday purchases quietly turn into repeat visits, without manual work for the business or friction for the customer.",

  process: [
    {
      title: "Loyalty Research",
      lead: "We studied how loyalty programs succeed and fail across local and global retail.",
      points: [],
    },
    {
      title: "Owner & Staff Interviews",
      lead: "We met café, salon, and retail owners to understand:",
      points: ["Why repeat visits drop off", "Daily counter workflow", "Staff training limits", "What 'reward' means to them"],
    },
    {
      title: "Defining the Role Model",
      lead: "We mapped the platform around three clear actors:",
      points: ["Retailers set up cards & rewards", "Customers collect & redeem stamps", "Loyalty Executives scan & run campaigns"],
    },
    {
      title: "Defining Success Metrics",
      lead: "Together with stakeholders, we identified key goals:",
      points: ["Higher repeat-visit rate", "Instant staff adoption", "Automated re-engagement", "Measurable redemption data"],
    },
  ],
  insightTag: "This discovery phase ensured",
  insight: "We didn't just digitize a punch-card — we built a “loyalty engine” that runs itself.",

  strategyLead: "We prepared a complete product plan including:",
  architecture: [
    "Retailer dashboard",
    "Customer mobile app",
    "Loyalty Executive scanner app",
    "Campaign automation engine",
    "EzeeCodes distribution system",
    "Gamification & XP layer",
    "Analytics & insights",
  ],
  strategyBlocks: [
    {
      title: "Feature List Finalization",
      body: "We split the platform into a focused MVP and a scalable roadmap so businesses could launch loyalty fast and grow into campaigns later.",
    },
    {
      title: "Web + Mobile Approach",
      body: "Owners manage from a browser while customers and staff live on mobile, so we built three coordinated surfaces:",
      points: ["Web dashboard (setup, campaigns, analytics)", "Customer app (collect & redeem stamps)", "Staff app (scan QR & award stamps)"],
    },
    {
      title: "Design System",
      body: "We created a flexible branded card creator and a consistent design language shared across web and app.",
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
        ["Node.js", "#3c873a"],
        ["TypeScript", "#3178c6"],
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
    "We followed a Milestone-based development model, shipping each surface in sprints with live demos so stakeholders saw progress every step.",
  devPhases: [
    { title: "Branded Stamp Cards", points: ["Card creator", "QR stamp collection"] },
    { title: "Customer App", points: ["Collect stamps", "Redeem rewards", "Card wallet"] },
    { title: "Staff Scanner", points: ["QR scanning", "Instant stamps", "Activity tracking"] },
    { title: "Campaign Engine", points: ["Birthday & lapsed", "Scratch & win", "Email templates"] },
    { title: "Gamification & EzeeCodes", points: ["XP, badges, levels", "Bulk reward codes"] },
    { title: "Analytics & QA", points: ["Redemption insights", "Device testing", "Bug fixing"] },
  ],

  solved: [
    ["Killing the paper punch-card", "We replaced losable, fakeable cards with secure QR-based digital stamps tied to real customer data."],
    ["Automating re-engagement", "Birthday, anniversary, and lapsed-customer campaigns now run in the background with zero manual effort."],
    ["Instant staff adoption", "A dead-simple scanner app means staff award stamps in seconds with almost no training."],
    ["Making loyalty fun", "XP, levels, badges, leaderboards, and scratch-&-win turn collecting stamps into a habit."],
    ["One dashboard for every outlet", "Multi-store management lets chains run cards, campaigns, and reporting across all locations centrally."],
  ],
  solvedImg: "https://www.stampezee.com/images/home/whyStamp/whyStampImg2.png",

  impactImg: "https://www.stampezee.com/images/home/hero/dashboard.webp",
  impact: [
    "100+ active businesses engaging customers through StampEzee",
    "7,500+ repeat visits tracked",
    "170+ unique branded stamp cards created",
    "Automated campaigns running with no manual follow-up",
    "Clear, real-time redemption analytics for owners",
    "Effortless multi-location loyalty management",
    "Higher repeat-visit rates and stronger customer relationships",
  ],
  impactClose:
    "StampEzee turned routine purchases into meaningful milestones — customers stay engaged, earn rewards, and keep coming back.",

  uxPills: [
    "Minimum steps to launch a card",
    "One-tap stamp redemption",
    "Fast QR scan for staff",
    "Playful, gamified rewards",
    "Branded, on-brand card creator",
    "Clear analytics at a glance",
  ],
  uxStatement:
    "We designed wireframes, then high-fidelity screens for all three roles, so the product felt instantly understandable to owners, staff, and customers alike.",

  features: [
    {
      key: "retailer",
      label: "Retailer Side",
      icon: "store",
      items: [
        {
          title: "Branded Digital Stamp Cards",
          desc: "Retailers create reusable stamp cards that feel native to their brand — custom colors, logo, rewards, and rules — without any design tools. Customers collect stamps automatically via QR scans, replacing paper tracking entirely.",
          shots: [
            "https://www.stampezee.com/images/home/core-features/core-feat-12.webp",
            "https://www.stampezee.com/images/home/core-features/core-feat-1.webp"
          ],
          wide: true,
        },
        {
          title: "Automated Reward Campaigns",
          desc: "Stay connected without manual follow-ups. Schedule welcome rewards, birthday and anniversary offers, lapsed-customer re-engagement, scratch-&-win, and milestone bonuses — all running automatically in the background.",
          shots: [
            "https://www.stampezee.com/images/home/core-features/core-feat-2.webp",
            "https://www.stampezee.com/images/home/core-features/core-feat-8.webp"
          ],
          wide: true,
        },
        {
          title: "EzeeCodes — Reward Beyond the Counter",
          desc: "Distribute single or bulk reward codes for deliveries, online orders, influencer promotions, and events. Customers redeem codes to earn stamps even when they're nowhere near the store.",
          shots: ["https://www.stampezee.com/images/home/core-features/core-feat-3.webp"],
          wide: true,
        },
        {
          title: "Analytics & Insights",
          desc: "See your loyalty impact in real time. Track stamps issued, redemptions, and customer behaviour through actionable dashboards — so owners know which rewards work and which don't, without guessing.",
          shots: ["https://www.stampezee.com/images/home/core-features/core-feat-5.webp"],
          wide: true,
        },
        {
          title: "Multi-Store & Chain Management",
          desc: "One dashboard, every outlet. Chains centrally manage cards, campaigns, staff, and reporting across all locations, keeping branding and rewards consistent everywhere.",
          shots: ["https://www.stampezee.com/images/home/core-features/core-feat-13.webp"],
          wide: true,
        },
      ],
    },
    {
      key: "customer",
      label: "Customer Side",
      icon: "shopping-bag",
      items: [
        {
          title: "Collect & Redeem Stamps",
          desc: "Customers collect digital stamps simply by getting their QR scanned at checkout, watch cards fill up, and redeem completed cards for rewards — all from a clean mobile wallet of every card they hold.",
          shots: [
            "https://www.stampezee.com/images/home/repeat-sales/phoneImg.png",
            "https://www.stampezee.com/images/home/core-features/core-feat-6.webp"
          ],
        },
        {
          title: "Gamified Rewards",
          desc: "Loyalty becomes a fun, habit-building experience. Customers earn XP, unlock levels and badges, climb leaderboards, and reveal scratch-&-win prizes — turning everyday visits into something they look forward to.",
          shots: ["https://www.stampezee.com/images/home/core-features/core-feat-4.webp"],
        },
        {
          title: "Share with Friends & Family",
          desc: "Customers spread the word with referral links and shareable QR codes, bringing in new customers organically while earning rewards for successful invites.",
          shots: ["https://www.stampezee.com/images/home/core-features/core-feat-10.webp"],
        },
      ],
    },
  ],

  adminLead:
    "The Loyalty Executive portal gives businesses full control over staff, scanning, campaigns, and platform operations from one centralized system.",
  admin: [
    ["Centralized Loyalty Dashboard", "A unified dashboard to manage stamp cards, customers, campaigns, and overall loyalty activity efficiently from one place."],
    ["Staff Accounts & QR Scanning", "Loyalty Executives manage staff accounts and award stamps instantly by scanning customer QR codes at the counter."],
    ["Role & Permission Management", "Assign and control roles and permissions across staff so each member has the right level of access and accountability."],
    ["Campaign & Reward Management", "Create, schedule, and oversee automated campaigns and reward rules across every customer touchpoint."],
    ["Activity Tracking & Accountability", "Track staff actions and customer interactions to ensure accountability and a trustworthy loyalty program."],
    ["Custom Email Templates", "Send branded, on-brand campaign communications without external design or marketing tools."],
  ],

  feedback: {
    text: "The automation is what sold us — birthday rewards and lapsed-customer campaigns just run in the background. Our staff picked it up in minutes, customers understand it instantly, and we can finally see which rewards actually work. It feels like our loyalty program.",
    name: "Aarav",
    role: "Owner, Brew Corner",
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

export const MOTOLIFE: CaseStudy = {
  slug: "motolife",
  brand: "Moto Life",
  liveUrl: "https://motolife.rootdevs.xyz",
  meetingEmail: "nabil786.ak@gmail.com",
  metaStrip: ["E-commerce", "Web App", "Retail"],
  title: "MOTO LIFE",
  titleSuffix: "Premium Bike Accessories Store",
  heroImg: "https://i.ibb.co.com/LM0PMGg/Chat-GPT-Image-May-3-2026-03-19-00-PM-1-Edited.png",
  heroBadge: "Project Overview",

  overview:
    "Moto Life is a premium e-commerce platform dedicated to motorcycle enthusiasts, offering riding gear, accessories, and performance parts. The platform was designed to provide a seamless and visually engaging shopping experience.",

  info: {
    logoText: "Moto Life",
    logoMark: "ML",
    tagline: "Ride Smarter, Live Moto",
    rows: [
      ["Business Type", "B2C E-commerce"],
      ["Category", "Automotive & Riding Accessories"],
      ["Platforms", "Web Dashboard"],
      ["Built By", "Arafat Kabir"],
      ["Features", "Product Catalog, Cart & Checkout, Filters, Search"],
    ],
  },

  goalLead:
    "Our goal was to build a high-performance e-commerce storefront that allows riders to easily explore, filter, and purchase premium bike accessories.",
  goalSteps: [
    ["Step 1", "E-commerce workflow discovery"],
    ["Step 2", "UI/UX design for catalog and checkout"],
    ["Step 3", "Frontend development with Next.js"],
    ["Step 4", "Integration with payment & backend APIs"],
    ["Step 5", "Performance optimization"],
    ["Step 6", "Launch & ongoing support"],
  ],

  challenges: [
    "Motorcycle gear requires detailed specifications and filtering options.",
    "The shopping experience needs to be fast and mobile-responsive.",
    "Complex categories for parts, helmets, oils, and accessories.",
  ],
  emphasize: [
    "detailed specifications",
    "fast and mobile-responsive",
  ],

  motivate:
    "Deliver an online shopping experience as smooth and thrilling as a perfect ride.",

  process: [
    {
      title: "Market Research",
      lead: "We analyzed top automotive e-commerce sites to understand best practices.",
      points: [],
    },
    {
      title: "Category Architecture",
      lead: "We structured the catalog to accommodate a wide variety of parts and gear:",
      points: ["Helmets & Protection", "Performance Parts", "Electrical & Lighting", "Riding Gear"],
    },
    {
      title: "Defining Success Metrics",
      lead: "Together with the stakeholders, we identified key goals:",
      points: ["Faster product discovery", "Streamlined checkout", "High conversion rates on mobile"],
    },
  ],
  insightTag: "This discovery phase ensured",
  insight: "We built a store that understands how riders actually shop for gear.",

  strategyLead: "We prepared a complete e-commerce product plan including:",
  architecture: [
    "Product catalog system",
    "Advanced search & filtering",
    "User authentication & profiles",
    "Cart and checkout workflows",
    "Order tracking system",
  ],
  strategyBlocks: [
    {
      title: "Optimized Catalog Browsing",
      body: "We built a robust filtering system so users can quickly find parts specific to their needs.",
    },
    {
      title: "Mobile-First Design",
      body: "A significant portion of users shop from their phones, so we prioritized mobile responsiveness and touch-friendly UI.",
    },
  ],

  techLead: "We selected a modern, performant tech stack for e-commerce:",
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
  ],

  devLead:
    "We followed an agile development model to build and refine the storefront incrementally.",
  devPhases: [
    { title: "Storefront UI", points: ["Home page", "Category navigation"] },
    { title: "Product Features", points: ["Product details", "Gallery", "Specs"] },
    { title: "Shopping Workflow", points: ["Cart management", "Checkout flow"] },
    { title: "User Accounts", points: ["Order history", "Wishlist"] },
  ],

  solved: [
    ["Navigating a massive catalog", "Implemented an intuitive mega-menu and sidebar filters."],
    ["Slow mobile load times", "Optimized images and utilized server-side rendering with Next.js."],
    ["Complicated checkout", "Reduced friction by creating a multi-step but simple checkout process."],
  ],
  solvedImg: "https://i.ibb.co.com/LM0PMGg/Chat-GPT-Image-May-3-2026-03-19-00-PM-1-Edited.png",

  impactImg: "https://i.ibb.co.com/jvZ4zdbM/Dashboard.png",
  impact: [
    "A visually stunning storefront",
    "Improved product discovery for customers",
    "Seamless shopping experience across all devices",
  ],
  impactClose:
    "Moto Life provides a reliable and engaging platform for riders to equip themselves.",

  uxPills: [
    "Intuitive navigation",
    "Fast search",
    "Clear product imagery",
    "Mobile-first layouts",
    "Simplified checkout",
  ],
  uxStatement:
    "We focused on making the browsing experience as visual and straightforward as possible.",

  features: [
    {
      key: "customer",
      label: "Customer Experience",
      icon: "shopping-cart",
      items: [
        {
          title: "Comprehensive Product Catalog",
          desc: "Browse through an extensive range of motorcycles, riding gear, and accessories organized into logical categories.",
          shots: ["https://i.ibb.co.com/LM0PMGg/Chat-GPT-Image-May-3-2026-03-19-00-PM-1-Edited.png"],
          wide: true,
        },
        {
          title: "Advanced Search and Filters",
          desc: "Easily narrow down products by brand, category, price, and specific features to find exactly what you need.",
          shots: ["https://i.ibb.co.com/jvZ4zdbM/Dashboard.png"],
        },
      ],
    },
  ],

  adminLead:
    "The admin interface helps manage products, orders, and customer queries efficiently.",
  admin: [
    ["Product Management", "Add, edit, and organize the extensive catalog of products."],
    ["Order Fulfillment", "Track and manage incoming orders and their delivery statuses."],
    ["Inventory Tracking", "Keep an eye on stock levels for various parts and gear."],
  ],

  feedback: {
    text: "The new platform perfectly captures the spirit of our brand and makes it incredibly easy for our customers to shop.",
    name: "Moto Life Team",
    role: "Founders, Moto Life",
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
  "stampezee": STAMPEZEE,
  "motolife": MOTOLIFE,
};
