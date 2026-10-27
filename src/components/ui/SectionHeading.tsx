import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl', className)}>
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-xs font-semibold uppercase tracking-[0.28em]',
            light ? 'text-crimson' : 'text-crimson',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'font-display text-3xl uppercase tracking-[0.06em] sm:text-4xl',
          light ? 'text-ivory' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-base leading-relaxed', light ? 'text-silver' : 'text-mute')}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
