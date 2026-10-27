import { Link } from 'react-router-dom';
import type { ServiceItem } from '../../data/services';
import { getServiceEnquiryMessage } from '../../lib/whatsapp';
import { ServiceIcon } from '../ui/ServiceIcon';
import { WhatsAppButton } from '../ui/WhatsAppButton';

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col border border-white/8 bg-steel p-6 transition-colors duration-200 hover:border-crimson/50">
      <div className="mb-5 grid size-12 place-items-center border border-crimson/40 bg-ink text-crimson">
        <ServiceIcon name={service.icon} className="size-5" />
      </div>
      <h3 className="font-display text-xl uppercase tracking-[0.06em] text-ivory">{service.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-silver">{service.description}</p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <WhatsAppButton
          message={getServiceEnquiryMessage(service.name)}
          size="sm"
          className="flex-1"
        >
          Enquire on WhatsApp
        </WhatsAppButton>
        <Link
          to={`/book?service=${service.id}`}
          className="inline-flex h-10 items-center justify-center border border-silver/30 px-3.5 text-sm text-ivory transition-colors hover:border-ivory"
        >
          Book
        </Link>
      </div>
    </article>
  );
}
