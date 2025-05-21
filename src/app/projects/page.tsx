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
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my full-stack development work, showcasing my skills in creating robust and engaging applications.
          </p>
        </header>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={() => handleViewDetails(project)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No projects to display yet. Check back soon!</p>
          </div>
        )}
      </div>

      <ProjectDetailDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default ProjectsPage;
