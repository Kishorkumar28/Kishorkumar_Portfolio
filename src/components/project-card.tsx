import type { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { ProjectData } from '@/lib/constants';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectData;
  onViewDetails: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={project.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </CardDescription>
        <div className="mb-4">
          <h4 className="text-xs font-medium text-muted-foreground mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t mt-auto">
        <div className="flex justify-between items-center w-full">
          <Button onClick={onViewDetails} variant="link" className="p-0 h-auto text-primary hover:text-accent">
            View Details <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <div className="flex space-x-2">
            {project.repoLink && (
              <Button variant="ghost" size="icon" asChild>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
            {project.liveLink && (
              <Button variant="ghost" size="icon" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
