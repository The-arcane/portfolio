import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  dateRange: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  dateRange: string;
  details?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
}

export interface UserProfile {
  name: string;
  title: string;
  bio: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  socials: SocialLink[];
}
