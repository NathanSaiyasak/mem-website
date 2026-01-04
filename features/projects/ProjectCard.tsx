"use client";

import Image from "next/image";
import Link from "next/link";
import { Project, calculateGoalStatus } from "@/lib/filters";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "home" | "projects";
}

const variantStyles = {
  home: {
    imageHeight: "h-[240px]",
    padding: "p-6",
  },
  projects: {
    imageHeight: "h-[220px]",
    padding: "p-5",
  },
};

export function ProjectCard({ project, variant = "home" }: ProjectCardProps) {
  const percentage = Math.min(
    (project.raisedAmount / project.goalAmount) * 100,
    100
  );

  const formattedRaised = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(project.raisedAmount);

  const formattedGoal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(project.goalAmount);

  const variantConfig = variantStyles[variant] ?? variantStyles.home;
  const goalStatus = calculateGoalStatus(project.raisedAmount, project.goalAmount);
  const isCloseToGoal = goalStatus === "near_goal";
  const isUrgent = project.tags?.some(tag => tag.toLowerCase() === "urgent") ?? false;

  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[24px] border border-brand-cream/70 bg-[#fdfaf2] text-brand-text-dark shadow-[0_0_80px_-40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-40px_rgba(0,0,0,0.35)]",
        variant === "projects" ? "max-w-[360px] w-full" : ""
      )}
    >
      <div
        className={`relative w-full ${variantConfig.imageHeight} overflow-hidden`}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10" />
        {isUrgent && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brand-brown px-3 py-1 text-xs font-semibold text-white shadow-md">
            <span className="text-base leading-none">⚡</span>
            <span>Urgent</span>
          </div>
        )}
        {isCloseToGoal && !isUrgent && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-brand-brown px-3 py-1 text-xs font-semibold text-white shadow-md">
            <span className="text-base leading-none">🔥</span>
            <span>Close to goal</span>
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col justify-between gap-4 ${variantConfig.padding}`}>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-brand-text-medium line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        <div className="space-y-3">
          <div className="relative h-3 overflow-hidden rounded-full bg-white/60 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-brand-brown"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-sm font-semibold text-brand-text-dark">
            <span>
              {formattedRaised} / {formattedGoal}
            </span>
            <span className="text-brand-text-medium">
              {project.daysLeft === null
                ? "Ongoing"
                : `${project.daysLeft} days left`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
