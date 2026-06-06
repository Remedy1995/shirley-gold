import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArrowUpRightIcon, CarIcon, DeviceIcon, GemIcon, IconBadge } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { divisions } from "@/content/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Divisions",
  description:
    "Explore the three business divisions of Shirley's Gold Trading Enterprise: precious metals trading, automotive import, and electronics distribution.",
  path: "/divisions"
});

const divisionIcons = {
  "precious-metals": GemIcon,
  automotive: CarIcon,
  electronics: DeviceIcon
} as const;

export default function DivisionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Divisions", path: "/divisions" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Divisions" }]} />
      <PageHero
        eyebrow="Business Divisions"
        title="Three complementary divisions serving regional demand and international markets."
        description="Each division is designed around a clear trade flow, an identifiable buyer profile, and operational controls suited to regulated cross-border commerce."
      />
      <Section title="Division overview" description="The portfolio is diversified, but united by disciplined execution and a partnership-led commercial model.">
        <div className="grid gap-6 lg:grid-cols-3">
          {divisions.map((division) => {
            const Icon = divisionIcons[division.slug];

            return (
              <article key={division.slug} className="theme-panel shine-surface rounded-[2rem] p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-gold">{division.eyebrow}</p>
                    <h2 className="mt-4 text-3xl font-semibold text-theme-primary">{division.name}</h2>
                  </div>
                  <IconBadge>
                    <Icon />
                  </IconBadge>
                </div>
                <p className="mt-5 text-base leading-8 text-theme-secondary">{division.description}</p>
                <Link href={`/divisions/${division.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gold transition hover:text-amber">
                  Review division page
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
