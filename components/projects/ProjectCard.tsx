'use client';

import Image from 'next/image';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Project } from '@/types';
import TopicTag from '@/components/ui/TopicTag';
import TechIcon from '@/components/ui/TechIcon';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-card backdrop-blur-sm transition-all duration-500 hover:border-cyan/50 hover:shadow-glow animate-fade-in">
      <div className="grid gap-0 lg:grid-cols-2">
        {/* Content Section */}
        <div className="flex flex-col justify-between p-8 lg:p-10">
          {/* Topic Tags */}
          <div>
            <div className="mb-5 flex flex-wrap gap-2.5">
              {project.topics.map((topic) => (
                <TopicTag key={topic} topic={topic} />
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl transition-colors group-hover:text-cyan">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
              {project.description}
            </p>
          </div>

          {/* Tech Stack - Fixed to bottom */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {project.techStack.map((tech) => (
                <TechIcon key={tech} name={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[350px] bg-gradient-to-br from-teal-dark to-teal overflow-hidden">
          <Image
            src={project.imagePath}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/80 via-teal-dark/40 to-transparent transition-opacity duration-500 group-hover:opacity-70" />

          {/* Play/View Indicator */}
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="rounded-full bg-cyan/20 backdrop-blur-md p-6 border border-cyan/30 shadow-glow-lg transition-all duration-500 group-hover:scale-110">
              <Play className="h-8 w-8 text-cyan fill-cyan" />
            </div>
          </div> */}

          {/* Overlay Buttons */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background/80 backdrop-blur-md text-foreground border-2 border-cyan/50 transition-all duration-300 hover:bg-cyan/10 hover:border-cyan hover:text-cyan hover:scale-110 hover:shadow-glow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                aria-label="View GitHub repository"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan backdrop-blur-md text-background border-2 border-cyan transition-all duration-300 hover:bg-cyan-light hover:border-cyan-light hover:scale-110 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                aria-label="View live demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}