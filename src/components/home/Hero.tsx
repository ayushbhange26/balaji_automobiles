import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { business, getTelHref } from '../../config/business';
import { media } from '../../data/media';
import { buttonClass } from '../ui/buttonStyles';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function Hero() {
  return (
    <section className="relative isolate min-h-[34rem] overflow-hidden lg:min-h-[40rem]">
      <img
        src={media.hero.src}
        alt={media.hero.alt}
        className="absolute inset-0 size-full object-cover"
        width={2000}
        height={1333}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/88 to-ink/35" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:min-h-[40rem]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-crimson">
          {business.name}
        </p>
        <h1 className="max-w-3xl font-display text-4xl uppercase leading-[1.05] tracking-[0.04em] text-ivory sm:text-5xl lg:text-6xl">
          {business.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
          Professional vehicle servicing, diagnostics, repairs, and maintenance for Toyota and other
          major car and motorcycle brands. Clear communication, careful workmanship, and a workshop
          that treats every vehicle with respect.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/book" className={buttonClass('primary', 'lg')}>
            Book a Service
          </Link>
          <a href={getTelHref()} className={buttonClass('secondary', 'lg')}>
            <Phone className="size-4" aria-hidden="true" />
            Call Us Now
          </a>
          <WhatsAppButton size="lg">Chat on WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
