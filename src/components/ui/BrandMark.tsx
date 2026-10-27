import { Link } from 'react-router-dom';
import { business } from '../../config/business';
import { cn } from '../../lib/cn';

type BrandMarkProps = {
  compact?: boolean;
  className?: string;
};

export function BrandMark({ compact = false, className }: BrandMarkProps) {
  return (
    <Link
      to="/"
      className={cn('group inline-flex items-center gap-3 text-ivory', className)}
      aria-label={`${business.name} home`}
    >
      <span
        className="grid size-10 place-items-center rounded-sm border border-crimson/70 bg-steel text-[0.7rem] font-display font-semibold tracking-[0.18em] text-ivory"
        aria-hidden="true"
      >
        BA
      </span>
      <span className="text-left leading-tight">
        <span className="block font-display text-[1.05rem] font-semibold uppercase tracking-[0.08em]">
          Balaji
        </span>
        {!compact ? (
          <span className="block text-[0.68rem] uppercase tracking-[0.28em] text-silver">
            Automobiles
          </span>
        ) : null}
      </span>
    </Link>
  );
}
