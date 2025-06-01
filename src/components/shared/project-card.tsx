
import type { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-card border-border shadow-xl transition-all duration-300 flex flex-col h-full hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent/30 hover:border-accent">
      <CardHeader className="p-0">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className="rounded-t-lg object-cover aspect-[3/2]"
          data-ai-hint={project.imageHint}
        />
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2 text-primary-foreground">{project.title}</CardTitle>
        <p className="font-body text-muted-foreground text-sm mb-4 h-20 overflow-hidden">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/50 pt-4">
        <div className="flex justify-start gap-2 w-full">
          {project.liveUrl && (
            <Button asChild variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground hover:border-accent">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="ghost" size="sm" className="hover:bg-muted hover:text-foreground">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source Code
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
