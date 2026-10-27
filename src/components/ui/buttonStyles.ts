import { cn } from '../../lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'call';
export type ButtonSize = 'sm' | 'md' | 'lg';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-crimson text-white hover:bg-crimson-hover focus-visible:outline-crimson shadow-sm shadow-black/20',
  secondary:
    'bg-ivory text-ink hover:bg-white focus-visible:outline-ivory',
  outline:
    'border border-silver/40 bg-transparent text-ivory hover:border-ivory hover:bg-white/5 focus-visible:outline-silver',
  ghost:
    'bg-transparent text-ivory hover:bg-white/8 focus-visible:outline-silver',
  whatsapp:
    'bg-[#1f6b46] text-white hover:bg-[#258555] focus-visible:outline-[#25d366]',
  call:
    'bg-steel text-ivory hover:bg-[#262c35] focus-visible:outline-silver',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-3.5 text-sm gap-1.5',
  md: 'h-11 px-4 text-sm gap-2',
  lg: 'h-12 px-5 text-[0.95rem] gap-2',
};

export function buttonClass(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
): string {
  return cn(
    'inline-flex items-center justify-center font-medium tracking-wide rounded-sm transition-colors duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  );
}
