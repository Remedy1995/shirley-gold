import { BuildingIcon, IconBadge, MailIcon, MapPinIcon, WhatsAppIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/content/site";

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
        <div className="theme-panel-soft rounded-3xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center gap-3">
              <IconBadge className="h-11 w-11 rounded-2xl">
                <WhatsAppIcon />
              </IconBadge>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-theme-primary">WhatsApp &amp; Call</p>
            </div>
            <div className="mt-4 space-y-4 text-sm text-theme-secondary text-left pl-2">
              <div>
                <span className="font-semibold text-theme-primary block text-xs uppercase tracking-wider mb-2">UAE Contact</span>
                <div className="flex flex-col gap-2">
                  <a href={`https://wa.me/${site.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-theme-secondary transition hover:text-gold">
                    <WhatsAppIcon className="h-4 w-4 text-gold shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                  <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 font-medium text-theme-secondary transition hover:text-gold">
                    <PhoneIcon className="h-4 w-4 text-gold shrink-0" />
                    <span>Call: {site.phone}</span>
                  </a>
                </div>
              </div>
              <div className="border-t border-[rgb(var(--line)/0.08)] pt-3 mt-3">
                <span className="font-semibold text-theme-primary block text-xs uppercase tracking-wider mb-2">Ghana Contact</span>
                <div className="flex flex-col gap-2">
                  <a href={`https://wa.me/${site.ghanaPhone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-theme-secondary transition hover:text-gold">
                    <WhatsAppIcon className="h-4 w-4 text-gold shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                  <a href={`tel:${site.ghanaPhone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 font-medium text-theme-secondary transition hover:text-gold">
                    <PhoneIcon className="h-4 w-4 text-gold shrink-0" />
                    <span>Call: {site.ghanaPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="theme-panel-soft rounded-3xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-center gap-3">
              <IconBadge className="h-11 w-11 rounded-2xl">
                <MapPinIcon />
              </IconBadge>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-theme-primary">Address</p>
            </div>
            <div className="mt-4 text-center space-y-3 text-sm font-medium leading-relaxed text-theme-secondary">
              <div>
                <span className="font-semibold text-theme-primary block text-xs uppercase tracking-wider mb-0.5">Dubai Office</span>
                <p>{site.address}</p>
              </div>
              <div className="border-t border-[rgb(var(--line)/0.08)] pt-2 mt-2">
                <span className="font-semibold text-theme-primary block text-xs uppercase tracking-wider mb-0.5">Ghana Office</span>
                <p>
                  Ashaiman - Tulaku Roundabout<br />
                  Adjacent to the Bank of Africa<br />
                  (1st Floor, Centre for Media &amp; Business Building)
                </p>
              </div>
            </div>
          </div>
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
