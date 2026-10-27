import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business, getTelHref } from '../../config/business';
import { buttonClass } from '../ui/buttonStyles';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function CtaBand() {
  return (
    <section className="bg-crimson">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl uppercase tracking-[0.06em] text-white">
            Ready to book your vehicle in?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">
            Call {business.phone.display}, message on WhatsApp, or send a service request. The
            workshop confirms every booking personally.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/book" className={buttonClass('secondary')}>
            Book a Service
          </Link>
          <a href={getTelHref()} className={buttonClass('call')}>
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
          <WhatsAppButton variant="whatsapp">Chat on WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
