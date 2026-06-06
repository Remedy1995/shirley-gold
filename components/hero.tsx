import Link from "next/link";

import { HeroVisual } from "@/components/hero-visual";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[rgb(var(--line)/0.1)] bg-hero-radial">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_18%,transparent_72%,rgba(255,255,255,0.02))]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-32">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Dubai Free Zone Company</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] text-theme-primary sm:text-5xl md:text-6xl xl:text-7xl">
            {site.heroTitle}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-theme-secondary sm:text-lg md:text-xl">
            {site.heroText}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="button-primary-theme rounded-full px-6 py-3 text-sm font-semibold transition hover:brightness-105"
            >
              Start a partnership conversation
            </Link>
            <Link
              href="/divisions"
              className="button-secondary-theme rounded-full px-6 py-3 text-sm font-semibold transition hover:border-gold/50 hover:text-gold"
            >
              Explore our divisions
            </Link>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
