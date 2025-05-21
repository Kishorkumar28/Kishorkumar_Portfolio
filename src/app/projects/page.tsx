
"use client";

import type { NextPage } from 'next';
import { useState } from 'react';
import ProjectCard from '@/components/project-card';
import ProjectDetailDialog from '@/components/project-detail-dialog';
import { projects } from '@/lib/constants';
import type { ProjectData } from '@/lib/constants';

const ProjectsPage: NextPage = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetails = (project: ProjectData) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    // Delay clearing selectedProject to allow dialog to animate out
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4 flex flex-col">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my full-stack development work, showcasing my skills in creating robust and engaging applications.
          </p>
        </header>
      </div>

      {projects.length > 0 ? (
        <div className="flex-grow flex items-center py-8"> {/* Added py-8 for vertical spacing */}
          <div className="container mx-auto px-0 md:px-4"> {/* Adjusted padding for container */}
            <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-secondary"> {/* Horizontal scroll container */}
              {projects.map((project) => (
                <div key={project.id} className="flex-shrink-0 w-[calc(100vw-4rem)] sm:w-96 md:w-[28rem]"> {/* Card wrapper for consistent width */}
                  <ProjectCard
                    project={project}
                    onViewDetails={() => handleViewDetails(project)}
                  />
                </div>
              ))}
              {/* Optional: Add a spacer at the end if needed for visual balance */}
              <div className="flex-shrink-0 w-1 md:w-4"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 flex-grow flex items-center justify-center">
          <p className="text-xl text-muted-foreground">No projects to display yet. Check back soon!</p>
        </div>
      )}

      <ProjectDetailDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default ProjectsPage;
