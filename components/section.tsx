import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="mb-12 max-w-3xl">
        {eyebrow ? (
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        ) : null}
        <h2 className="text-4xl font-bold tracking-tight text-theme-primary md:text-5xl">{title}</h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-8 text-theme-secondary md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
