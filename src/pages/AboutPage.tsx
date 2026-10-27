import { CtaBand } from '../components/home/CtaBand';
import { PageHero } from '../components/layout/PageHero';
import { business } from '../config/business';
import { media } from '../data/media';

const reasons = [
  {
    title: 'Toyota-first expertise',
    text: 'The workshop is organised around Toyota service needs, while remaining open to other popular cars and motorcycles.',
  },
  {
    title: 'Honest estimates',
    text: 'We discuss the work and the cost before proceeding. If something extra appears during inspection, you hear about it first.',
  },
  {
    title: 'Practical communication',
    text: 'Call or WhatsApp — whichever is easier. Booking requests from this website are reviewed by the workshop, not auto-confirmed.',
  },
  {
    title: 'Care for daily drivers',
    text: 'Family cars, work vehicles, and motorcycles all get the same methodical attention to safety and reliability.',
  },
] as const;

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A workshop built on careful work and clear conversation"
        description="Balaji Automobiles is an automobile service centre for drivers who want dependable servicing without guesswork."
      />

      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase tracking-[0.06em] text-ivory">
              Who we are
            </h2>
            <p className="mt-4 text-base leading-relaxed text-silver">
              [PLACEHOLDER: Add a short founder or workshop introduction here.] Balaji Automobiles
              provides professional vehicle servicing, diagnostics, repairs, and maintenance. The
              team focuses on Toyota vehicles and also services other major car and motorcycle
              brands.
            </p>
            <p className="mt-4 text-base leading-relaxed text-silver">
              Our commitment is simple: inspect properly, explain plainly, and complete the work
              with quality parts and workmanship appropriate to the job. We would rather give a
              realistic estimate than a number that later surprises you.
            </p>
          </div>
          <img
            src={media.workshop.src}
            alt={media.workshop.alt}
            className="aspect-4/3 w-full object-cover"
            width={1600}
            height={1200}
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.06em] text-ivory">
            Vehicles we look after
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver">
            {business.specialty} If your brand is not listed, message us — many other models can
            still be inspected and serviced.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {business.supportedBrands.map((brand) => (
              <li
                key={brand}
                className="border border-white/10 px-3 py-1.5 text-sm text-mist"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.06em] text-ivory">
            Why choose Balaji Automobiles
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="border border-white/8 bg-steel p-6">
                <h3 className="font-display text-xl uppercase tracking-[0.06em] text-ivory">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl uppercase tracking-[0.06em] text-ivory">
            Inside the workshop
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-silver">
            [PLACEHOLDER: Replace these stock photographs with original workshop images.]
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <img
              src={media.diagnostics.src}
              alt={media.diagnostics.alt}
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
            <img
              src={media.tools.src}
              alt={media.tools.alt}
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
            <img
              src={media.detailing.src}
              alt={media.detailing.alt}
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
