type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[rgb(var(--line)/0.1)] bg-hero-radial">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <p className="text-xs uppercase tracking-[0.26em] text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight text-theme-primary md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-theme-secondary">{description}</p>
      </div>
    </section>
  );
}
