import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function IconBadge({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`icon-badge ${className}`.trim()}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export function GemIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3 4.5 9 12 21 19.5 9 12 3Z" />
      <path d="M7.5 9h9" />
      <path d="M9.5 6.2 12 9l2.5-2.8" />
    </svg>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M5 15.5 6.6 10a2 2 0 0 1 1.9-1.4h7a2 2 0 0 1 1.9 1.4L19 15.5" />
      <path d="M4 15.5h16v3a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-.8l-.3-1.2H7.5l-.3 1.2a1 1 0 0 1-1 .8H5a1 1 0 0 1-1-1v-3Z" />
      <circle cx="7.5" cy="15.5" r="1" />
      <circle cx="16.5" cy="15.5" r="1" />
    </svg>
  );
}

export function DeviceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M10 19h4" />
      <path d="M12 16v3" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3 5.5 5.5v5.9c0 4.4 2.7 7.8 6.5 9.6 3.8-1.8 6.5-5.2 6.5-9.6V5.5L12 3Z" />
      <path d="m9.5 12 1.7 1.7 3.4-3.7" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4" />
      <path d="M12 3.5c2.7 2.4 4.2 5.4 4.2 8.5s-1.5 6.1-4.2 8.5c-2.7-2.4-4.2-5.4-4.2-8.5S9.3 5.9 12 3.5Z" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5.5 8 6.5 5 6.5-5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M8.6 4.6c.5-.5 1.3-.6 1.9-.2l2 1.4c.7.4.9 1.3.5 2l-.9 1.7a1.7 1.7 0 0 0 .2 1.9 15.4 15.4 0 0 0 2.3 2.3c.6.5 1.5.6 2 .2l1.6-.9c.7-.4 1.5-.2 2 .5l1.4 2c.4.6.3 1.4-.2 1.9l-1.2 1.2c-.9.9-2.2 1.3-3.5 1.1-3.4-.7-6.5-3-9.4-6-3-2.9-5.3-6-6-9.4-.2-1.3.2-2.6 1.1-3.5l1.2-1.2Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 21a8.8 8.8 0 0 0 4.4-1.2L21 21l-1.3-4.3A8.8 8.8 0 1 0 12 21Z" />
      <path d="M9.3 8.6c.2-.5.4-.6.7-.6h.6c.2 0 .4 0 .5.4l.5 1.3c.1.3.1.5-.1.8l-.4.5c-.2.2-.2.4-.1.6.3.6 1 1.7 2.2 2.3.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.7-.1l1.2.6c.3.1.5.3.4.6l-.1.8c0 .3-.2.5-.5.7-.5.3-1 .5-1.6.4-1.1-.1-2.3-.7-3.9-2.2-1.8-1.7-2.5-3.2-2.6-4.3 0-.5.1-1 .4-1.5Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 20.5s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z" />
      <circle cx="12" cy="10.5" r="2" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M5 20V6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5V20" />
      <path d="M9 5V3.5h6V5" />
      <path d="M9 9h1M14 9h1M9 12.5h1M14 12.5h1M11.5 20v-3h1v3" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4 19.5h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5.5" />
      <path d="M17 16v-7" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
