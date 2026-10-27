import { Link } from 'react-router-dom';
import { featuredServices } from '../../data/services';
import { getServiceEnquiryMessage } from '../../lib/whatsapp';
import { buttonClass } from '../ui/buttonStyles';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceIcon } from '../ui/ServiceIcon';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function FeaturedServices() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Workshop services"
            title="Care for every part of the journey"
            description="From routine servicing to diagnostics and Toyota-specific work. Ask for a service on WhatsApp — the owner will discuss the amount there."
            light
          />
          <Link to="/services" className={buttonClass('outline', 'md', 'self-start md:self-auto')}>
            View all services
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <article key={service.id} className="border border-white/8 bg-steel p-5">
              <div className="mb-4 text-crimson">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="font-display text-lg uppercase tracking-[0.06em] text-ivory">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">{service.description}</p>
              <WhatsAppButton
                message={getServiceEnquiryMessage(service.name)}
                size="sm"
                className="mt-4"
              >
                Enquire on WhatsApp
              </WhatsAppButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
