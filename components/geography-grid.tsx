import { GlobeIcon, IconBadge, MapPinIcon } from "@/components/icons";
import { site } from "@/content/site";

export function GeographyGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {site.geography.map((item) => (
        <article
          key={item.name}
          className="theme-panel shine-surface rounded-[1.75rem] p-5"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-medium text-theme-primary">{item.name}</p>
            <IconBadge className="h-11 w-11 rounded-2xl">
              {item.name === "Global Refineries" ? <GlobeIcon /> : <MapPinIcon />}
            </IconBadge>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gold">{item.label}</p>
          <p className="mt-4 text-sm leading-7 text-theme-secondary">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
