import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { site } from "@/content/site";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.shortName,
    template: site.titleTemplate
  },
  description: site.description,
  keywords: site.keywords,
  category: "business",
  applicationName: site.shortName,
  creator: site.shortName,
  publisher: site.shortName,
  metadataBase: new URL(site.domain),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  },
  openGraph: {
    title: site.shortName,
    description: site.description,
    url: site.domain,
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
    title: site.shortName,
    description: site.description,
    images: [`${site.domain}${site.ogImage}`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const saved = localStorage.getItem("shirleys-theme");
              const preferred = saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
              document.documentElement.dataset.theme = preferred;
            })();`
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <div className="min-h-screen">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
