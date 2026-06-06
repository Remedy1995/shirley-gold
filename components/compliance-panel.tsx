import Link from "next/link";

import { ArrowUpRightIcon, IconBadge, ShieldIcon } from "@/components/icons";
import { site } from "@/content/site";

export function CompliancePanel() {
  return (
    <div className="theme-panel shine-surface grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="flex items-center gap-4">
          <IconBadge>
            <ShieldIcon />
          </IconBadge>
          <p className="text-xs uppercase tracking-[0.24em] text-gold">Governance and Trust</p>
        </div>
        <h3 className="mt-4 text-3xl font-semibold text-theme-primary">
          Structured compliance across every transaction chain.
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-8 text-theme-secondary">
          The company operates under a Dubai FZCO structure with documentation, due diligence, and transaction controls shaped for cross-border trade execution.
        </p>
      </div>
      <div className="space-y-4">
        {site.compliancePoints.map((item) => (
          <div key={item} className="theme-panel-soft rounded-3xl p-4 text-sm leading-7 text-theme-secondary">
            {item}
          </div>
        ))}
        <Link href="/compliance" className="inline-flex items-center gap-2 text-sm font-medium text-gold transition hover:text-amber">
          Review compliance framework
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
