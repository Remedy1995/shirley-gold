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
      <div className="mx-auto w-[80%] max-w-[1800px] py-20 lg:py-24">
        <p className="text-xs uppercase tracking-[0.26em] text-gold">{eyebrow}</p>
        <h1
          className={`mt-5 max-w-4xl text-2xl font-bold tracking-tight text-theme-primary sm:text-3xl md:text-4xl lg:text-5xl ${titleClassName ?? ""}`}
        >
          {title}
        </h1>
        <div className={`mt-6 ${descriptionClassName ?? "max-w-3xl"}`}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-sm leading-relaxed text-theme-secondary first:mt-0 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
