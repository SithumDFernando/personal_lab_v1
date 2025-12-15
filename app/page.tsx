import { siteConfig } from '@/config/site';
import ComingSoonView from '@/components/views/ComingSoonView';
import ProjectsView from '@/components/views/ProjectsView';

export default function Home() {
  // Conditional rendering based on siteConfig.state
  if (siteConfig.state === 'coming-soon') {
    return <ComingSoonView />;
  }

  return <ProjectsView />;
}