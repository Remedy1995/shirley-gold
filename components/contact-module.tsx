import { BuildingIcon, IconBadge, MailIcon, MapPinIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/content/site";

const whatsappLink = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

export function ContactModule() {
  return (
    <div className="space-y-8">
      <div className="max-w-none space-y-4 text-left">
        <div className="flex items-center gap-4">
          <IconBadge className="h-12 w-12 rounded-[1rem]">
            <BuildingIcon />
          </IconBadge>
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Company Contact</p>
        </div>
        <h3 className="text-3xl font-semibold text-theme-primary">Business enquiries across all three divisions.</h3>
        <p className="text-base leading-8 text-theme-secondary">
          Partnership discussions can cover gold trading and procurement, automotive import orders, electronics distribution, and investment proposals.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="theme-panel-soft rounded-3xl p-5">
          <div className="flex items-center justify-center gap-3">
            <IconBadge className="h-11 w-11 rounded-2xl">
              <MailIcon />
            </IconBadge>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-theme-primary">Email</p>
          </div>
          <a href={`mailto:${site.email}`} className="mt-3 block text-center text-base font-medium text-theme-secondary transition hover:text-gold">
            {site.email}
          </a>
        </div>
        <div className="theme-panel-soft rounded-3xl p-5">
          <div className="flex items-center justify-center gap-3">
            <IconBadge className="h-11 w-11 rounded-2xl">
              <WhatsAppIcon />
            </IconBadge>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-theme-primary">WhatsApp</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-3 block text-center text-base font-medium text-theme-secondary transition hover:text-gold">
            {site.phone}
          </a>
        </div>
        <div className="theme-panel-soft rounded-3xl p-5">
          <div className="flex items-center justify-center gap-3">
            <IconBadge className="h-11 w-11 rounded-2xl">
              <MapPinIcon />
            </IconBadge>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-theme-primary">Address</p>
          </div>
          <p className="mt-3 text-center text-base font-medium leading-7 text-theme-secondary">{site.address}</p>
        </div>
        <div className="theme-panel-soft rounded-3xl p-5">
          <div className="flex items-center justify-center gap-3">
            <IconBadge className="h-11 w-11 rounded-2xl">
              <BuildingIcon />
            </IconBadge>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-theme-primary">Registration</p>
          </div>
          <p className="mt-3 text-center text-base font-medium leading-7 text-theme-secondary">
            {site.license} · {site.registration}
          </p>
        </div>
      </div>
    </div>
  );
}
