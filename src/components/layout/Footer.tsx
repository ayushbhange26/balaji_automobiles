import { Link } from 'react-router-dom';
import { business, getFormattedAddress, getTelHref, navLinks } from '../../config/business';
import { getDefaultWhatsAppUrl } from '../../lib/whatsapp';
import { BrandMark } from '../ui/BrandMark';
import { PhoneLink } from '../ui/PhoneLink';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-charcoal text-silver">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{business.shortDescription}</p>
        </div>

        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.22em] text-ivory">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <PhoneLink className="text-ivory hover:text-crimson-hover" showIcon />
            </li>
            <li>
              <a
                href={getDefaultWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory hover:text-crimson-hover"
              >
                WhatsApp the workshop
              </a>
            </li>
            <li className="leading-relaxed">
              {getFormattedAddress()}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.22em] text-ivory">Hours</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {business.hours.map((slot) => (
              <li key={slot.days}>
                <span className="block text-ivory">{slot.days}</span>
                <span>{slot.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-mute">{business.hoursNote}</p>
        </div>

        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.22em] text-ivory">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-mute sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {business.legalName}. All rights reserved.
          </p>
          <p>
            Call{' '}
            <a href={getTelHref()} className="text-silver hover:text-ivory">
              {business.phone.display}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
