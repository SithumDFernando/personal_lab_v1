import { Topic } from '@/types';
import { cn } from '@/lib/utils';

interface TopicTagProps {
  topic: Topic;
  className?: string;
}

const topicColors: Record<Topic, string> = {
  "Web": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "ML": "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "Mobile": "bg-green-500/10 text-green-500 border-green-500/20",
  "Generative AI": "bg-pink-500/10 text-pink-500 border-pink-500/20",
  "IoT": "bg-orange-500/10 text-orange-500 border-orange-500/20",
};

export default function TopicTag({ topic, className }: TopicTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        topicColors[topic],
        className
      )}
    >
      {topic}
    </span>
  );
}