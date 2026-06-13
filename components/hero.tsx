import Link from "next/link";

import { HeroCarousel } from "@/components/hero-carousel";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[rgb(var(--line)/0.1)] bg-hero-radial">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_78%,rgba(255,255,255,0.015))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_14%,rgba(199,165,75,0.1),transparent_24%)]" />
      <div className="relative mx-auto w-[90%] sm:w-[85%] md:w-[80%] max-w-[1800px] py-16 sm:py-20 lg:py-28">
        <div className="w-full">
          <HeroCarousel />
        </div>
        <div className="mt-14 space-y-8 lg:mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Dubai Free Zone Company</p>
          <h1 className="max-w-4xl text-2xl font-semibold leading-[1.12] text-theme-primary sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
            {site.heroTitle}
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-theme-secondary sm:text-base md:text-lg">
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
      </div>
    </section>
  );
}
