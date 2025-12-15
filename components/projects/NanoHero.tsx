'use client';

import { siteConfig } from '@/config/site';

export default function NanoHero() {
  return (
    <section className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold text-center tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm {siteConfig.name} !
      </h1>
      <p className="text-xl text-center text-muted-foreground ">
        {siteConfig.description}
      </p>
    </section>
  );
}