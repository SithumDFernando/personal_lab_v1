import NanoHero from '@/components/projects/NanoHero';
import ProjectList from '@/components/projects/ProjectList';

export default function ProjectsView() {
  return (
    <div className="container max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
      <NanoHero />
      <ProjectList />
    </div>
  );
}