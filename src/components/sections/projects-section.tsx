import { projectsData } from '@/data/mock';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { ProjectCard } from '@/components/shared/project-card';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed lg:grid-cols-3 to lg:grid-cols-2 */}
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
