import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactModule } from "@/components/contact-module";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { divisions } from "@/content/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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
      <Section title="Partnership contact" description="Enquiries can be directed to the company for division-specific discussions and structured supply relationships.">
        <ContactModule />
      </Section>
    </>
  );
}
