import type { Metadata } from "next";

import { leadership, site } from "@/content/site";

type MetaProps = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: MetaProps): Metadata {
  const url = `${site.domain}${path}`;

  return {
    title,
    description,
    keywords: site.keywords,
    metadataBase: new URL(site.domain),
    alternates: {
      canonical: path
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.shortName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${site.domain}${site.ogImage}`,
          width: 256,
          height: 256,
          alt: site.shortName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${site.domain}${site.ogImage}`]
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.shortName,
    legalName: site.name,
    url: site.domain,
    email: site.email,
    telephone: site.phone,
    foundingDate: site.founded,
    description: site.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phone,
      areaServed: ["AE", "GH"]
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
      streetAddress: site.address
    },
    sameAs: [],
    areaServed: ["United Arab Emirates", "Ghana", "West Africa", "China"],
    knowsAbout: divisionsToServices()
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.shortName,
    url: site.domain,
    description: site.description
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: leadership.name,
    jobTitle: leadership.role,
    worksFor: {
      "@type": "Organization",
      name: site.shortName
    },
    description: leadership.intro
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.domain}${item.path}`
    }))
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.serviceFaq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

function divisionsToServices() {
  return [
    "Precious metals trading",
    "Gold procurement and export",
    "Automotive imports",
    "Consumer electronics distribution"
  ];
}
