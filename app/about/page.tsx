import { Breadcrumbs } from "@/components/breadcrumbs";
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
        description="Shirley's Gold Trading Enterprise - FZCO is a Dubai-based international trading company strategically positioned at the crossroads of Africa, Asia, and the Middle East.

Established in 2024 and licensed under the Dubai Silicon Oasis Free Zone, we specialise in three core verticals: precious metals trading, automotive imports, and consumer electronics distribution.

We leverage world-class UAE infrastructure and a business-friendly regulatory environment to facilitate seamless, transparent trade between continents, bridging Africa's resource wealth with global demand."
      />
      <Section
        title="Company at a glance"
        description="The core operating facts are presented clearly to support due diligence, quick scanning, and executive review."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {site.stats.map((stat) => (
            <article key={stat.label} className="theme-panel shine-surface rounded-[1.75rem] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-theme-tertiary">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold text-theme-primary">{stat.value}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        title="Corporate identity and operating context"
        description="The company is incorporated as a Free Zone Company under Dubai Silicon Oasis and positioned to facilitate transparent trade across precious metals, automotive imports, and electronics distribution."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="theme-panel shine-surface rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Registration Profile</p>
            <dl className="mt-6 space-y-4 text-sm text-theme-secondary">
              <div>
                <dt className="text-theme-tertiary">Company name</dt>
                <dd className="mt-1 text-theme-primary">{site.name}</dd>
              </div>
              <div>
                <dt className="text-theme-tertiary">Legal structure</dt>
                <dd className="mt-1 text-theme-primary">Free Zone Company (FZCO)</dd>
              </div>
              <div>
                <dt className="text-theme-tertiary">Registration and jurisdiction</dt>
                <dd className="mt-1 text-theme-primary">
                  {site.registration} · {site.jurisdiction}
                </dd>
              </div>
              <div>
                <dt className="text-theme-tertiary">License number</dt>
                <dd className="mt-1 text-theme-primary">{site.license}</dd>
              </div>
              <div>
                <dt className="text-theme-tertiary">Free zone</dt>
                <dd className="mt-1 text-theme-primary">{site.freeZone}</dd>
              </div>
              <div>
                <dt className="text-theme-tertiary">Address</dt>
                <dd className="mt-1 text-theme-primary">{site.address}</dd>
              </div>
              <div>
                <dt className="text-theme-tertiary">Location</dt>
                <dd className="mt-1 text-theme-primary">Dubai, United Arab Emirates</dd>
              </div>
            </dl>
          </div>
          <div className="theme-panel shine-surface rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Positioning</p>
            <p className="mt-6 text-base leading-8 text-theme-secondary">
              Established in {site.founded}, the company leverages the UAE&apos;s logistics infrastructure and business environment to create seamless, transparent trade connections between African resource markets and global demand centers.
            </p>
            <p className="mt-4 text-base leading-8 text-theme-secondary">
              The business model is intentionally diversified across three complementary divisions that support sourcing, distribution, and trade resilience.
            </p>
          </div>
        </div>
      </Section>
      <Section
        title="Operating posture"
        description="The company positions its operating model around disciplined trade execution, cross-border access, and long-term stakeholder trust."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="theme-panel shine-surface rounded-[1.75rem] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-gold">Cross-continental position</p>
            <p className="mt-4 text-base leading-8 text-theme-secondary">
              The company is strategically positioned between African sourcing markets, UAE logistics infrastructure, and international buyer demand.
            </p>
          </article>
          <article className="theme-panel shine-surface rounded-[1.75rem] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-gold">Three-division model</p>
            <p className="mt-4 text-base leading-8 text-theme-secondary">
              Precious metals, automotive imports, and consumer electronics are presented as complementary trade lines rather than isolated business units.
            </p>
          </article>
          <article className="theme-panel shine-surface rounded-[1.75rem] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-gold">Trust-first execution</p>
            <p className="mt-4 text-base leading-8 text-theme-secondary">
              Compliance, documentation, and relationship-led delivery remain central to how the business positions itself publicly.
            </p>
          </article>
        </div>
      </Section>
      <Section title="Mission and vision" description="The company is built around disciplined growth, ethical trade, and sustainable stakeholder value.">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="theme-panel shine-surface rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Mission</p>
            <p className="mt-5 text-lg leading-8 text-theme-primary">{site.mission}</p>
          </article>
          <article className="theme-panel shine-surface rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Vision</p>
            <p className="mt-5 text-lg leading-8 text-theme-primary">{site.vision}</p>
          </article>
        </div>
      </Section>
      <Section title="Core values" description="Values are presented as operating commitments rather than marketing labels.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {site.values.map((value) => (
            <article key={value.title} className="theme-panel shine-surface rounded-[1.75rem] p-6">
              <h3 className="text-2xl font-semibold text-theme-primary">{value.title}</h3>
              <p className="mt-4 text-sm leading-7 text-theme-secondary">{value.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
