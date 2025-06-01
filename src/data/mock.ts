import type { Project, ExperienceItem, EducationItem, SkillItem, UserProfile, ContactInfo, NavItem, ResumeData, AchievementItem } from '@/types';
import { Linkedin, Github, Mail, Phone, Briefcase, GraduationCap, Lightbulb, ExternalLink, Code, Award, Star } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const userProfileData: UserProfile = {
  name: "Raunaq Adlakha",
  title: "Aspiring Technologist & Entrepreneur | Web, AI, & ML Enthusiast",
  bio: [
    "I'm a highly motivated student with a passion for technology, innovation, and entrepreneurship. With a strong background in web development, AI, and Machine Learning, I thrive on building real-world solutions and taking initiative.",
    "I'm currently an active core member of two entrepreneurial societies, contributing to event planning, innovation strategy, and investor engagement. I'm also in the process of establishing a dedicated technical society to foster coding culture, organize tech events, and support student developers. I believe in collaboration, creative thinking, and making meaningful impact through tech."
  ],
};

export const projectsData: Project[] = [
  {
    id: 'proj1',
    title: 'UHIcare - Digital Open Healthcare Ecosystem',
    description: 'An inclusive platform connecting doctors and patients while promoting accessible healthcare and integrated wellness tools.',
    imageUrl: '/uhicare-screenshot.png', // Example: place 'uhicare-screenshot.png' in your 'public' folder
    imageHint: 'healthcare platform',
    tags: ['Healthcare', 'Wellness', 'Web Platform'],
    liveUrl: undefined, // Not specified in resume
    repoUrl: undefined, // Not specified in resume
  },
  {
    id: 'proj2',
    title: 'HealthBot - Symptom-Based Health Assistant',
    description: 'Analyzes user input to suggest home remedies, yoga, ayurvedic care, and recommend relevant doctors based on reported conditions.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'health assistant',
    tags: ['AI', 'Chatbot', 'Healthcare'],
    liveUrl: undefined,
    repoUrl: undefined,
  },
  {
    id: 'proj3',
    title: 'DocBot - VC Transcription & Prescription Tool',
    description: 'Auto-transcribes doctor-patient video consultations and generates initial prescriptions to streamline medical workflows.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'medical transcription',
    tags: ['AI', 'Transcription', 'Healthcare'],
    liveUrl: undefined,
    repoUrl: undefined,
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
      dateRange: '2025 - present', // Assuming '2025 - present' is a typo and should be current or a past range. Keeping as is from original.
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
      dateRange: '2024 - present',
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
    { id: 'skill3', name: 'Machine Learning & Generative AI (Gemini, Vertex AI)', category: 'AI/ML' },
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
  Code,
  ExternalLink,
  Phone,
  Mail,
  Linkedin,
  Github,
  Award,
  Star,
};
