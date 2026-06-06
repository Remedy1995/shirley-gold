import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { leadership } from "@/content/site";
import { breadcrumbJsonLd, buildMetadata, personJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Leadership",
  description:
    "Read the leadership profile of Shirley Ama Daniels, co-founder and business executive behind Shirley's Gold Trading Enterprise.",
  path: "/leadership"
});

export default function LeadershipPage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Leadership", path: "/leadership" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Leadership" }]} />
      <PageHero
        eyebrow="Leadership"
        title="Shirley Ama Daniels"
        description="A business executive and investment strategist with more than a decade of experience across gold trading, commodity exports, procurement, and strategic business management."
      />
      <Section title="Executive profile" description="The leadership narrative supports trust, credibility, and strategic context without overtaking the company brand.">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="theme-panel-strong shine-surface rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Current Role</p>
            <div className="profile-orb mt-6 flex h-32 w-32 items-center justify-center rounded-full text-4xl font-semibold text-theme-primary">
              SD
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-theme-primary">{leadership.role}</h2>
            <div className="mt-8 space-y-3">
              {leadership.focusAreas.map((item) => (
                <div key={item} className="theme-panel-soft rounded-2xl px-4 py-3 text-sm text-theme-secondary">
                  {item}
                </div>
              ))}
            </div>
          </article>
          <article className="theme-panel shine-surface rounded-[2rem] p-8">
            <p className="text-lg leading-8 text-theme-primary">{leadership.intro}</p>
            {leadership.body.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base leading-8 text-theme-secondary">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </Section>
    </>
  );
}
