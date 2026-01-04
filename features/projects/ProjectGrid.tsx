"use client";

import { ProjectCard } from "./ProjectCard";
import { Project } from "@/lib/filters";

interface ProjectGridProps {
  projects: Project[];
  variant?: "home" | "projects";
}

export function ProjectGrid({ projects, variant = "home" }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-lg font-medium text-muted-foreground">
          No projects found
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Try adjusting your filters to see more results.
        </p>
      </div>
    );
  }

  const gridClasses =
    variant === "home"
      ? "grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(310px,1fr))]"
      : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center";

  return (
    <div className={gridClasses}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} variant={variant} />
      ))}
    </div>
  );
}
