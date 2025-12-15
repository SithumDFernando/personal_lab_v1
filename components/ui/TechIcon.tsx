import { Code2 } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "h-5 w-5" }: TechIconProps) {
  // For now, we'll use a generic code icon
  // In a production app, you'd integrate with react-icons or custom SVGs
  // based on the techIconMap from src/data/tech-icons.ts
  
  return (
    <div className="flex items-center gap-2">
      <Code2 className={className} />
      <span className="text-sm font-mono">{name}</span>
    </div>
  );
}

// Alternative implementation with custom SVG mapping:
/*
import { techIconMap } from '@/data/tech-icons';

export default function TechIcon({ name, className = "h-5 w-5" }: TechIconProps) {
  const iconKey = techIconMap[name];
  
  // You would map iconKey to actual icon components here
  // For example, using react-icons or custom SVGs
  
  return (
    <div className="flex items-center gap-2">
      <Code2 className={className} />
      <span className="text-sm font-mono">{name}</span>
    </div>
  );
}
*/