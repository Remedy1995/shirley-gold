import { GlobeIcon, IconBadge, MapPinIcon } from "@/components/icons";
import { site } from "@/content/site";

export function GeographyGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {site.geography.map((item) => (
        <article
          key={item.name}
          className="theme-panel shine-surface rounded-[1.75rem] p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex rounded-full border border-[rgb(var(--line)/0.1)] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                Trade Node
              </div>
              <p className="text-xl font-semibold text-theme-primary">{item.name}</p>
            </div>
            <IconBadge className="h-12 w-12 rounded-2xl bg-white text-theme-primary shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
              {item.name === "Global Refineries" ? <GlobeIcon /> : <MapPinIcon />}
            </IconBadge>
          </div>
          <div className="mt-5 rounded-[1.25rem] border border-white/70 bg-white/75 p-4 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{item.label}</p>
            <p className="mt-3 text-base leading-8 text-theme-secondary">{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
