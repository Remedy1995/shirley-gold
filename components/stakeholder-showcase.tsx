import Link from "next/link";

import { stakeholders } from "@/content/site";

export function StakeholderShowcase() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {stakeholders.map((stakeholder) => (
        <article
          key={stakeholder.name}
          className="theme-panel shine-surface grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.42fr_0.58fr]"
        >
          <div className="theme-panel-strong flex min-h-64 flex-col justify-between rounded-[1.75rem] p-6">
            <div className="flex items-center justify-between">
              <span className="theme-chip">Leadership profile</span>
              <span className="text-xs uppercase tracking-[0.18em] text-theme-tertiary">
                {stakeholder.verifiedSource}
              </span>
            </div>
            <div className="profile-orb mt-8 flex h-28 w-28 items-center justify-center rounded-full text-4xl font-semibold text-theme-primary sm:h-40 sm:w-40 sm:text-5xl">
              {stakeholder.initials}
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-theme-primary">{stakeholder.name}</h3>
              <p className="mt-2 text-sm leading-7 text-theme-secondary">{stakeholder.role}</p>
            </div>
          </div>
          <div>
            <p className="text-lg leading-8 text-theme-primary">{stakeholder.intro}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {stakeholder.areas.map((item) => (
                <div key={item} className="theme-panel-soft rounded-2xl px-4 py-3 text-sm text-theme-secondary">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
      <article className="theme-panel shine-surface flex flex-col justify-between p-5 sm:p-7">
        <div>
          <span className="theme-chip">Stakeholder profile slots</span>
          <h3 className="mt-5 text-3xl font-semibold text-theme-primary">
            Additional stakeholder bios and approved portraits can be added here.
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-theme-secondary">
            The leadership section is structured to accommodate additional board, management, or stakeholder profiles as approved corporate biographies and portraits become available.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/leadership" className="text-sm font-medium text-gold transition hover:text-amber">
            Review the leadership page
          </Link>
        </div>
      </article>
    </div>
  );
}
