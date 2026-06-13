import Image from "next/image";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { leadership } from "@/content/site";
import { breadcrumbJsonLd, buildMetadata, personJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Leadership",
  description:
    "Read the leadership profile of Shirley Ama Daniels, co-founder and business executive behind Shirley's Gold Trading Enterprise.",
  path: "/leadership"
});

export default function LeadershipPage() {
  const founderProfile = [
    "Dynamic and visionary business executive with over 18 years of distinguished experience spanning real estate development, commodities trading, international commerce, microfinance, and organizational leadership.",
    "As Founder and Chief Executive Officer of DD Willet Group, a diversified group with interests in real estate, wholesale distribution, printing, import/export, and financial services, he has built a formidable track record of delivering multi-million-dollar projects and establishing new business verticals across Ghana and the UAE.",
    "Recognized for his ability to mobilize capital, forge high-value cross-border partnerships, and drive large-scale execution, he has successfully raised and deployed over $25 million in financing.",
    "He is also the founder of Shirley's Gold Trading Enterprise (Dubai), a GoldBod-licensed gold buyer through Willet Investment, and a major shareholder in Willet Microcredit, a microfinance institution on a regulated pathway to community bank status."
  ];
  const prithamProfile = [
    "Chief Executive Officer with over a decade of experience in leading global organizations to achieve strategic growth objectives, drive operational excellence, enhance profitability, and foster innovation.",
    "Skilled in building high-performing teams, cultivating key stakeholder relationships, and executing transformative initiatives to propel business success, he brings a strong focus on delivering sustainable value and long-term shareholder outcomes.",
    "At Shirley's Gold Trading Enterprise in Dubai, he directs organizational operations across strategy development, financial performance, market positioning, and human capital management.",
    "His executive record includes implementing cost-saving measures that reduced operational expenses while strengthening service quality, alongside cultivating a culture of innovation, customer satisfaction, and market growth."
  ];

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
        title="Executive Profile"
        description="Executive leadership across strategy, investment, operations, and cross-border trade execution."
      />
      <section className="mx-auto w-[80%] max-w-[1800px] py-20 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="theme-panel-strong shine-surface rounded-[1.5rem] p-5 sm:p-6">
            <div className="mx-auto aspect-[4/5] max-w-[18rem] overflow-hidden rounded-[1.5rem] border border-[rgb(var(--line)/0.14)] bg-white sm:max-w-[20rem]">
              <Image
                src="/images/headshots/dd-willet-founder.jpg"
                alt="Portrait of Bishop Dickson Akwasi Daniels"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <h2 className="mt-6 text-center text-2xl font-semibold text-theme-primary">
              Bishop Dickson Akwasi Daniels
            </h2>
          </article>
          <article className="theme-panel shine-surface rounded-[1.5rem] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Founder and Director
            </p>
            {founderProfile.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-base leading-8 ${
                  index === 0 ? "mt-4 text-theme-primary" : "mt-5 text-theme-secondary"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </section>
      <section className="mx-auto w-[80%] max-w-[1800px] py-20 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="theme-panel-strong shine-surface rounded-[1.5rem] p-5 sm:p-6">
            <div className="mx-auto aspect-[4/5] max-w-[18rem] overflow-hidden rounded-[1.5rem] border border-[rgb(var(--line)/0.14)] bg-white sm:max-w-[20rem]">
              <Image
                src="/images/headshots/shirley-ama-daniels.jpg"
                alt="Portrait of Shirley Ama Daniels"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="mt-6 text-center text-2xl font-semibold text-theme-primary">
              {leadership.name}
            </h2>
          </article>
          <article className="theme-panel shine-surface rounded-[1.5rem] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{leadership.role}</p>
            <p className="mt-4 text-base leading-8 text-theme-primary">
              Shirley Ama Daniels is a results-driven business executive and investment strategist with more than a decade of experience across gold trading, commodity exports, procurement, and strategic business management.
            </p>
            {leadership.body.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base leading-8 text-theme-secondary first:mt-6">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </section>
      <section className="mx-auto w-[80%] max-w-[1800px] py-20 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="theme-panel-strong shine-surface rounded-[1.5rem] p-5 sm:p-6">
            <div className="mx-auto aspect-[4/5] max-w-[18rem] overflow-hidden rounded-[1.5rem] border border-[rgb(var(--line)/0.14)] bg-white sm:max-w-[20rem]">
              <Image
                src="/images/headshots/pritham-r.jpeg"
                alt="Portrait of Pritham R"
                width={900}
                height={1100}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <h2 className="mt-6 text-center text-2xl font-semibold text-theme-primary">Pritham R</h2>
          </article>
          <article className="theme-panel shine-surface rounded-[1.5rem] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Chief Executive Officer</p>
            {prithamProfile.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-base leading-8 ${
                  index === 0 ? "mt-4 text-theme-primary" : "mt-5 text-theme-secondary"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
