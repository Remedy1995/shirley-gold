import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-[80%] max-w-[1800px] pt-8 text-sm text-theme-tertiary">
      <ol className="flex flex-wrap items-center gap-3">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-3">
            {item.href ? (
              <Link href={item.href} className="transition hover:text-theme-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-theme-primary">{item.label}</span>
            )}
            {index < items.length - 1 ? <span>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
