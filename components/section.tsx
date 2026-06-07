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
    <section id={id} className="mx-auto w-[80%] max-w-[1800px] py-20 lg:py-28">
      <div className="mb-12 max-w-3xl">
        {eyebrow ? (
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl font-bold tracking-tight text-theme-primary sm:text-3xl md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-theme-secondary sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
