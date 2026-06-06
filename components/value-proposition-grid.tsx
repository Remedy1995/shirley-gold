import { ChartIcon, GlobeIcon, IconBadge, ShieldIcon, SparkIcon } from "@/components/icons";
import { site } from "@/content/site";

const valueIcons = [SparkIcon, ShieldIcon, GlobeIcon, ShieldIcon, ChartIcon, SparkIcon];

export function ValuePropositionGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {site.valueProposition.map((item, index) => {
        const Icon = valueIcons[index] ?? SparkIcon;

        return (
          <article key={item.title} className="theme-panel shine-surface rounded-[1.75rem] p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{item.title}</p>
              <IconBadge className="h-11 w-11 rounded-2xl">
                <Icon />
              </IconBadge>
            </div>
            <p className="mt-4 text-base leading-8 text-theme-secondary">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}
