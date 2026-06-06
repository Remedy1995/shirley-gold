import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  BuildingIcon,
  ChartIcon,
  DeviceIcon,
  GlobeIcon,
  IconBadge,
  ShieldIcon,
  SparkIcon
} from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { divisions } from "@/content/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const preciousMetalsCompliance = [
  "GoldBod-licensed sourcing partnerships",
  "Ghana Minerals Commission compliance",
  "AML / KYC due diligence on all counterparties",
  "LBMA-aligned purity and quality standards",
  "Bonded, insured carrier logistics network"
];

const preciousMetalsPerformance = [
  "Export volume: 200-400 kg annually",
  "Purity: 22-24 karat certified",
  "Markets: UAE, Europe, Asia",
  "Institutional buyer network: Active",
  "Sourcing: Ghana, West Africa"
];

const automotiveToyota = [
  "Sedans: Camry, Corolla, Avalon, Prius",
  "SUVs: RAV4, Highlander, 4Runner, Land Cruiser, Prado",
  "Pickups: Hilux, Tacoma, Tundra",
  "Vans: Hiace, Sienna",
  "Commercial: Coaster, Dyna"
];

const automotiveChineseBrands = ["Geely", "BYD", "Changan", "JAC", "Great Wall", "MG"];

const automotiveServices = [
  "Quality assurance & roadworthiness certification",
  "End-to-end shipping & customs clearance",
  "Fleet solutions · Financing · After-sales support"
];

const automotiveKeySignals = [
  { label: "Annual Export", value: "200-400 KG", icon: ChartIcon },
  { label: "Certification", value: "22-24 Karat Certified", icon: ShieldIcon },
  { label: "Buyers", value: "UAE Refineries & International Buyers", icon: GlobeIcon }
];

const electronicsCategories = [
  {
    title: "Home Appliances",
    body: "Refrigerators, washing machines, air conditioners, kitchen appliances",
    icon: BuildingIcon
  },
  {
    title: "Consumer Electronics",
    body: "Televisions, home theater systems, audio and smart home devices",
    icon: SparkIcon
  },
  {
    title: "Computing",
    body: "Laptops, desktops, tablets and accessories for business and personal use",
    icon: ChartIcon
  },
  {
    title: "Mobile Devices",
    body: "Smartphones, smartwatches and tablets across all price segments",
    icon: DeviceIcon
  },
  {
    title: "Gaming",
    body: "Consoles, controllers and gaming accessories from global brands",
    icon: SparkIcon
  },
  {
    title: "Commercial Grade",
    body: "Industrial electronics for hospitality, retail and corporate clients",
    icon: BuildingIcon
  }
];

const electronicsKeySignals = [
  { label: "Sourcing", value: "Sourced in China", icon: GlobeIcon },
  { label: "Transit", value: "Distributed via Dubai", icon: BuildingIcon },
  { label: "Delivery", value: "Delivered to Africa", icon: ChartIcon },
  { label: "Channels", value: "Wholesale & Retail", icon: DeviceIcon }
];

export async function generateStaticParams() {
  return divisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const division = divisions.find((item) => item.slug === slug);

  if (!division) {
    return buildMetadata({
      title: "Division",
      description: "Business division page.",
      path: "/divisions"
    });
  }

  return buildMetadata({
    title: division.name,
    description: division.description,
    path: `/divisions/${division.slug}`
  });
}

