import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTelHref } from '../../config/business';
import { getDefaultWhatsAppUrl } from '../../lib/whatsapp';

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/96 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <nav aria-label="Quick actions" className="grid grid-cols-3">
        <a
          href={getTelHref()}
          className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] uppercase tracking-[0.14em] text-ivory"
        >
          <Phone className="size-4 text-crimson" aria-hidden="true" />
          Call
        </a>
        <a
          href={getDefaultWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] uppercase tracking-[0.14em] text-ivory"
        >
          <MessageCircle className="size-4 text-[#25d366]" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          to="/book"
          className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] uppercase tracking-[0.14em] text-ivory"
        >
          <CalendarCheck className="size-4 text-crimson" aria-hidden="true" />
          Book Service
        </Link>
      </nav>
    </div>
  );
}
