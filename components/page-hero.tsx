type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string | string[];
  descriptionClassName?: string;
  sectionClassName?: string;
  titleClassName?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  descriptionClassName,
  sectionClassName,
  titleClassName
}: PageHeroProps) {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section
      className={`border-b border-[rgb(var(--line)/0.1)] bg-hero-radial ${sectionClassName ?? ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <p className="text-xs uppercase tracking-[0.26em] text-gold">{eyebrow}</p>
        <h1
          className={`mt-5 max-w-4xl text-4xl font-bold tracking-tight text-theme-primary sm:text-5xl md:text-6xl ${titleClassName ?? ""}`}
        >
          {title}
        </h1>
        <div className={`mt-6 ${descriptionClassName ?? "max-w-3xl"}`}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-base leading-8 text-theme-secondary first:mt-0 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
