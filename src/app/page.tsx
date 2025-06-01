
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
