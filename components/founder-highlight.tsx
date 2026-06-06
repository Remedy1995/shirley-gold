import Link from "next/link";

import { leadership } from "@/content/site";

export function FounderHighlight() {
  return (
    <div className="theme-panel shine-surface grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.7fr_1.3fr]">
      <div className="theme-panel-strong rounded-[1.75rem] p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Leadership Profile</p>
        <div className="profile-orb mt-6 flex h-32 w-32 items-center justify-center rounded-full text-4xl font-semibold text-theme-primary">
          SD
        </div>
        <h3 className="mt-6 text-3xl font-semibold text-theme-primary">{leadership.name}</h3>
        <p className="mt-2 text-sm leading-7 text-theme-secondary">{leadership.role}</p>
      </div>
      <div>
        <p className="max-w-3xl text-lg leading-8 text-theme-primary">{leadership.intro}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {leadership.focusAreas.map((item) => (
            <div key={item} className="theme-panel-soft rounded-2xl px-4 py-3 text-sm text-theme-secondary">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/leadership" className="text-sm font-medium text-gold transition hover:text-amber">
            Read leadership profile
          </Link>
        </div>
      </div>
    </div>
  );
}
