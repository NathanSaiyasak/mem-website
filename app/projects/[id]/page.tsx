"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects.data";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeInSection } from "@/components/animations/FadeInSection";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const project = React.useMemo(() => {
    return projects.find((p) => p.id === params.id);
  }, [params.id]);
  
  if (!project) {
    return (
      <div className="bg-[#fefbf5] min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold text-brand-text-dark">Project not found</h1>
          <p className="text-brand-text-medium">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push("/projects")}
            className="mt-4 rounded-full bg-brand-brown px-6 py-3 text-white hover:bg-brand-brown/90 transition"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const details = {
    about: project.about ?? project.shortDescription,
    overview:
      project.overview ??
      "This project is part of our broader mission to bring hope to communities across Thailand and Laos. Through education, discipleship, and practical support, we stand alongside families so that every child has the opportunity to thrive.",
    whyMatters:
      project.whyMatters ??
      "When communities flourish, the gospel has room to take root. By supporting this project, you help create stable environments where families can encounter the love of Christ and step into a brighter future.",
    impact:
      project.impact ?? [
        "Provide practical resources to families",
        "Invest in next-generation leaders",
        "Remove barriers that keep children from school",
      ],
    tags: project.tags ?? [project.category, project.collection],
  };

  const [activeTab, setActiveTab] =
    React.useState<"detail" | "update">("detail");
  const percentage = Math.min(
    (project.raisedAmount / project.goalAmount) * 100,
    100
  );

  const formattedRaised = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(project.raisedAmount);

  const formattedGoal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(project.goalAmount);

  return (
    <div className="bg-[#fefbf5]">
      <section className="mx-auto max-w-6xl px-6 py-8 space-y-10">
        <div className="mb-2">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-brand-text-medium hover:text-brand-text-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
        <FadeInSection direction="fade-up" delay={200}>
          <div className="space-y-6 text-brand-text-dark">
            <h1 className="text-4xl font-bold leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {(details.tags ?? [])
                .filter(Boolean)
                .map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f3eadc] px-4 py-1 text-xs font-semibold text-brand-brown"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection direction="fade-up">
          <div className="grid gap-10 md:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <div className="relative h-[360px] w-full">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 60vw"
                />
              </div>
              <div className="px-6 py-5">
                <Progress
                  value={percentage}
                  className="h-[12px] rounded-full bg-[#e4ded0]"
                />
                <div className="mt-3 flex items-center justify-between text-sm font-semibold text-brand-text-dark">
                  <span>{formattedRaised}</span>
                  <span className="flex items-center gap-1 text-brand-text-medium">
                    Goal {formattedGoal}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.1em] text-brand-text-medium">
                About the Project
              </p>
              <p className="mt-4 text-base leading-7 text-brand-text-medium">
                {details.about}
              </p>
            </div>
            <div>
              <Button
                asChild
                className="w-full rounded-full bg-brand-brown px-6 py-2 text-sm font-semibold text-white hover:bg-brand-brown/90"
              >
                <Link href={project.donateUrl} target="_blank" rel="noopener noreferrer">Support this project</Link>
              </Button>
            </div>
          </div>
        </div>
        </FadeInSection>

        <FadeInSection direction="fade-up">
          <div className="rounded-[28px] bg-white p-6 text-brand-text-medium shadow-sm">
              <div className="flex flex-wrap gap-3 border-b border-brand-cream pb-4 text-sm font-semibold text-brand-text-dark">
                <button
                  onClick={() => setActiveTab("detail")}
                  className={cn(
                    "rounded-full px-5 py-2 transition",
                    activeTab === "detail"
                      ? "bg-brand-cream text-brand-text-dark"
                      : "text-brand-text-medium hover:text-brand-text-dark"
                  )}
                >
                  Progress Detail
                </button>
                <button
                  onClick={() => setActiveTab("update")}
                  className={cn(
                    "rounded-full px-5 py-2 transition",
                    activeTab === "update"
                      ? "bg-brand-cream text-brand-text-dark"
                      : "text-brand-text-medium hover:text-brand-text-dark"
                  )}
                >
                  Progress Update
                </button>
              </div>
              <div className="space-y-6 pt-6">
                {activeTab === "detail" ? (
                  <>
                    <ProjectDetailBlock title="Project Overview" body={details.overview} />
                    <ProjectDetailBlock title="Why This Matters" body={details.whyMatters} />
                    <div className="rounded-2xl bg-[#fbf7f0] p-5">
                      <h3 className="text-lg font-semibold text-brand-text-dark">
                        Impact
                      </h3>
                      <p className="mt-2 text-sm">
                        Your support helps:
                      </p>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                        {details.impact.map((point: string) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      {project.impactNote && (
                        <p className="mt-3 text-sm text-brand-text-medium">
                          {project.impactNote}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    {project.progressUpdates && project.progressUpdates.length > 0 ? (
                      project.progressUpdates.map((update, index) => {
                        // Replace placeholders with actual values
                        let content = update.content;
                        content = content.replace(/{raisedAmount}/g, formattedRaised);
                        content = content.replace(/{goalAmount}/g, formattedGoal);
                        content = content.replace(
                          /{daysLeft}/g,
                          project.daysLeft !== null ? project.daysLeft.toString() : ""
                        );
                        content = content.replace(
                          /{daysRemaining}/g,
                          project.daysLeft !== null
                            ? `With ${project.daysLeft} days remaining, we're`
                            : "We're"
                        );

                        return (
                          <ProgressUpdateEntry
                            key={index}
                            date={update.date}
                            content={content}
                          />
                        );
                      })
                    ) : (
                      <div className="rounded-2xl bg-[#fbf7f0] p-5 text-sm text-brand-text-medium">
                        No progress updates available yet.
                      </div>
                    )}
                  </div>
                )}
              </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}

function ProjectDetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-[#fbf7f0] p-5">
      <h3 className="text-lg font-semibold text-brand-text-dark">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-brand-text-medium">{body}</p>
    </div>
  );
}

function ProgressUpdateEntry({ date, content }: { date: string; content: string }) {
  return (
    <div className="rounded-2xl bg-[#fbf7f0] p-5 space-y-2">
      <div className="flex items-center gap-2 text-sm font-semibold text-brand-text-dark">
        <span className="text-brand-text-medium">📅</span>
        <span>{date}</span>
      </div>
      <p className="text-sm leading-6 text-brand-text-medium">{content}</p>
    </div>
  );
}
