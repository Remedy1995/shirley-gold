import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  ChartIcon,
  GlobeIcon,
  IconBadge,
  ShieldIcon,
  SparkIcon
} from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Shirley Trading's service model across ethical sourcing, logistics, compliance, financing, quality assurance, and client support.",
  path: "/services"
});

const serviceIcons = [SparkIcon, ShieldIcon, GlobeIcon, ShieldIcon, ChartIcon, SparkIcon];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <PageHero
        eyebrow="Services"
        title="Services & Value Proposition"
        description="What we deliver to every client and partner."
      />

      <section className="mx-auto w-[80%] max-w-[1800px] py-16 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {site.valueProposition.map((item, index) => {
            const Icon = serviceIcons[index] ?? SparkIcon;

            return (
              <article
                key={item.title}
                className="theme-panel shine-surface rounded-[1.25rem] p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-theme-primary">{item.title}</h2>
                  <IconBadge className="h-11 w-11 shrink-0 rounded-2xl">
                    <Icon />
                  </IconBadge>
                </div>
                <p className="mt-5 text-base leading-8 text-theme-secondary sm:text-[1.05rem]">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
