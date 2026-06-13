import Link from "next/link";

import { MailIcon, MapPinIcon, WhatsAppIcon, FacebookIcon, InstagramIcon, PhoneIcon } from "@/components/icons";
import { navigation, site } from "@/content/site";

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
            <p className="font-medium text-theme-primary">Contact &amp; Socials</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-semibold text-theme-primary block text-[11px] uppercase tracking-wider mb-0.5">Dubai Office</span>
                  DSO-IFZA, IFZA Properties
                  <br />
                  Silicon Oasis, Dubai, UAE
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-gold">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-semibold text-theme-primary block text-[11px] uppercase tracking-wider mb-0.5">Ghana Office</span>
                  Ashaiman - Tulaku Roundabout
                  <br />
                  Adjacent to the Bank of Africa
                  <br />
                  (1st Floor, Centre for Media &amp; Business Building)
                </div>
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
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-theme-primary block text-[11px] uppercase tracking-wider mb-1">UAE Contact</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a href={`https://wa.me/${site.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-theme-primary text-xs">
                        WhatsApp
                      </a>
                      <span className="text-[rgb(var(--line)/0.2)]">|</span>
                      <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-1 transition hover:text-theme-primary text-xs">
                        <PhoneIcon className="h-3.5 w-3.5 text-gold" /> Call: {site.phone}
                      </a>
                    </div>
                  </div>
                  <div className="border-t border-[rgb(var(--line)/0.08)] pt-2">
                    <span className="font-semibold text-theme-primary block text-[11px] uppercase tracking-wider mb-1">Ghana Contact</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a href={`https://wa.me/${site.ghanaPhone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-theme-primary text-xs">
                        <WhatsAppIcon className="h-3.5 w-3.5 text-gold" /> WhatsApp
                      </a>
                      <span className="text-[rgb(var(--line)/0.2)]">|</span>
                      <a href={`tel:${site.ghanaPhone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-1 transition hover:text-theme-primary text-xs">
                        <PhoneIcon className="h-3.5 w-3.5 text-gold" /> Call: {site.ghanaPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-2 border-t border-[rgb(var(--line)/0.08)]">
                <a href={site.facebook} target="_blank" rel="noreferrer" className="text-theme-secondary transition hover:text-gold" aria-label="Facebook">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="text-theme-secondary transition hover:text-gold" aria-label="Instagram">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
