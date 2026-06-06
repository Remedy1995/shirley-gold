import Link from "next/link";

import { navigation, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgb(var(--line)/0.1)] bg-[rgb(var(--bg-bottom)/0.9)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Shirley&apos;s Gold Trading</p>
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
          <div className="space-y-3 text-sm text-theme-secondary">
            <p className="font-medium text-theme-primary">Contact</p>
            <p>{site.address}</p>
            <p>{site.email}</p>
            <p>{site.phone}</p>
            <p>{site.license}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
