import { MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';
import { buildWhatsAppUrl, getDefaultWhatsAppUrl } from '../../lib/whatsapp';
import { buttonClass, type ButtonSize, type ButtonVariant } from './buttonStyles';
import { cn } from '../../lib/cn';

type WhatsAppButtonProps = {
  message?: string;
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showIcon?: boolean;
};

export function WhatsAppButton({
  message,
  children = 'Chat on WhatsApp',
  variant = 'whatsapp',
  size = 'md',
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  const href = message ? buildWhatsAppUrl(message) : getDefaultWhatsAppUrl();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonClass(variant, size), className)}
    >
      {showIcon ? <MessageCircle className="size-4 shrink-0" aria-hidden="true" /> : null}
      <span>{children}</span>
    </a>
  );
}
