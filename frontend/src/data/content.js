export const PROFILE = {
  first: "RAUNAQ",
  last: "ADLAKHA",
  name: "Raunaq Adlakha",
  role: "FULL-STACK DEVELOPER · FOUNDER · AI BUILDER",
  email: "raunaq.works@gmail.com",
  phone: "+91 88269 07327",
  phoneHref: "tel:+918826907327",
  location: "NEW DELHI, IN — 28.61°N 77.20°E",
  resume: "/assets/resume.pdf",
  avatar: "/assets/profile-pic.jpeg",
  socials: [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/raunaq-adlakha/" },
    { label: "GITHUB", href: "https://github.com/The-arcane" },
    { label: "EMAIL", href: "mailto:raunaq.works@gmail.com" },
  ],
};

export const CHAPTERS = [
  {
    num: "01",
    title: "I BUILD PRODUCTS, NOT DEMOS",
    body: "Full-stack developer shipping end-to-end systems — database architecture to pixel-level UI. React, Next.js, Node.js, TypeScript, PostgreSQL. Ambitious ideas go in, scalable products come out.",
  },
  {
    num: "02",
    title: "I FOUND COMPANIES",
    body: "Founded SparkEdge Innovations — a studio delivering custom web, mobile and AI-powered software for 5+ clients across industries. Agile execution owned from first requirement to production deployment.",
  },
  {
    num: "03",
    title: "I AUTOMATE EVERYTHING",
    body: "AI-powered systems built on Google Gemini, Vertex AI, n8n and LLM pipelines. Event platforms, certificate automation, multi-agent Slack bots — workflows that keep running while I sleep.",
  },
  {
    num: "04",
    title: "I LEAD COMMUNITIES",
    body: "President & founder of QuantaLoop Technical Society — 50+ members strong. Hackathon mentor for 100+ competing teams. Core member of Nexel Incubation Cell. Ecosystems, not just code.",
  },
];

export const STATS = [
  { n: "05+", label: "CLIENTS SHIPPED" },
  { n: "100+", label: "TEAMS MENTORED" },
  { n: "50+", label: "SOCIETY MEMBERS" },
];

