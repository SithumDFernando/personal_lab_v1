'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';
import TopicTag from '@/components/ui/TopicTag';
import TechIcon from '@/components/ui/TechIcon';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="grid gap-0 lg:grid-cols-2">
        {/* Content Section */}
        <div className="flex flex-col justify-between p-6 lg:p-8">
          {/* Topic Tags */}
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <TopicTag key={topic} topic={topic} />
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="mb-3 text-2xl font-bold tracking-tight lg:text-3xl">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack - Fixed to bottom */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {project.techStack.map((tech) => (
                <TechIcon key={tech} name={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[300px] bg-muted">
          <Image
            src={project.imagePath}
            alt={project.title}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Overlay Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-md bg-background/90 px-3 text-sm font-medium backdrop-blur transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="View GitHub repository"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="View live demo"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}