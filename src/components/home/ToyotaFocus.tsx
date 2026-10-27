import { Link } from 'react-router-dom';
import { business } from '../../config/business';
import { media } from '../../data/media';
import { getServiceEnquiryMessage } from '../../lib/whatsapp';
import { buttonClass } from '../ui/buttonStyles';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function ToyotaFocus() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="relative overflow-hidden">
          <img
            src={media.toyota.src}
            alt={media.toyota.alt}
            className="aspect-4/3 w-full object-cover"
            width={1600}
            height={1200}
            loading="lazy"
          />
          <p className="absolute bottom-4 left-4 bg-ink/85 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-ivory">
            Toyota specialist care
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-crimson">Our focus</p>
          <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.06em] text-ivory sm:text-4xl">
            Built around Toyota. Ready for more.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-silver">
            Balaji Automobiles specialises in Toyota vehicles while remaining a practical workshop
            for other major car and motorcycle brands. Whether you drive an Innova, Fortuner, or
            another make, you get the same careful inspection and honest recommendation.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Brands we commonly see include {business.supportedBrands.slice(0, 8).join(', ')}, and
            other popular cars and motorcycles.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/about" className={buttonClass('outline')}>
              About the workshop
            </Link>
            <WhatsAppButton message={getServiceEnquiryMessage('Toyota-specific servicing')}>
              Enquire on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
