import type { Project, ExperienceItem, EducationItem, SkillItem, UserProfile, ContactInfo, NavItem, ResumeData, AchievementItem } from '@/types';
import { Linkedin, Github, Mail, Phone, Briefcase, GraduationCap, Lightbulb, ExternalLink, Code, Award, Star, Laptop, Wind, Atom, GitFork, Database, Cloud, FileCode, Server, Network, CodeXml } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Toolbelt', href: '#toolbelt' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const userProfileData: UserProfile = {
  name: 'Raunaq Adlakha',
  title: 'Full-Stack Software Developer, Founder & Technology Leader',
  bio: [
    'I am a full-stack software developer, founder, and technology leader focused on building scalable software products, AI-powered systems, event management platforms, and business automation solutions.',
    'I have led end-to-end development of client-facing products, managed real-world software projects, and founded SparkEdge Innovations to deliver custom web, mobile, and AI-powered solutions across multiple industries.',
    'My work spans modern JavaScript ecosystems, system architecture, database design, product development, automation workflows, and practical AI integrations using technologies such as Google Gemini, Vertex AI, n8n, and LLM-powered systems.',
    'I have engineered large-scale business platforms, including Picklebugs, where I developed customer-facing applications, administrative systems, and industry-specific solutions across hospitality, education, residences, and sports management domains.',
    'I built an End-to-End Event Management, Attendance & Certificate Automation Platform with QRBlaze & CertiFrenzy, enabling participant registration, QR-pass generation, real-time attendance tracking, automated certificate issuance, feedback collection, and certificate authenticity verification.',
    'I also developed UHI Care, an open healthcare platform featuring AI-powered automation, real-time doctor-patient video consultations, secure authentication, payment processing, and intelligent workflow management.',
    'My portfolio includes MediBot, a conversational AI wellness assistant, and a Slack AI Agent Builder that transforms natural language requirements into production-ready automation workflows through intelligent multi-agent systems.',
    'Beyond software development, I lead QuantaLoop Technical Society, mentor hackathon participants, and actively contribute to building technical communities that encourage innovation, collaboration, and hands-on learning.',
    'React. Next.js. Node.js. TypeScript. PostgreSQL. AI. Automation. APIs. System Design.',
    'I focus on transforming ambitious ideas into scalable products, solving complex business challenges through technology, and creating solutions that deliver measurable real-world impact.',
    "I bring ownership, execution, adaptability, and a builder's mindset to every project, combining technical expertise with leadership to turn vision into reality.",
  ],
};

