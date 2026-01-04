"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { ProjectGrid } from "@/features/projects/ProjectGrid";
import { projects as mockProjects } from "@/data/projects.data";
import {
  ProjectFilters,
  GoalStatus,
  filterProjects,
} from "@/lib/filters";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { FadeInSection } from "@/components/animations/FadeInSection";

const GENERAL_SUPPORT_URL = "https://givebutter.com/MEMPO0L";

export default function ProjectsPage() {
  const [filters, setFilters] = React.useState<ProjectFilters>({
    categories: [],
    collections: [],
    goalStatus: "all",
  });
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState<
    "categories" | "collections" | "goal" | null
  >(null);

  const availableCategories = [
    "Spiritual",
    "Education",
    "Vocation",
  ];
  const availableCollections = [
    "Education Support",
    "Children & Youth Development",
    "Community Care",
    "Vocational & Livelihood",
    "Emergency & Relief",
    "Faith & Mission",
  ];
  const goalOptions: { value: GoalStatus; label: string }[] = [
    { value: "near_goal", label: "Close to Goal" },
    { value: "midway", label: "Urgently Need" },
    { value: "just_started", label: "Just Started" },
  ];

  const filteredProjects = React.useMemo(() => {
    const base = filterProjects(mockProjects, filters);
    if (!searchQuery.trim()) return base;

    const normalized = searchQuery.toLowerCase();
    return base.filter(
      (project) =>
        project.title.toLowerCase().includes(normalized) ||
        project.shortDescription.toLowerCase().includes(normalized) ||
        project.location.toLowerCase().includes(normalized)
    );
  }, [filters, searchQuery]);

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-8 lg:px-20 py-16">
        <FadeInSection direction="fade-up" delay={200}>
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center text-brand-text-dark">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-brown-light">
            Support Our Works
          </p>
          <h1 className="text-4xl font-semibold">Our Projects</h1>
          <p className="text-base text-brand-text-medium">
            These are the stories unfolding across Thailand and Laos. Search by
            name, filter by focus area, and find the opportunity you feel called
            to champion.
          </p>
        </div>
        </FadeInSection>

        <div className="mt-10 flex flex-col gap-4">
          <label
            htmlFor="project-search"
            className="text-sm font-semibold tracking-wide text-brand-text-dark"
          >
            Search projects
          </label>
          <div className="flex items-center gap-4 rounded-2xl border border-brand-cream bg-[#f8f8f8] px-4 py-3 text-brand-text-dark">
            <Search className="h-5 w-5 text-brand-text-medium" />
            <input
              id="project-search"
              type="search"
              placeholder="Search by project, location, or focus"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full bg-transparent text-base outline-none placeholder:text-brand-text-medium"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              {(["categories", "collections", "goal"] as const).map((type) => (
                <Button
                  key={type}
                  type="button"
                  variant="outline"
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-xl border-none bg-[#f3f3f3] px-5 py-3 text-sm font-semibold text-brand-text-dark shadow-none hover:bg-[#e8e8e8] hover:text-brand-brown",
                    (type === "categories" && filters.categories.length > 0) ||
                      (type === "collections" &&
                        filters.collections.length > 0) ||
                      (type === "goal" && filters.goalStatus !== "all")
                      ? "bg-brand-brown text-white hover:bg-brand-brown"
                      : ""
                  )}
                  onClick={() => setActiveFilter(type)}
                >
                  <span>
                    {type === "categories"
                      ? "Categories"
                      : type === "collections"
                      ? "Collection"
                      : "Goal"}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              ))}
            </div>
            <p className="text-sm text-brand-text-medium">
              Showing{" "}
              <span className="font-semibold text-brand-text-dark">
                {filteredProjects.length}
              </span>{" "}
              of {mockProjects.length} projects
            </p>
          </div>

          <ProjectGrid projects={filteredProjects} variant="projects" />
          <div className="rounded-3xl border border-brand-cream bg-brand-cream p-8 shadow-sm border border-brand-brown/50">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3 text-brand-text-dark md:max-w-xl">
                <h3 className="text-2xl font-semibold leading-tight">
                  Prefer to support the mission as a whole?
                </h3>
                <p className="text-base text-brand-text-medium">
                This gift goes into a shared fund and is directed to the areas of greatest need — whether that's church planting, education, family care, or training. It allows us to respond quickly and steward resources where they matter most.
                </p>
              </div>
              <Button
                asChild
                className="w-full rounded-2xl bg-brand-brown px-7 py-5 text-base font-semibold text-white transition hover:bg-brand-brown/90 md:w-auto"
              >
                <Link href={GENERAL_SUPPORT_URL} target="_blank" rel="noopener noreferrer">
                  Donate to MEM
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog
        open={activeFilter !== null}
        onOpenChange={(open) => {
          if (!open) setActiveFilter(null);
        }}
      >
        <DialogContent className="rounded-[32px] data-[state=closed]:!zoom-out-100 data-[state=open]:!zoom-in-100 data-[state=closed]:!duration-100">
          {activeFilter && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-brand-text-dark">
                  {activeFilter === "categories"
                    ? "Categories"
                    : activeFilter === "collections"
                    ? "Collections"
                    : "Goal"}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {activeFilter === "categories" &&
                  availableCategories.map((category) => (
                    <label
                      key={category}
                      className="flex items-start gap-1 rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-brand-text-dark"
                    >
                      <Checkbox
                        className="rounded mt-0.5"
                        checked={filters.categories.includes(category)}
                        onCheckedChange={() =>
                          setFilters((prev) => {
                            const categories = prev.categories.includes(
                              category
                            )
                              ? prev.categories.filter((c) => c !== category)
                              : [...prev.categories, category];
                            return { ...prev, categories };
                          })
                        }
                      />
                      <span className="flex-1">{category}</span>
                    </label>
                  ))}
                {activeFilter === "collections" &&
                  availableCollections.map((collection) => (
                    <label
                      key={collection}
                      className="flex items-start gap-1 rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-brand-text-dark"
                    >
                      <Checkbox
                        className="rounded mt-0.5"
                        checked={filters.collections.includes(collection)}
                        onCheckedChange={() =>
                          setFilters((prev) => {
                            const collections = prev.collections.includes(
                              collection
                            )
                              ? prev.collections.filter((c) => c !== collection)
                              : [...prev.collections, collection];
                            return { ...prev, collections };
                          })
                        }
                      />
                      <span className="flex-1">{collection}</span>
                    </label>
                  ))}
                {activeFilter === "goal" &&
                  goalOptions.map((goal) => (
                    <label
                      key={goal.value}
                      className="flex items-center gap-1 rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-brand-text-dark"
                    >
                      <Checkbox
                        checked={filters.goalStatus === goal.value}
                        onCheckedChange={() =>
                          setFilters((prev) => ({
                            ...prev,
                            goalStatus:
                              prev.goalStatus === goal.value
                                ? "all"
                                : goal.value,
                          }))
                        }
                      />
                      {goal.label}
                    </label>
                  ))}
              </div>

              <div className="mt-8 flex items-center justify-between text-sm font-semibold text-brand-brown">
                <button
                  type="button"
                  onClick={() => {
                    setFilters((prev) => {
                      if (activeFilter === "categories") {
                        return { ...prev, categories: [] };
                      }
                      if (activeFilter === "collections") {
                        return { ...prev, collections: [] };
                      }
                      return { ...prev, goalStatus: "all" };
                    });
                  }}
                >
                  Reset
                </button>
                <Button
                  type="button"
                  className="rounded-full bg-brand-brown px-6 text-white hover:bg-brand-brown/90"
                  onClick={() => setActiveFilter(null)}
                >
                  Continue
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
