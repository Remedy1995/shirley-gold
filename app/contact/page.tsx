import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { ContactModule } from "@/components/contact-module";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Shirley's Gold Trading for structured commercial enquiries related to gold trading, automotive imports, electronics distribution, and strategic collaboration.",
  path: "/contact"
});

const enquiryTypes = [
  "Gold trading and procurement",
  "Automotive import orders",
  "Electronics distribution",
  "Investment and partnership proposals"
];

const whatsappLink = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <PageHero
        eyebrow="Get in Touch"
        title="Structured business enquiries"
        description="Use the contact details below to begin a business conversation around sourcing, procurement, distribution, or strategic collaboration."
      />
      <section className="mx-auto w-[80%] max-w-[1800px] py-20 lg:py-28">
        <div className="space-y-12">
          <ContactForm />
          <ContactModule />
        </div>
      </section>
      <Section title="Enquiry scope" description="The company welcomes structured commercial discussions in the following areas.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {enquiryTypes.map((item) => (
            <article key={item} className="theme-panel shine-surface rounded-[1.75rem] p-6">
              <h2 className="text-xl font-semibold text-theme-primary">{item}</h2>
            </article>
          ))}
        </div>
        <div className="theme-panel shine-surface mt-8 rounded-[2rem] p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Preferred contact route</p>
          <p className="mt-4 text-base leading-8 text-theme-secondary">
            For the fastest response, email
            {" "}
            <a href={`mailto:${site.email}`} className="text-gold transition hover:text-amber">
              {site.email}
            </a>
            {" "}
            or message on WhatsApp
            {" "}
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-gold transition hover:text-amber">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
