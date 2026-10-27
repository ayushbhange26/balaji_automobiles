import { Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import { business, getTelHref } from '../../config/business';
import { cn } from '../../lib/cn';

type PhoneLinkProps = {
  className?: string;
  showIcon?: boolean;
  children?: ReactNode;
};

export function PhoneLink({ className, showIcon = false, children }: PhoneLinkProps) {
  return (
    <a
      href={getTelHref()}
      className={cn(
        'inline-flex items-center gap-2 text-inherit underline-offset-4 hover:underline select-all',
        className,
      )}
    >
      {showIcon ? <Phone className="size-4 shrink-0" aria-hidden="true" /> : null}
      <span>{children ?? business.phone.display}</span>
    </a>
  );
}