export const projectsData: Project[] = [
  {
    id: 'proj0',
    title: 'Event Management, Attendance & Certificate Automation',
    description: 'A complete event platform for registration, QR-pass generation, automated email delivery, real-time check-ins, attendance tracking, coordinator management, role-based access, feedback, and QR-verified certificates through QRBlaze and CertiFrenzy.',
    imageUrl: '/event.png',
    imageHint: 'event automation platform',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Automation'],
    liveUrl: undefined,
    repoUrl: undefined,
  },
  {
    id: 'proj1',
    title: 'UHIcare - Digital Open Healthcare Ecosystem',
    description: 'Open healthcare platform with WebRTC video consultations, AI-powered scheduling, prescription generation, secure authentication, payment processing, structured data syncing, and automated notifications for 500+ users.',
    imageUrl: '/main.png',
    imageHint: 'healthcare platform',
    tags: ['React', 'Node.js', 'Supabase', 'WebRTC', 'AI Automation'],
    liveUrl: 'https://uhi-main.netlify.app/',
    repoUrl: undefined,
  },
  {
    id: 'proj2',
    title: 'MediBot - AI Wellness Assistant',
    description: 'Conversational AI assistant using the Gemini API to deliver personalized health guidance, Ayurvedic remedies, fitness routines, appointment booking, and medication reminders.',
    imageUrl: '/med.png',
    imageHint: 'health assistant',
    tags: ['React', 'Node.js', 'Gemini API', 'NLP', 'Healthcare'],
    liveUrl: 'https://healthbot-uhi.netlify.app/',
    repoUrl: undefined,
  },
  {
    id: 'proj5',
    title: 'Slack AI Agent Builder',
    description: 'A multi-agent AI workflow generation platform that turns conversational requirements into production-ready n8n automation blueprints with Slack, OpenAI, Groq, contextual memory, validation, and instruction generation.',
    imageUrl: '/slack-bot.png',
    imageHint: 'ai automation builder',
    tags: ['n8n', 'OpenAI', 'Groq', 'Slack', 'AI Agents'],
    liveUrl: undefined,
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
      id: 'exp-founder',
      role: 'Founder',
      company: 'SparkEdge Innovations',
      dateRange: 'Dec 2025 - Present',
      responsibilities: [
        'Established a technology startup delivering custom web, mobile, and AI-powered software solutions for 5+ clients across diverse industries.',
        'Orchestrated end-to-end project execution across 5+ projects using agile methodologies, managing requirements, development, deployment, and client support.',
      ],
    },
    {
      id: 'exp0',
      role: 'Tech Intern & Project Lead',
      company: 'Innowise (Client: Picklebugs - Co-founded by Virender Sehwag)',
      dateRange: 'July 2025 - Present',
      responsibilities: [
        'Engineered the complete Picklebugs platform, architecting customer-facing systems, admin portals, and database infrastructure across 5+ business verticals.',
        'Implemented industry-specific systems for hospitality, residences, education, and sports courts with role-based access control and unit-tested modules.',
        'Designed AI-powered workflows using n8n automation, owning the lifecycle from requirements to production deployment.',
      ],
    },
    {
      id: 'exp-mentor',
      role: 'Hackathon Mentor',
      company: 'Build-A-Thon',
      dateRange: 'September 24, 2025',
      responsibilities: [
        'Guided 100+ competing teams on system architecture, technical execution, and collaborative problem-solving under competitive time constraints.',
      ],
    },
    {
      id: 'exp1',
      role: 'President & Founder',
      company: 'QuantaLoop Technical Society (BVIMR)',
      dateRange: '2025 - Present',
      responsibilities: [
        'Initiated and lead QuantaLoop for 50+ members, establishing technical vision and organizing workshops, coding competitions, and team collaboration sessions.',
        'Founded the student-led tech society to promote innovation, hackathons, and technical growth across BVIMR.',
      ],
    },
    {
      id: 'exp2',
      role: 'Core Member',
      company: 'Nexel - Incubation Cell',
      dateRange: '2025 - Present',
      responsibilities: [
        'Founding member involved in building the cell from scratch.',
        'Leading networking and investor outreach, creating connections with mentors and early-stage investors.',
        'Working on event formats, operational structure, and partnerships to support student-led innovations.',
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      id: 'edu1',
      institution: 'Bharati Vidyapeeth Institute of Management and Research (BVIMR), Delhi',
      degree: 'Bachelor of Computer Application (BCA)',
      dateRange: 'July 2024 - June 2027',
      details: 'Current Average GPA: 8.85/10.0. Focused on programming, web development, system design, AI, and product-focused software projects.',
    },
    {
      id: 'edu2',
      institution: 'DL DAV Model School, Pitampura',
      degree: 'Senior Secondary - Science (Non-Medical)',
      dateRange: 'Completed',
      details: '',
    },
  ] as EducationItem[],
  skills: [
    { id: 'skill1', name: 'JavaScript, TypeScript, Python, SQL, HTML/CSS', category: 'Languages' },
    { id: 'skill2', name: 'React.js, Node.js, Express.js, Next.js', category: 'Frameworks & Libraries' },
    { id: 'skill3', name: 'PostgreSQL, NoSQL, Database Design', category: 'Databases' },
    { id: 'skill4', name: 'Google Cloud, Vertex AI, Gemini API', category: 'Cloud & AI' },
    { id: 'skill5', name: 'n8n, RESTful APIs, Git, Docker, CI/CD', category: 'Tools & Platforms' },
    { id: 'skill6', name: 'Agile, Scrum, SDLC, Unit Testing, Debugging', category: 'Methodologies' },
    { id: 'skill7', name: 'Leadership, Event Management & Team Collaboration', category: 'Leadership' },
    { id: 'skill8', name: 'Investor Communication & Client Delivery', category: 'Communication' },
  ] as SkillItem[],
  achievements: [
    { id: 'ach1', description: 'Mentor - Build-A-Thon 2025: Guided 100+ competing teams on system architecture, technical execution, and collaborative problem-solving.' },
    { id: 'ach2', description: 'Founder & President - QuantaLoop: Founded and currently leading the BVIMR technical society for 50+ members, focused on coding culture, workshops, hackathons, and student-led innovation.' },
    { id: 'ach3', description: 'Founder - SparkEdge Innovations: Built a startup delivering custom web, mobile, and AI-powered software solutions for 5+ clients.' },
    { id: 'ach4', description: 'Top 25 Finalist - Hack2Hustle Hackathon: Ranked among the Top 25 teams out of 200+ participants.' },
    { id: 'ach5', description: 'Top 5 Finalist - Battle of Coders (BOC) DSA Coding Competition.' },
    { id: 'ach6', description: 'Event Lead & Organizer - Nexel: Organized two major technical and entrepreneurial events.' },
  ] as AchievementItem[],
  certifications: [
    'Build Real World AI Applications with Gemini and Imagen',
    'Prompt Design in Vertex AI',
    'Develop GenAI Apps with Gemini and Streamlit',
    'Explore Generative AI with Vertex AI Gemini API',
    'Inspect Rich Documents with Gemini, Multimodality and Multimodal RAG',
  ] as string[],
};

export const contactDataInfo: ContactInfo = {
  email: 'raunaq.adlakha@gmail.com',
  phone: '+91 8826907327',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/raunaq-adlakha/', icon: Linkedin },
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