export const EXPERIENCE = [
  {
    role: "Founder",
    org: "SparkEdge Innovations",
    period: "DEC 2025 — NOW",
    points: [
      "Technology startup delivering custom web, mobile & AI-powered software for 5+ clients across diverse industries.",
      "Orchestrated end-to-end execution of 5+ projects — requirements, development, deployment, client support.",
    ],
  },
  {
    role: "Tech Intern & Project Lead",
    org: "Innowise — Client: Picklebugs (co-founded by Virender Sehwag)",
    period: "JUL 2025 — DEC 2025",
    points: [
      "Engineered the complete Picklebugs platform: customer-facing systems, admin portals, database infrastructure across 5+ business verticals.",
      "Industry-specific systems for hospitality, residences, education & sports courts with RBAC and unit-tested modules.",
      "Designed AI-powered n8n workflows, owning the lifecycle from requirements to production.",
    ],
  },
  {
    role: "Hackathon Mentor",
    org: "Build-A-Thon",
    period: "SEP 2025",
    points: [
      "Guided 100+ competing teams on system architecture, technical execution and collaborative problem-solving under time pressure.",
    ],
  },
  {
    role: "President & Founder",
    org: "QuantaLoop Technical Society — BVIMR",
    period: "2025 — NOW",
    points: [
      "Founded and lead QuantaLoop for 50+ members — workshops, coding competitions, hackathons and team collaboration.",
    ],
  },
  {
    role: "Core Member",
    org: "Nexel — Incubation Cell",
    period: "2025 — NOW",
    points: [
      "Founding member building the cell from scratch — investor outreach, mentor networks, event formats and partnerships for student-led innovation.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "Bachelor of Computer Application (BCA)",
    org: "Bharati Vidyapeeth Institute of Management & Research, Delhi",
    period: "2024 — 2027",
    note: "GPA 8.85 / 10.0 — programming, web dev, system design, AI, product-focused engineering.",
  },
  {
    title: "Senior Secondary — Science (Non-Medical)",
    org: "DL DAV Model School, Pitampura",
    period: "COMPLETED",
    note: "",
  },
];

export const PROJECTS = [
  {
    id: "P.01",
    title: "Event Management, Attendance & Certificate Automation",
    blurb: "Complete event platform — registration, QR-pass generation, automated email delivery, real-time check-ins, attendance tracking, coordinator management, feedback and QR-verified certificates. Powered by QRBlaze & CertiFrenzy.",
    tags: ["NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "AUTOMATION"],
    img: "/assets/event.png",
    link: null,
  },
  {
    id: "P.02",
    title: "UHIcare — Digital Open Healthcare Ecosystem",
    blurb: "Open healthcare platform with WebRTC video consultations, AI-powered scheduling, prescription generation, secure auth, payments and automated notifications for 500+ users.",
    tags: ["REACT", "NODE.JS", "SUPABASE", "WEBRTC", "AI"],
    img: "/assets/main.png",
    link: "https://uhi-main.netlify.app/",
  },
  {
    id: "P.03",
    title: "MediBot — AI Wellness Assistant",
    blurb: "Conversational AI on the Gemini API — personalized health guidance, Ayurvedic remedies, fitness routines, appointment booking and medication reminders.",
    tags: ["REACT", "NODE.JS", "GEMINI API", "NLP"],
    img: "/assets/med.png",
    link: "https://healthbot-uhi.netlify.app/",
  },
  {
    id: "P.04",
    title: "Slack AI Agent Builder",
    blurb: "Multi-agent AI workflow generation platform — turns conversational requirements into production-ready n8n automation blueprints with contextual memory and validation.",
    tags: ["N8N", "OPENAI", "GROQ", "SLACK", "AI AGENTS"],
    img: "/assets/slack-bot.png",
    link: null,
  },
  {
    id: "P.05",
    title: "Rajasthan Tourism — Virtual Heritage Tour",
    blurb: "Virtual tours of iconic destinations, photo galleries and integrated booking for attractions and experiences across Rajasthan.",
    tags: ["TRAVEL", "VIRTUAL TOUR", "BOOKING"],
    img: "/assets/rajasthan.png",
    link: "https://rajasthann.netlify.app/",
  },
  {
    id: "P.06",
    title: "TechGear — Gadgets & Accessories Hub",
    blurb: "E-commerce platform for peripherals and tech gadgets — browse, compare, purchase, with secure admin controls and real-time inventory.",
    tags: ["E-COMMERCE", "FULL-STACK", "ADMIN PORTAL"],
    img: "/assets/techgear.png",
    link: "https://techgear2.netlify.app/",
  },
];

export const SKILLS = [
  { label: "LANGUAGES", items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"] },
  { label: "FRAMEWORKS", items: ["React.js", "Next.js", "Node.js", "Express.js", "TailwindCSS"] },
  { label: "DATABASES", items: ["PostgreSQL", "NoSQL", "Database Design"] },
  { label: "CLOUD & AI", items: ["Google Cloud", "Vertex AI", "Gemini API"] },
  { label: "TOOLS", items: ["n8n", "REST APIs", "Git", "Docker", "CI/CD"] },
  { label: "PRACTICE", items: ["Agile", "Scrum", "SDLC", "Unit Testing", "Leadership"] },
];

export const ACHIEVEMENTS = [
  "Mentor — Build-A-Thon 2025: guided 100+ competing teams on architecture & execution.",
  "Founder & President — QuantaLoop: BVIMR technical society, 50+ members, hackathons & coding culture.",
  "Founder — SparkEdge Innovations: custom web, mobile & AI software for 5+ clients.",
  "Top 25 Finalist — Hack2Hustle Hackathon, out of 200+ teams.",
  "Top 5 Finalist — Battle of Coders (BOC) DSA Competition.",
  "Event Lead & Organizer — Nexel: two major technical & entrepreneurial events.",
];

export const CERTS = [
  "Build Real World AI Applications with Gemini and Imagen",
  "Prompt Design in Vertex AI",
  "Develop GenAI Apps with Gemini and Streamlit",
  "Explore Generative AI with the Vertex AI Gemini API",
  "Inspect Rich Documents with Gemini — Multimodality & Multimodal RAG",
];
