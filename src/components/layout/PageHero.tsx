import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-white/8 bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-crimson">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl uppercase tracking-[0.06em] text-ivory sm:text-5xl">
          {title}
        </h1>
        {description ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-silver">{description}</p> : null}
      </div>
    </section>
  );
}
