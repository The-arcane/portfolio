import type { Project, ExperienceItem, EducationItem, SkillItem, UserProfile, ContactInfo, NavItem } from '@/types';
import { Linkedin, Github, Mail, Phone, Briefcase, GraduationCap, Lightbulb, ExternalLink, Code } from 'lucide-react';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const userProfileData: UserProfile = {
  name: "Alex Johnson",
  title: "Full-Stack Developer | UI/UX Enthusiast | Tech Innovator",
  bio: [
    "A highly motivated and creative Full-Stack Developer with 5+ years of experience in designing, developing, and deploying web applications. Passionate about clean code, intuitive user experiences, and leveraging technology to solve real-world problems.",
    "I thrive in dynamic environments, continuously learning and adapting to new challenges. My expertise spans across various technologies including React, Node.js, Python, and cloud platforms. Looking to contribute to innovative projects that make an impact."
  ],
};

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform "ShopSphere"',
    description: 'A full-featured e-commerce platform with admin dashboard, user authentication, product management, and Stripe integration for payments. Built with Next.js, Tailwind CSS, and Prisma.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online shopping',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '2',
    title: 'Task Management App "TaskMaster"',
    description: 'A collaborative task management application allowing users to create projects, assign tasks, and track progress. Features real-time updates using WebSocket.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'productivity tool',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSocket'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    description: 'This very portfolio website, designed to showcase my skills and projects. Built with Next.js and ShadCN UI components, focusing on a clean and modern aesthetic.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web design',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI'],
    repoUrl: '#',
  },
];

export const resumeData = {
  experience: [
    {
      id: 'exp1',
      role: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      dateRange: 'Jan 2021 - Present',
      responsibilities: [
        'Led development of key features for a SaaS product, improving performance by 20%.',
        'Mentored junior developers and conducted code reviews.',
        'Collaborated with product managers to define project requirements.',
      ],
    },
    {
      id: 'exp2',
      role: 'Software Developer',
      company: 'Innovatech Ltd.',
      dateRange: 'Jun 2018 - Dec 2020',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js.',
        'Participated in agile development cycles, including sprint planning and retrospectives.',
        'Contributed to the design and implementation of RESTful APIs.',
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      id: 'edu1',
      institution: 'University of Technology',
      degree: 'M.S. in Computer Science',
      dateRange: '2016 - 2018',
      details: 'Specialized in Software Engineering and AI.',
    },
    {
      id: 'edu2',
      institution: 'State College',
      degree: 'B.S. in Information Technology',
      dateRange: '2012 - 2016',
      details: 'Graduated with Honors.',
    },
  ] as EducationItem[],
  skills: [
    { id: 'skill1', name: 'JavaScript (ES6+)', category: 'Programming Languages' },
    { id: 'skill2', name: 'TypeScript', category: 'Programming Languages' },
    { id: 'skill3', name: 'Python', category: 'Programming Languages' },
    { id: 'skill4', name: 'React / Next.js', category: 'Frameworks/Libraries' },
    { id: 'skill5', name: 'Node.js / Express', category: 'Frameworks/Libraries' },
    { id: 'skill6', name: 'SQL / NoSQL (MongoDB, PostgreSQL)', category: 'Databases' },
    { id: 'skill7', name: 'Docker / Kubernetes', category: 'DevOps' },
    { id: 'skill8', name: 'AWS / GCP', category: 'Cloud' },
    { id: 'skill9', name: 'Git / GitHub', category: 'Tools' },
    { id: 'skill10', name: 'Agile Methodologies', category: 'Practices' },
  ] as SkillItem[],
};

export const contactDataInfo: ContactInfo = {
  email: 'alex.johnson@example.com',
  phone: '+1 (555) 000-1111',
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/example', icon: Linkedin },
    { name: 'GitHub', url: 'https://www.github.com/example', icon: Github },
    { name: 'Email', url: 'mailto:alex.johnson@example.com', icon: Mail },
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
};
