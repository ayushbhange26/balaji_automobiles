import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { business, getTelHref, navLinks } from '../../config/business';
import { cn } from '../../lib/cn';
import { BrandMark } from '../ui/BrandMark';
import { buttonClass } from '../ui/buttonStyles';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-ink/95 backdrop-blur-md">
      <div className="hidden border-b border-white/6 bg-charcoal/80 md:block">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 text-xs tracking-wide text-silver sm:px-6">
          <p>Toyota-focused workshop · Cars and motorcycles welcome</p>
          <a href={getTelHref()} className="inline-flex items-center gap-2 hover:text-ivory">
            <Phone className="size-3.5" aria-hidden="true" />
            <span>{business.phone.display}</span>
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <BrandMark />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-sm tracking-wide text-silver transition-colors hover:text-ivory',
                  isActive && 'text-ivory after:block after:h-px after:bg-crimson after:content-[""]',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={getTelHref()} className={buttonClass('call', 'sm')}>
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
          <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>
          <Link to="/book" className={buttonClass('primary', 'sm')}>
            Book a Service
          </Link>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center border border-white/12 text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/8 bg-charcoal lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'border-b border-white/6 py-3 text-base text-silver',
                    isActive && 'text-ivory',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 grid gap-2">
              <a href={getTelHref()} className={buttonClass('call', 'md', 'w-full')}>
                <Phone className="size-4" aria-hidden="true" />
                Call {business.phone.display}
              </a>
              <WhatsAppButton className="w-full">Chat on WhatsApp</WhatsAppButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
