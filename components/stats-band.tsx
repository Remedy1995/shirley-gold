import { ChartIcon, GlobeIcon, IconBadge, SparkIcon } from "@/components/icons";
import { site } from "@/content/site";

const statIcons = [SparkIcon, ChartIcon, GlobeIcon, ChartIcon];

export function StatsBand() {
  return (
    <div className="border-y border-[rgb(var(--line)/0.1)] bg-[rgb(var(--surface)/0.04)]">
      <div className="mx-auto w-[80%] max-w-[1800px] py-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Company Snapshot</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-theme-primary md:text-4xl">
            Commercial analytics at a glance.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.stats.map((stat, index) => {
            const Icon = statIcons[index] ?? SparkIcon;

            return (
              <div
                key={stat.label}
                className="theme-panel shine-surface rounded-3xl px-5 py-6 text-center"
              >
                <div className="flex justify-center">
                  <IconBadge className="h-12 w-12 rounded-[1rem]">
                    <Icon />
                  </IconBadge>
                </div>
                <p className="mt-5 text-4xl font-semibold tracking-tight text-theme-primary">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-theme-tertiary">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
