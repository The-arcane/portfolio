
import type { Project, ExperienceItem, EducationItem, SkillItem, UserProfile, ContactInfo, NavItem, ResumeData, AchievementItem } from '@/types';
import { Linkedin, Github, Mail, Phone, Briefcase, GraduationCap, Lightbulb, ExternalLink, Code, Award, Star, Laptop, Wind, Atom, GitFork, Database, Cloud, FileCode, Server, Network, CodeXml } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Toolbelt', href: '#toolbelt'},
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const userProfileData: UserProfile = {
  name: "Raunaq Adlakha",
  title: "Aspiring Technologist & Innovator | Web, AI & ML Enthusiast",
  bio: [
    "I’m not just another BCA student with a “passion for tech.” I don’t chase certificates or copy-paste projects. I build systems from scratch, break what doesn’t work, automate the chaos, and then rebuild it stronger.",
    "I’ve worked on real, functional projects, not just class submissions. From building UHI Care, an open healthcare platform with AI-powered automation, real-time doctor-patient video interaction, and structured data syncing — to crafting MediBot, a wellness assistant that delivers everything from Ayurvedic remedies to fitness routines, booking appointments, setting up reminders, and streamlining user health journeys.",
    "I even threw myself into side gigs for fun — building a Rajasthan tourism site just to explore creative design and user flow, and later developing TechGear, a full-stack e-commerce platform with a secure admin portal, inventory and stock management, order control, and real-time client-side ordering.",
    "React. Node.js. Supabase. Automation. n8n. APIs.",
    "I don’t “explore” tools — I deploy them. I focus on building systems that work when I’m not watching. Because for me, this isn’t a portfolio. It’s a living ecosystem of shipped ideas.",
    "Right now, I’m a novice in the internship world — but not in delivery. I’m actively looking to work with startups or product-focused teams where I can learn fast, solve problems, and contribute from Day 1. I bring energy, speed, accountability — and I build with intent.",
    "If it’s simple, I scale it.",
    "If it’s complex, I simplify it.",
    "And if it looks impossible — I’m already in the code."
  ],
};

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'UHIcare - Digital Open Healthcare Ecosystem',
    description: 'An inclusive platform connecting doctors and patients while promoting accessible healthcare and integrated wellness tools.',
    imageUrl: '/main.png',
    imageHint: 'healthcare platform',
    tags: ['Healthcare', 'Wellness', 'Web Platform'],
    liveUrl: 'https://uhi-main.netlify.app/',
    repoUrl: undefined,
  },
  {
    id: 'proj2',
    title: 'HealthBot - Symptom-Based Health Assistant',
    description: 'Analyzes user input to suggest home remedies, yoga, ayurvedic care, and recommend relevant doctors based on reported conditions.',
    imageUrl: '/med.png',
    imageHint: 'health assistant',
    tags: ['AI', 'Chatbot', 'Healthcare'],
    liveUrl: 'https://healthbot-uhi.netlify.app/',
    repoUrl: undefined,
  },
  {
    id: 'proj3',
    title: 'Rajasthan Tourism - Virtual Heritage Tour',
    description: 'Explore the vibrant culture and heritage of Rajasthan with virtual tours of iconic destinations, browse stunning photo galleries, and plan your dream trip with integrated booking for attractions and experiences.',
    imageUrl: '/rajasthan.png',
    imageHint: 'Rajasthan travel',
    tags: ['Travel', 'Virtual Tour', 'Booking Platform', 'Web App'],
    liveUrl: 'https://rajasthann.netlify.app/',
    repoUrl: undefined,
  },
  {
    id: 'proj4',
    title: 'TechGear - Gadgets & Accessories Hub',
    description: 'Your one-stop e-commerce platform for the latest computer peripherals, mobile accessories, and tech gadgets. Browse, compare, and purchase with ease, featuring secure admin controls and real-time inventory management.',
    imageUrl: '/techgear.png',
    imageHint: 'tech ecommerce',
    tags: ['E-commerce', 'Tech', 'Full-Stack', 'Admin Portal'],
    liveUrl: 'https://techgear2.netlify.app/',
    repoUrl: undefined,
  },
];

