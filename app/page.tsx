import { CompliancePanel } from "@/components/compliance-panel";
import { DivisionGrid } from "@/components/division-grid";
import { GeographyGrid } from "@/components/geography-grid";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/section";
import { StatsBand } from "@/components/stats-band";
import { ValuePropositionGrid } from "@/components/value-proposition-grid";
import { faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <StatsBand />
      <Section
        eyebrow="Company Positioning"
        title="A three-division trading platform built for confidence."
        description="The company is structured to serve both sides of the regional trade equation: mineral wealth moving to global buyers, and high-demand products moving into African markets through a Dubai-centered operating model."
      >
        <DivisionGrid />
      </Section>
      <Section
        eyebrow="Compliance and Governance"
        title="Trust is treated as operating infrastructure."
        description="Documentation, due diligence, counterpart verification, and logistics control are built into the model from the beginning of every transaction flow."
      >
        <CompliancePanel />
      </Section>
      <Section
        eyebrow="Services and Value Proposition"
        title="What we deliver to every client and partner."
        description="The company combines sourcing, quality assurance, logistics, finance coordination, and client support into a trade model designed for dependable cross-border execution."
      >
        <ValuePropositionGrid />
      </Section>
      <Section
        eyebrow="Geographical Footprint"
        title="Strategically positioned across Africa, the Middle East, and Asia."
        description="The company uses Dubai as a global coordination hub while maintaining strong sourcing, supply, and buyer relationships across multiple jurisdictions."
      >
        <GeographyGrid />
      </Section>
    </>
  );
}
