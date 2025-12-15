import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-sm text-muted-foreground">
          {projects.length} {projects.length === 1 ? 'project' : 'projects'}
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}