export const resumeData: ResumeData = {
  experience: [
    {
      id: 'exp0',
      role: 'Tech Intern & Project Lead',
      company: 'Innowise (Client: PickleBugs)',
      dateRange: 'June 2025 - Present',
      responsibilities: [
        "Worked as a Tech Intern at Innowise on the Picklebugs platform, a company co-founded by Virender Sehwag.",
        "Led the technical side of the project while building the complete system end-to-end, including customer and admin applications, database setup, AI workflows, and core platform logic.",
        "Handled the entire development lifecycle independently, from implementation to final delivery."
      ],
    },
    {
      id: 'exp1',
      role: 'Founder & President',
      company: 'QuantaLoop Technical Society (BVIMR)',
      dateRange: '2025-present',
      responsibilities: [
        'Founded and leading QuantaLoop, a student-led tech society built from scratch to promote innovation and technical growth.',
        'Driving strategy, events, and community initiatives with a focus on impact and excellence.',
        'Committed to elevating ideas beyond the ordinary—because average isn’t the goal.',
      ],
    },
    {
      id: 'exp2',
      role: 'CORE MEMBER',
      company: 'Nexel - Incubation Cell',
      dateRange: '2025 - present',
      responsibilities: [
        "Founding member involved in building the cell from scratch.",
        "Leading networking and investor outreach, creating connections with mentors and early-stage investors.",
        "Working on event formats, operational structure, and partnerships to support student-led innovations."
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      id: 'edu1',
      institution: 'BVIMR - BHARATI VIDYAPEETH INSTITUTE OF MANAGEMENT & RESEARCH',
      degree: 'Bachelor of Computer Applications (BCA)',
      dateRange: '2024 - 2027',
      details: 'Specializing in Programming, Web Development, and AI. Active contributor to entrepreneurship societies. Built multiple real-world applications through project-based learning.',
    },
    {
      id: 'edu2',
      institution: 'DL DAV MODEL SCHOOL, PITAMPURA',
      degree: 'Senior Secondary - Science (Non-Medical)',
      dateRange: 'Completed',
      details: '',
    },
  ] as EducationItem[],
  skills: [
    { id: 'skill1', name: 'Web Development (HTML, CSS, JavaScript)', category: 'Web Development' },
    { id: 'skill2', name: 'React, Node.js, Next.js', category: 'Frameworks/Libraries' },
    { id: 'skill3', name: 'Machine Learning & Generative AI', category: 'AI/ML' },
    { id: 'skill4', name: 'Prompt Engineering & AI Tooling', category: 'AI/ML' },
    { id: 'skill5', name: 'Leadership, Event Management & Team Building', category: 'Soft Skills' },
    { id: 'skill6', name: 'Investor Communication & Outreach', category: 'Communication' },
    { id: 'skill7', name: 'Entrepreneurial Strategy & Innovation', category: 'Strategy' },
  ] as SkillItem[],
  achievements: [
    { id: 'ach1', description: 'Top 25 Finalist - Hack2Hustle Hackathon (among 200+ teams)' },
    { id: 'ach2', description: 'Top 5 Finalist - Battle of Coders (BOC) DSA Coding Competition' },
    { id: 'ach3', description: 'Organized 2 major entrepreneurial events under ED Mantics, including flagship event Avsar' },
    { id: 'ach4', description: 'Currently building a Technical Society to foster coding, hackathons, and student innovation' },
  ] as AchievementItem[],
  certifications: [
    "Explore Generative AI with the Gemini API in Vertex AI",
    "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    "Develop GenAI Apps with Gemini and Streamlit",
    "Build Real World AI Applications with Gemini and Imagen",
    "Prompt Design in Vertex AI"
  ] as string[],
};

export const contactDataInfo: ContactInfo = {
  email: 'raunaq.adlakha@gmail.com',
  phone: '+91 8826907327',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/raunaq-adlakha-849997316/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/The-arcane', icon: Github },
    { name: 'Email', url: 'mailto:raunaq.adlakha@gmail.com', icon: Mail },
  ],
};

export const IconMap = {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Code: CodeXml,
  ExternalLink,
  Phone,
  Mail,
  Linkedin,
  Github,
  Award,
  Star,
  Laptop,
  Wind,
  Atom,
  GitFork,
  Database,
  Cloud,
  FileCode,
  Server,
  Network,
  CodeXml,
};
