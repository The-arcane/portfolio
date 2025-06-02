
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
    "I'm a highly motivated student with a fervent passion for technology, innovation, and the potential of entrepreneurship. I am actively developing skills in web development, AI, and Machine Learning, and am keen on building real-world solutions and taking initiative.",
    "As a student, I'm already an active core member of two entrepreneurial societies, where I contribute to event planning and innovation strategy. I'm also involved in establishing a technical society to foster coding culture and support student developers. I believe in collaboration, creative thinking, and making a meaningful impact through technology."
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
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'Rajasthan travel',
    tags: ['Travel', 'Virtual Tour', 'Booking Platform', 'Web App'],
    liveUrl: 'https://rajasthann.netlify.app/',
    repoUrl: undefined,
  },
  {
    id: 'proj4',
    title: 'TechGear - Gadgets & Accessories Hub',
    description: 'Your one-stop e-commerce platform for the latest computer peripherals, mobile accessories, and tech gadgets. Browse, compare, and purchase with ease.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'tech accessories',
    tags: ['E-commerce', 'Tech', 'Accessories', 'Online Store'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/The-arcane/e-com',
  },
];

export const resumeData: ResumeData = {
  experience: [
    {
      id: 'exp1',
      role: 'CORE MEMBER',
      company: 'ED Mantics - The Entrepreneurship Development Cell',
      dateRange: '2024 - present',
      responsibilities: [
        "Promoting entrepreneurial thinking through workshops, mentorship, and startup pitch events.",
        "Successfully part of the organizing team for two major events, including the entrepreneurial Event Avsar, managing outreach, logistics, and execution."
      ],
    },
    {
      id: 'exp2',
      role: 'CORE MEMBER',
      company: 'Nexel - Incubation Cell',
      dateRange: '2024 - present',
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
      dateRange: '2023 - 2026 (Expected)',
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
    { id: 'skill2', name: 'React, Node.js, Next.js (Beginner)', category: 'Frameworks/Libraries' },
    { id: 'skill3', name: 'Machine Learning & Generative AI (Beginner)', category: 'AI/ML' },
    { id: 'skill4', name: 'Prompt Engineering & AI Tooling (Beginner)', category: 'AI/ML' },
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
