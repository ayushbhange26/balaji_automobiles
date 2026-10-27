import { ClipboardList, Handshake, ShieldCheck, Wrench } from 'lucide-react';

const items = [
  {
    title: 'Experienced technicians',
    text: 'Careful diagnosis before any repair work begins.',
    icon: Wrench,
  },
  {
    title: 'Transparent estimates',
    text: 'Clear scope and pricing discussion before we proceed.',
    icon: ClipboardList,
  },
  {
    title: 'Quality workmanship',
    text: 'Methodical service with attention to safety-critical parts.',
    icon: ShieldCheck,
  },
  {
    title: 'Customer-focused service',
    text: 'Straightforward updates by phone or WhatsApp.',
    icon: Handshake,
  },
] as const;

export function TrustBar() {
  return (
    <section className="border-y border-white/8 bg-charcoal" aria-label="Why customers choose us">
      <div className="mx-auto grid max-w-6xl gap-px bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="bg-charcoal px-6 py-8">
            <item.icon className="size-5 text-crimson" aria-hidden="true" />
            <h2 className="mt-4 font-display text-lg uppercase tracking-[0.08em] text-ivory">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-silver">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
