"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectGrid } from "@/features/projects/ProjectGrid";
import { projects as mockProjects } from "@/data/projects.data";
import { FadeInSection } from "@/components/animations/FadeInSection";

const HERO_IMAGE = "/images/hero/chan-preaching.jpg";
const MAP_IMAGE = "/images/maps/thailand-laos-map.png";
const GENERAL_SUPPORT_URL = "https://givebutter.com/MEMPO0L";
const PILLARS = [
  {
    title: "Spiritual",
    description: "Discipleship, church planting, and pastoral care.",
    image: "/images/pillars/spiritual.jpg",
  },
  {
    title: "Education",
    description: "Tutoring, scholarships, and leadership training.",
    image: "/images/pillars/education.jpg",
  },
  {
    title: "Vocation",
    description: "Skill-building programs that sustain families.",
    image: "/images/pillars/vocation.jpg",
  },
];

export default function HomePage() {
  const featuredProjects = React.useMemo(() => mockProjects.slice(0, 3), []);
  
  return (
    <div className="bg-[#fafafa]">
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Students in classroom"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <FadeInSection direction="fade-up" delay={200}>
          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-5 px-8 lg:px-20 pb-20 pt-24">
            <span className="text-s font-semibold uppercase tracking-[0.2em] text-[#f2dbaa]">
              Mekong Evangelical Mission
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] md:text-[54px]">
              You are the light of the world. A town built on a hill cannot be hidden.
            </h1>
          </div>
        </FadeInSection>
      </section>

      <FadeInSection direction="fade-up">
        <section className="mx-auto grid max-w-5xl gap-10 px-8 lg:px-10 py-16 md:grid-cols-[1.6fr,1fr] md:items-center">
        <h2 className="text-3xl font-semibold leading-[1.3] text-brand-text-dark md:text-[34px]">
          Loving like Jesus means meeting people right where they are.
        </h2>
        <div className="flex flex-col gap-4">
          <button className="flex w-full items-center justify-between rounded-2xl bg-brand-brown-light px-6 py-4 text-white shadow-lg transition hover:bg-brand-brown-light/90">
            <div className="flex items-center gap-3 text-left">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25">
                <Play className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-widest">What is MEM</p>
                <p className="text-base font-medium">Hear from our teams</p>
              </div>
            </div>
            <div className="relative h-12 w-12">
            <Image
              src="/icons/mem-logo.svg"
              alt="Mekong Evangelical Mission icon"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          </button>
          <Button
            asChild
            variant="outline"
            className="flex items-center justify-between rounded-2xl border-2 border-brand-brown px-6 py-6 text-brand-brown transition hover:bg-[#6f6652]">
            <Link href="/mission">
              <span className="text-base font-semibold tracking-wide">
                Who We Are
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        </section>
      </FadeInSection>

      <FadeInSection direction="fade-up">
        <section className="mx-auto grid max-w-6xl gap-6 px-8 lg:px-20 pb-16 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <article
            key={pillar.title}
            className="group relative h-[320px] overflow-hidden rounded-[24px] shadow-sm"
          >
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 space-y-2 px-6 pb-6 text-white">
              <h3 className="text-2xl font-bold">{pillar.title}</h3>
            </div>
          </article>
        ))}
        </section>
      </FadeInSection>

      <FadeInSection direction="fade-up">
        <section className="bg-brand-primary text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-8 lg:px-20 py-16 md:flex-row md:items-start">
          <div className="space-y-4 md:w-1/2">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              What We Do
            </p>
            <p className="text-2xl font-semibold leading-tight">
              We share the gospel and meet real needs in Thailand and Laos
              through the love of Christ.
            </p>
            <Button
              asChild
              variant="outline"
              className="w-fit rounded-2xl border-white/60 bg-transparent px-6 py-5 text-white hover:bg-white/10"
            >
              <Link href="/mission">
                Learn More
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="text-lg leading-7 text-white/90 md:w-1/2">
            We bring the gospel to rural communities by walking with people in
            every season of life. Beyond church services, we respond to practical
            needs through food relief, tutoring, scholarships, and livelihood
            initiatives that allow families to flourish with dignity.
          </p>
        </div>
        </section>
      </FadeInSection>

      <section className="bg-brand-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-8 lg:px-20 py-16 md:grid-cols-[auto,1fr] md:items-start">
          <FadeInSection direction="fade-left">
            <div className="relative mx-auto h-[420px] w-[288px] overflow-hidden rounded-full">
              <Image
                src={MAP_IMAGE}
                alt="Map of Thailand and Laos"
                fill
                sizes="320px"
                className="object-contain p-4"
              />
            </div>
          </FadeInSection>
          <FadeInSection direction="fade-left">
            <div className="space-y-4 text-brand-text-dark">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-text-medium">
                Where we work
              </p>
              <p className="text-3xl font-semibold leading-9">
                We serve in rural areas of{" "}
                <span className="font-bold">Thailand</span> and communities across{" "}
                <span className="font-bold">Laos</span> where the gospel is less
                known and opportunities are limited.
              </p>
              <div className="space-y-3 text-base leading-6 text-brand-text-medium">
                <p>
                  In <strong>Thailand</strong>, we plant churches and make
                  disciples, while also providing access to education, mentoring,
                  and job creation so that families can build stable, dignified
                  lives.
                </p>
                <p>
                  In <strong>Laos</strong>, we partner closely with local leaders
                  to support spiritual growth, community development, and
                  initiatives that strengthen local capacity for the long term.
                </p>
                <p>
                  Wherever we go, our posture is the same: to serve with humility,
                  faithfulness, and respect for local cultures as we bear witness
                  to Christ&apos;s love.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <FadeInSection direction="fade-up">
        <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-8 lg:px-20 py-16">
          <div className="flex flex-col gap-6 text-brand-text-dark md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 md:max-w-2xl">
              <h2 className="text-4xl font-semibold">Support Our Works</h2>
              <p className="text-base text-brand-text-medium">
              These projects reflect how we are serving communities across Thailand today.
              Your support helps sustain and strengthen the work already in motion.
              </p>
            </div>
            <Button
            asChild
            variant="outline"
            className="w-full rounded-2xl border-brand-brown px-6 py-5 text-brand-brown hover:bg-brand-brown hover:text-white md:w-auto"
            >
              <Link href="/projects">
                View More
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ProjectGrid projects={featuredProjects} variant="home" />
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
      </FadeInSection>
    </div>
  );
}
