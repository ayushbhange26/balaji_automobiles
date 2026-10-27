import { Clock3, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { PageHero } from '../components/layout/PageHero';
import { PhoneLink } from '../components/ui/PhoneLink';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { buttonClass } from '../components/ui/buttonStyles';
import {
  business,
  getFormattedAddress,
  getMapsEmbedUrl,
  getMapsSearchUrl,
} from '../config/business';

export function ContactPage() {
  const [mapState, setMapState] = useState<'loading' | 'ready' | 'error'>('loading');

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Visit, call, or message the workshop"
        description="Use the number below, WhatsApp, or the enquiry form. Address and hours are stored in one configuration file so they stay consistent across the site."
      />

      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="border border-white/8 bg-steel p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-crimson">
                <Phone className="size-3.5" aria-hidden="true" />
                Phone
              </p>
              <p className="mt-3 text-2xl text-ivory">
                <PhoneLink className="select-all" />
              </p>
              <p className="mt-2 text-sm text-silver">
                Tap the number to call. On desktop, your device handles the dialer if one is available.
              </p>
              <a href={`tel:${business.phone.tel}`} className={`${buttonClass('call')} mt-4`}>
                Call Now
              </a>
            </div>

            <div className="border border-white/8 bg-steel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-crimson">WhatsApp</p>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                The fastest way to send vehicle details, photos, or a quick question.
              </p>
              <WhatsAppButton className="mt-4">Chat on WhatsApp</WhatsAppButton>
            </div>

            <div className="border border-white/8 bg-steel p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-crimson">
                <MapPin className="size-3.5" aria-hidden="true" />
                Workshop address
              </p>
              <address className="mt-3 not-italic leading-relaxed text-ivory">
                {getFormattedAddress()}
              </address>
              <a
                href={getMapsSearchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonClass('outline')} mt-4`}
              >
                Get directions
              </a>
            </div>

            <div className="border border-white/8 bg-steel p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-crimson">
                <Clock3 className="size-3.5" aria-hidden="true" />
                Business hours
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {business.hours.map((slot) => (
                  <li key={slot.days} className="flex justify-between gap-4 text-silver">
                    <span className="text-ivory">{slot.days}</span>
                    <span>{slot.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-mute">{business.hoursNote}</p>
            </div>
          </div>

          <div className="border border-white/8 bg-steel p-6 sm:p-8">
            <h2 className="font-display text-2xl uppercase tracking-[0.06em] text-ivory">
              Send an enquiry
            </h2>
            <p className="mt-2 mb-6 text-sm text-silver">
              The form opens WhatsApp with your message. No account is required.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-2xl uppercase tracking-[0.06em] text-ivory">Find us</h2>
          <div className="relative mt-5 min-h-80 overflow-hidden border border-white/8 bg-steel">
            {mapState === 'loading' ? (
              <p className="absolute inset-0 grid place-items-center text-sm text-silver">
                Loading map…
              </p>
            ) : null}
            {mapState === 'error' ? (
              <p className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-silver">
                The map could not be loaded.{' '}
                <a
                  className="text-crimson-hover underline"
                  href={getMapsSearchUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open directions in Google Maps
                </a>
              </p>
            ) : null}
            <iframe
              title={`Map showing ${business.name}`}
              src={getMapsEmbedUrl()}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapState('ready')}
              onError={() => setMapState('error')}
            />
          </div>
        </div>
      </section>
    </>
  );
}
