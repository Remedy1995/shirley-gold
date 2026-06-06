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
      <Section title="Framework overview" description="The compliance architecture aligns licensing, transaction controls, and ethical trading standards across the company.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {governanceBlocks.map((block) => {
            const Icon = block.icon;

            return (
              <article key={block.title} className="theme-panel shine-surface rounded-[1.75rem] p-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-theme-primary">{block.title}</h2>
                  <IconBadge className="h-11 w-11 rounded-[0.95rem]">
                    <Icon />
                  </IconBadge>
                </div>
                <p className="mt-4 text-sm leading-7 text-theme-secondary">{block.body}</p>
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
