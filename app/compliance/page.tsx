import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  BuildingIcon,
  GlobeIcon,
  IconBadge,
  ShieldIcon,
  SparkIcon
} from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Compliance and Governance",
  description:
    "Review the compliance, governance, AML, KYC, documentation, ethical trade, and sustainability framework of Shirley's Gold Trading Enterprise.",
  path: "/compliance"
});

const governanceBlocks = [
  {
    title: "Regulatory Framework",
    body: "Licensed under DSOA, registered with Dubai Economy and Tourism, and structured for full FZCO compliance with UAE commercial law.",
    icon: BuildingIcon
  },
  {
    title: "Anti-Money Laundering",
    body: "Strict AML and KYC procedures are applied across all counterparties and divisions.",
    icon: ShieldIcon
  },
  {
    title: "Documentation Standards",
    body: "Gold exports are supported by Minerals Commission certificates, assay reports, and Bills of Lading.",
    icon: SparkIcon
  },
  {
    title: "Transaction Security",
    body: "Encrypted communications, secure digital records, and segregated financial accounts support transaction integrity.",
    icon: ShieldIcon
  },
  {
    title: "Ethical Trade Policy",
    body: "Conflict-free sourcing, fair miner pricing, and zero tolerance for undocumented transactions guide the trading model.",
    icon: GlobeIcon
  },
  {
    title: "Sustainability",
    body: "Responsible mining support, reduced logistics carbon footprint goals, and community uplift initiatives remain part of the long-term operating posture.",
    icon: GlobeIcon
  }
] as const;

export default function CompliancePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Compliance", path: "/compliance" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Compliance" }]} />
      <PageHero
        eyebrow="Compliance, Governance and Risk Management"
        title="Ethical Foundation and Regulatory Adherence"
        description="Governance is presented as a commercial requirement, supporting institutional confidence across sourcing, export, logistics, and buyer engagement."
      />
      <Section title="Framework overview" description="Licensing discipline, counterparty checks, documentation controls, and ethical trading standards support the company's cross-border operating model.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {governanceBlocks.map((block) => {
            const Icon = block.icon;

            return (
              <article
                key={block.title}
                className="theme-panel shine-surface rounded-[1.25rem] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="inline-flex rounded-full border border-[rgb(var(--line)/0.08)] bg-[#f8f1df] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b98729]">
                      Trust Signal
                    </div>
                    <h2 className="text-xl font-semibold text-theme-primary">{block.title}</h2>
                  </div>
                  <IconBadge className="h-12 w-12 rounded-[1rem] bg-white text-theme-primary shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
                    <Icon />
                  </IconBadge>
                </div>
                <div className="mt-5 rounded-[1.25rem] border border-white/80 bg-white/88 p-4">
                  <p className="text-base leading-8 text-theme-secondary">{block.body}</p>
                </div>
              </article>
            );
          })}
        </div>
        <article className="theme-panel shine-surface mt-10 rounded-[2rem] px-6 py-7 sm:px-7 sm:py-8">
          <p className="text-xs uppercase tracking-[0.24em] text-theme-tertiary">
            Market Opportunity
          </p>
          <p className="mt-5 text-2xl font-semibold leading-9 text-theme-primary">
            Africa&apos;s growing middle class drives demand for vehicles and electronics, while its mineral wealth supplies global markets.
          </p>
          <p className="mt-4 text-base leading-8 text-theme-secondary">
            Our three-division model is uniquely positioned to serve both sides of this equation.
          </p>
        </article>
      </Section>
    </>
  );
}
