import Link from "next/link";

import { MailIcon, MapPinIcon, WhatsAppIcon } from "@/components/icons";
import { navigation, site } from "@/content/site";

const whatsappLink = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgb(var(--line)/0.1)] bg-[rgb(var(--bg-bottom)/0.9)]">
      <div className="mx-auto grid w-[80%] max-w-[1800px] gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Shirley Trading</p>
          <h2 className="max-w-xl text-3xl font-semibold text-theme-primary">
            Cross-border trading built on disciplined execution, ethical sourcing, and long-term partnerships.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-theme-secondary">
            {site.shortName} operates from Dubai Silicon Oasis across precious metals, automotive imports, and consumer electronics distribution.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-medium text-theme-primary">Navigation</p>
            <div className="space-y-2 text-sm text-theme-secondary">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="transition hover:text-theme-primary">
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-sm text-theme-secondary">
            <p className="font-medium text-theme-primary">Contact</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                <span>
                  DSO-IFZA, IFZA Properties
                  <br />
                  Silicon Oasis, Dubai, UAE
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold">
                  <MailIcon className="h-4 w-4" />
                </span>
                <a href={`mailto:${site.email}`} className="transition hover:text-theme-primary">
                  {site.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <a href={whatsappLink} className="transition hover:text-theme-primary">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
