'use client';

import { siteConfig } from '@/config/site';

export default function ComingSoonView() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Building something new.
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Stay tuned.
        </p>
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse [animation-delay:0.2s]" />
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
}