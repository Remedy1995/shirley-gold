import Link from "next/link";

export function CtaStrip() {
  return (
    <div className="theme-panel-strong shine-surface rounded-[2rem] p-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Partnership Enquiries</p>
          <h3 className="mt-4 text-3xl font-semibold text-theme-primary">
            Engage a trading partner built for regulated cross-border execution.
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-theme-secondary">
            Start a conversation about precious metals procurement, automotive supply, electronics distribution, or strategic investment opportunities.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <Link
            href="/contact"
            className="button-primary-theme rounded-full px-6 py-3 text-center text-sm font-semibold transition hover:brightness-105"
          >
            Contact the company
          </Link>
          <Link
            href="/compliance"
            className="button-secondary-theme rounded-full px-6 py-3 text-center text-sm font-semibold transition hover:border-gold/50 hover:text-gold"
          >
            Review compliance profile
          </Link>
        </div>
      </div>
    </div>
  );
}
