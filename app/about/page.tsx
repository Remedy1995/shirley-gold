import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  BuildingIcon,
  CarIcon,
  ChartIcon,
  DeviceIcon,
  GemIcon,
  GlobeIcon,
  IconBadge,
  SparkIcon,
  ShieldIcon
} from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Shirley's Gold Trading Enterprise, its Dubai FZCO structure, mission, vision, values, and cross-border operating model.",
  path: "/about"
});

const companyGlanceItems = [
  {
    title: "Precious Metals Trading",
    body: "Gold procurement · Global export",
    icon: GemIcon
  },
  {
    title: "Automotive Imports",
    body: "Vehicles from Dubai to West Africa",
    icon: CarIcon
  },
  {
    title: "Electronics Distribution",
    body: "Consumer tech from Asia to Africa",
    icon: DeviceIcon
  }
] as const;

const valueIcons = {
  Integrity: ShieldIcon,
  Excellence: SparkIcon,
  Innovation: ChartIcon,
  Sustainability: GlobeIcon
} as const;

const footprintItems = [
  {
    title: "United Arab Emirates",
    badge: "Headquarters & Hub",
    body: "DSO-IFZA provides 100% foreign ownership, tax-free trading, and world-class logistics infrastructure.",
    icon: "🇦🇪",
    accent: "gold"
  },
  {
    title: "Ghana, West Africa",
    badge: "Primary Gold Sourcing",
    body: "GoldBod-certified small-scale miner procurement across Ghana, compliant with Minerals Commission guidelines.",
    icon: "🇬🇭",
    accent: "gold"
  },
  {
    title: "West Africa Markets",
    badge: "Distribution Market",
    body: "Primary automotive and electronics distribution market. Ghana anchors regional demand for vehicles and appliances.",
    icon: "🌍",
    accent: "blue"
  },
  {
    title: "China",
    badge: "Manufacturing Source",
    body: "Electronics and home appliances sourced from reputable Chinese OEM manufacturers, transited through Dubai.",
    icon: "🌏",
    accent: "blue"
  },
  {
    title: "Global Refineries",
    badge: "Precious Metals Buyers",
    body: "Direct institutional sales to UAE and international refineries, backed by certified quality and secure logistics.",
    icon: "🏦",
    accent: "blue"
  }
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <PageHero
        eyebrow="About the Company"
        title="About Shirley's Gold Trading"
        sectionClassName="bg-[radial-gradient(circle_at_top,rgba(214,180,104,0.18),transparent_28%),linear-gradient(180deg,#f7f0e1_0%,#f3ead8_100%)]"
        titleClassName="max-w-[90vw] text-5xl leading-[0.92] sm:text-6xl md:text-7xl lg:text-[4.8rem]"
        descriptionClassName="max-w-[90vw] lg:max-w-[90%]"
        description={[
          "Shirley's Gold Trading Enterprise - FZCO is a Dubai-based international trading company strategically positioned at the crossroads of Africa, Asia, and the Middle East.",
          "Established in 2024 and licensed under the Dubai Silicon Oasis Free Zone, we specialise in three core verticals: precious metals trading, automotive imports, and consumer electronics distribution.",
          "We leverage world-class UAE infrastructure and a business-friendly regulatory environment to facilitate seamless, transparent trade between continents, bridging Africa's resource wealth with global demand."
        ]}
      />
      <Section
        title="Company at a glance"
        description="The company's three operating verticals are presented clearly for quick executive review."
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex h-full flex-col gap-4">
            {companyGlanceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="theme-panel shine-surface relative flex-1 overflow-hidden rounded-[1.25rem] p-5"
                >
                  <div className="absolute inset-y-0 left-0 w-2 bg-gold" />
                  <div className="flex flex-col gap-4 pl-5 sm:flex-row sm:items-center sm:gap-5 sm:pl-7">
                    <IconBadge className="h-12 w-12 rounded-[1rem] sm:h-14 sm:w-14">
                      <Icon />
                    </IconBadge>
                    <div>
                      <h3 className="text-xl font-bold text-theme-primary sm:text-2xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-theme-secondary sm:text-base">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="theme-panel shine-surface h-full rounded-[1.5rem] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Registration Profile</p>
            <dl className="mt-6 space-y-5 text-sm text-theme-secondary">
              <div>
                <dt className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-theme-tertiary">
                  <IconBadge className="h-10 w-10 rounded-2xl">
                    <BuildingIcon />
                  </IconBadge>
                  <span>Company name</span>
                </dt>
                <dd className="mt-2 text-lg font-semibold leading-8 text-theme-primary">{site.name}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-theme-tertiary">
                  <IconBadge className="h-10 w-10 rounded-2xl">
                    <BuildingIcon />
                  </IconBadge>
                  <span>Legal structure</span>
                </dt>
                <dd className="mt-2 text-lg font-medium leading-8 text-theme-primary">Free Zone Company (FZCO)</dd>
              </div>
              <div>
                <dt className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-theme-tertiary">
                  <IconBadge className="h-10 w-10 rounded-2xl">
                    <ShieldIcon />
                  </IconBadge>
                  <span>Registration and jurisdiction</span>
                </dt>
                <dd className="mt-2 text-lg font-medium leading-8 text-theme-primary">
                  {site.registration} · {site.jurisdiction}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-theme-tertiary">
                  <IconBadge className="h-10 w-10 rounded-2xl">
                    <ShieldIcon />
                  </IconBadge>
                  <span>License number</span>
                </dt>
                <dd className="mt-2 text-lg font-semibold leading-8 text-theme-primary">{site.license}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
      <Section title="Mission and vision" description="The company is built around disciplined growth, ethical trade, and sustainable stakeholder value.">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="theme-panel shine-surface rounded-[1.5rem] p-6">
            <div className="flex items-center gap-4">
              <IconBadge className="h-12 w-12 rounded-[1rem]">
                <GlobeIcon />
              </IconBadge>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold sm:text-base">
                Mission
              </p>
            </div>
            <p className="mt-5 text-lg leading-8 text-theme-primary">{site.mission}</p>
          </article>
          <article className="theme-panel shine-surface rounded-[1.5rem] p-6">
            <div className="flex items-center gap-4">
              <IconBadge className="h-12 w-12 rounded-[1rem]">
                <SparkIcon />
              </IconBadge>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold sm:text-base">
                Vision
              </p>
            </div>
            <p className="mt-5 text-lg leading-8 text-theme-primary">{site.vision}</p>
          </article>
        </div>
      </Section>
      <Section title="Core values" description="Values are presented as operating commitments rather than marketing labels.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {site.values.map((value) => {
            const Icon = valueIcons[value.title as keyof typeof valueIcons] ?? ShieldIcon;

            return (
              <article key={value.title} className="theme-panel shine-surface rounded-[1.25rem] p-5">
                <div className="flex items-center gap-4">
                  <IconBadge className="h-11 w-11 rounded-[0.95rem]">
                    <Icon />
                  </IconBadge>
                  <h3 className="text-xl font-semibold text-theme-primary">{value.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-theme-secondary">{value.body}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <section className="mx-auto w-[80%] max-w-[1800px] pb-20 lg:pb-28">
        <div className="overflow-hidden rounded-[2rem] border border-[rgb(var(--line)/0.16)] theme-panel shine-surface">
          <div className="border-b border-[rgb(var(--line)/0.1)] bg-[rgb(var(--surface)/0.04)] px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-3xl font-bold tracking-tight text-theme-primary sm:text-4xl">Geographical Footprint</h2>
            <p className="mt-4 text-base leading-8 text-theme-secondary">
              Strategic positioning across Africa, the Middle East, and Asia
            </p>
          </div>
          <div className="divide-y divide-[rgb(var(--line)/0.14)]">
            {footprintItems.map((item) => (
              <article key={item.title} className="relative px-5 py-6 sm:px-8 sm:py-7">
                <div className="absolute inset-y-0 left-0 w-3 bg-gold" />
                <div className="pl-5 sm:pl-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center text-3xl">
                        <span aria-hidden="true">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-theme-primary">{item.title}</h3>
                        <p className="mt-4 max-w-4xl text-base leading-8 text-theme-secondary">
                          {item.body}
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 px-5 py-3 text-sm font-semibold text-gold">
                      {item.badge}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
