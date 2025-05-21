import type { FC } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { ProjectData } from '@/lib/constants';
import { ExternalLink, Github, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ProjectDetailDialogProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailDialog: FC<ProjectDetailDialogProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl p-0 max-h-[90vh] flex flex-col">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">{project.description}</DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-grow overflow-y-auto">
          <div className="px-6 py-4">
            <div className="aspect-video relative w-full overflow-hidden rounded-lg mb-6 shadow-md">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.dataAiHint}
              />
            </div>

            <h3 className="text-lg font-semibold mb-2 text-primary">Case Study</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-wrap">
              {project.longDescription}
            </p>

            <h3 className="text-lg font-semibold mb-3 text-primary">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollArea>
        
        <DialogFooter className="p-6 pt-4 border-t bg-secondary/50 rounded-b-lg">
          <div className="flex flex-wrap gap-2 w-full justify-end">
            {project.liveLink && (
              <Button asChild variant="outline">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
            {project.repoLink && (
              <Button asChild variant="outline">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </a>
              </Button>
            )}
            <Button onClick={onClose} variant="default">
                <X className="mr-2 h-4 w-4" /> Close
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;