export default async function DivisionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const division = divisions.find((item) => item.slug === slug);

  if (!division) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Divisions", path: "/divisions" },
          { name: division.name, path: `/divisions/${division.slug}` }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Divisions", href: "/divisions" },
          { label: division.name }
        ]}
      />
      <PageHero
        eyebrow={division.eyebrow}
        title={division.name}
        description={division.description}
      />
      {division.slug === "automotive" ? (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-22">
          <div className="space-y-8">
            <div className="mb-[30px] max-w-4xl">
              <p className="text-base font-semibold uppercase tracking-[0.24em] text-gold sm:text-lg">
                Division Services
              </p>
              <div className="mt-6 space-y-5">
                {automotiveServices.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-lg leading-8 text-theme-secondary sm:text-[1.2rem]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <article className="overflow-hidden rounded-[2rem] border border-[rgb(var(--line)/0.16)] bg-white shadow-[0_22px_70px_rgb(var(--panel-shadow)/0.2)]">
                <div className="px-6 py-7 sm:px-8 sm:py-9">
                  <p className="text-base font-semibold uppercase tracking-[0.22em] text-[#18376f] sm:text-lg">
                    Toyota Lineup
                  </p>
                  <ul className="mt-10 space-y-4 text-base leading-8 text-theme-primary sm:pl-6">
                    {automotiveToyota.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#18376f]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="overflow-hidden rounded-[2rem] border border-[rgb(var(--line)/0.16)] bg-white shadow-[0_22px_70px_rgb(var(--panel-shadow)/0.2)]">
                <div className="px-6 py-7 sm:px-8 sm:py-9">
                  <p className="text-base font-semibold uppercase tracking-[0.22em] text-[#18376f] sm:text-lg">
                    Chinese Brands
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {automotiveChineseBrands.map((brand) => (
                      <span
                        key={brand}
                        className="inline-flex rounded-full border border-[rgb(var(--line)/0.14)] bg-[#f5f7fb] px-4 py-2 text-lg font-semibold text-theme-primary"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            <div className="pt-6">
              <h2 className="text-4xl font-bold tracking-tight text-theme-primary sm:text-5xl">
                Key signals
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-theme-secondary sm:text-lg">
                Metrics are presented as buyer-friendly market indicators for the automotive import division.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {automotiveKeySignals.map((metric) => (
                  <article
                    key={metric.label}
                    className="theme-panel shine-surface rounded-[2rem] px-6 py-7 sm:px-7 sm:py-8"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-theme-tertiary">
                        {metric.label}
                      </p>
                      <IconBadge className="h-11 w-11 rounded-[0.95rem]">
                        <metric.icon />
                      </IconBadge>
                    </div>
                    <p className="mt-5 text-2xl font-semibold leading-9 text-theme-primary sm:text-[2rem]">
                      {metric.value}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : division.slug === "electronics" ? (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {electronicsCategories.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="theme-panel shine-surface relative overflow-hidden rounded-[1.75rem] px-5 py-6 sm:px-7 sm:py-7"
                >
                  <div className="absolute inset-y-0 left-0 w-2 bg-gold" />
                  <div className="pl-5 sm:pl-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-theme-primary">{item.title}</h3>
                      <IconBadge className="h-11 w-11 rounded-[0.95rem]">
                        <Icon />
                      </IconBadge>
                    </div>
                    <p className="mt-6 text-base leading-8 text-theme-secondary">{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="pt-12">
            <h2 className="text-4xl font-bold tracking-tight text-theme-primary sm:text-5xl">
              Key signals
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-theme-secondary sm:text-lg">
              Distribution signals are presented as practical indicators of sourcing reach, logistics structure, and market delivery.
            </p>
            <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
              {electronicsKeySignals.map((metric) => (
                <article
                  key={metric.label}
                  className="theme-panel shine-surface rounded-[2rem] px-6 py-7 sm:px-7 sm:py-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-theme-tertiary">
                      {metric.label}
                    </p>
                    <IconBadge className="h-11 w-11 rounded-[0.95rem]">
                      <metric.icon />
                    </IconBadge>
                  </div>
                  <p className="mt-5 text-2xl font-semibold leading-9 text-theme-primary">
                    {metric.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          <Section title="Core activities" description="The division model is presented with concrete activities and measurable trade signals.">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <article className="theme-panel shine-surface rounded-[2rem] p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-gold">Operational Scope</p>
                <ul className="mt-6 space-y-4 text-base leading-8 text-theme-secondary">
                  {division.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="grid gap-4">
                {division.detailSections.map((section) => (
                  <div key={section.title} className="theme-panel shine-surface rounded-[1.75rem] p-6">
                    <h2 className="text-2xl font-semibold text-theme-primary">{section.title}</h2>
                    <p className="mt-4 text-base leading-8 text-theme-secondary">{section.body}</p>
                  </div>
                ))}
              </article>
            </div>
          </Section>
          <Section title="Key signals" description="Metrics are written as buyer-friendly trust markers and market summaries.">
            <div className="grid gap-5 md:grid-cols-3">
              {division.metrics.map((metric) => (
                <article key={metric.label} className="theme-panel shine-surface rounded-[1.75rem] p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-theme-tertiary">{metric.label}</p>
                  <p className="mt-4 text-2xl font-semibold text-theme-primary">{metric.value}</p>
                </article>
              ))}
            </div>
          </Section>
        </>
      )}
      {division.slug === "precious-metals" ? (
        <Section
          title="Compliance and performance"
          description="The precious metals division is supported by documented sourcing controls, due diligence discipline, and clearly defined market metrics."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="theme-panel shine-surface rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Compliance &amp; Partnerships
              </p>
              <ul className="mt-8 space-y-4 text-base leading-8 text-theme-primary">
                {preciousMetalsCompliance.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="theme-panel shine-surface rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Performance Metrics
              </p>
              <ul className="mt-8 space-y-3 text-base leading-8 text-theme-primary">
                {preciousMetalsPerformance.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Section>
      ) : null}
    </>
  );
}
