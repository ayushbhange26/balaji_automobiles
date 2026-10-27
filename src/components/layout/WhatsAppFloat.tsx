import { MessageCircle } from 'lucide-react';
import { getDefaultWhatsAppUrl } from '../../lib/whatsapp';

export function WhatsAppFloat() {
  return (
    <a
      href={getDefaultWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Balaji Automobiles on WhatsApp"
      className="fixed right-4 z-50 grid size-14 place-items-center rounded-full bg-[#1f6b46] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366] bottom-24 md:bottom-6 md:right-6"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
