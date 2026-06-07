import Link from "next/link";

import { ArrowUpRightIcon, CarIcon, DeviceIcon, GemIcon, IconBadge } from "@/components/icons";
import { divisions } from "@/content/site";

const divisionIcons = {
  "precious-metals": GemIcon,
  automotive: CarIcon,
  electronics: DeviceIcon
} as const;

export function DivisionGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {divisions.map((division) => {
        const Icon = divisionIcons[division.slug];

        return (
          <article
            key={division.slug}
            className="theme-panel shine-surface group rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-gold/35"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gold">{division.eyebrow}</p>
                <h3 className="mt-4 text-xl font-semibold text-theme-primary">{division.name}</h3>
              </div>
                <IconBadge className="h-16 w-16 rounded-[1.25rem]">
                  <Icon />
                </IconBadge>
            </div>
            <p className="mt-4 text-base leading-8 text-theme-secondary">{division.summary}</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-theme-secondary">
              {division.bullets.slice(0, 3).map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href={`/divisions/${division.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-gold transition group-hover:text-amber"
              >
                View division details
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
