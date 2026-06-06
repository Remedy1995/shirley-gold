import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Compliance and Governance",
  description:
    "Review the compliance, governance, AML, KYC, documentation, ethical trade, and sustainability framework of Shirley's Gold Trading Enterprise.",
  path: "/compliance"
});

const governanceBlocks = [
  {
    title: "Regulatory Framework",
    body: "Licensed under DSOA, registered with Dubai Economy and Tourism, and structured for full FZCO compliance with UAE commercial law."
  },
  {
    title: "Anti-Money Laundering",
    body: "Strict AML and KYC procedures are applied across all counterparties and divisions."
  },
  {
    title: "Documentation Standards",
    body: "Gold exports are supported by Minerals Commission certificates, assay reports, and Bills of Lading."
  },
  {
    title: "Transaction Security",
    body: "Encrypted communications, secure digital records, and segregated financial accounts support transaction integrity."
  },
  {
    title: "Ethical Trade Policy",
    body: "Conflict-free sourcing, fair miner pricing, and zero tolerance for undocumented transactions guide the trading model."
  },
  {
    title: "Sustainability",
    body: "Responsible mining support, reduced logistics carbon footprint goals, and community uplift initiatives remain part of the long-term operating posture."
  }
];

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
        eyebrow="Compliance and Governance"
        title="A trading model built around documentation, due diligence, and operational control."
        description="Governance is presented as a commercial requirement, supporting institutional confidence across sourcing, export, logistics, and buyer engagement."
      />
      <Section title="Framework overview" description="The compliance architecture aligns licensing, transaction controls, and ethical trading standards across the company.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {governanceBlocks.map((block) => (
            <article key={block.title} className="theme-panel shine-surface rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-theme-primary">{block.title}</h2>
              <p className="mt-4 text-sm leading-7 text-theme-secondary">{block.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Operating trust markers" description="These signals are surfaced across the site to support both human trust and machine-readable discoverability.">
        <div className="theme-panel shine-surface rounded-[2rem] p-8">
          <ul className="grid gap-4 md:grid-cols-2">
            {site.compliancePoints.map((point) => (
              <li key={point} className="theme-panel-soft rounded-2xl p-4 text-sm leading-7 text-theme-secondary">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
