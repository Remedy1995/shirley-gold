import { GlobeIcon, IconBadge, MapPinIcon } from "@/components/icons";
import { site } from "@/content/site";

export function GeographyGrid() {
  const cardThemes: Record<string, string> = {
    "United Arab Emirates":
      "border border-[#d9c08b] bg-[linear-gradient(180deg,#fffaf0_0%,#f7eed7_100%)]",
    "Ghana, West Africa":
      "border border-[#d8c88f] bg-[linear-gradient(180deg,#fffdf3_0%,#f4efd7_100%)]",
    "West Africa":
      "border border-[#cfd8eb] bg-[linear-gradient(180deg,#f8fbff_0%,#eef3fb_100%)]",
    China:
      "border border-[#d6ddef] bg-[linear-gradient(180deg,#fbfcff_0%,#eef2fa_100%)]",
    "Global Refineries":
      "border border-[#d5d8e4] bg-[linear-gradient(180deg,#ffffff_0%,#f3f5f9_100%)]"
  };

  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {site.geography.map((item) => (
        <article
          key={item.name}
          className={`rounded-[1.75rem] p-6 shadow-[0_22px_50px_rgba(15,23,42,0.08)] ${
            cardThemes[item.name] ?? "border border-[rgb(var(--line)/0.12)] bg-white"
          }`}
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
