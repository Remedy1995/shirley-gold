import Link from "next/link";

import { BuildingIcon, IconBadge, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/content/site";

export function ContactModule() {
  return (
    <div className="theme-panel shine-surface grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <IconBadge>
            <BuildingIcon />
          </IconBadge>
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Company Contact</p>
        </div>
        <h3 className="text-3xl font-semibold text-theme-primary">Business enquiries across all three divisions.</h3>
        <p className="text-base leading-8 text-theme-secondary">
          Partnership discussions can cover gold trading and procurement, automotive import orders, electronics distribution, and investment proposals.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="theme-panel-soft rounded-3xl p-5">
          <IconBadge className="h-11 w-11 rounded-2xl">
            <MailIcon />
          </IconBadge>
          <p className="text-xs uppercase tracking-[0.2em] text-theme-tertiary">Email</p>
          <Link href={`mailto:${site.email}`} className="mt-3 block text-theme-primary transition hover:text-gold">
            {site.email}
          </Link>
        </div>
        <div className="theme-panel-soft rounded-3xl p-5">
          <IconBadge className="h-11 w-11 rounded-2xl">
            <PhoneIcon />
          </IconBadge>
          <p className="text-xs uppercase tracking-[0.2em] text-theme-tertiary">Phone</p>
          <Link href={`tel:${site.phone.replace(/\s+/g, "")}`} className="mt-3 block text-theme-primary transition hover:text-gold">
            {site.phone}
          </Link>
        </div>
        <div className="theme-panel-soft rounded-3xl p-5 sm:col-span-2">
          <IconBadge className="h-11 w-11 rounded-2xl">
            <MapPinIcon />
          </IconBadge>
          <p className="text-xs uppercase tracking-[0.2em] text-theme-tertiary">Address</p>
          <p className="mt-3 text-theme-primary">{site.address}</p>
        </div>
        <div className="theme-panel-soft rounded-3xl p-5 sm:col-span-2">
          <IconBadge className="h-11 w-11 rounded-2xl">
            <BuildingIcon />
          </IconBadge>
          <p className="text-xs uppercase tracking-[0.2em] text-theme-tertiary">Registration</p>
          <p className="mt-3 text-theme-primary">
            {site.license} · {site.registration}
          </p>
        </div>
      </div>
    </div>
  );
}
