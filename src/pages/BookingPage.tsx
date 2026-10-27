import { BookingForm } from '../components/forms/BookingForm';
import { PageHero } from '../components/layout/PageHero';
import { PhoneLink } from '../components/ui/PhoneLink';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';

export function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a service"
        title="Request a workshop slot"
        description="Share your vehicle details and preferred time. WhatsApp opens with a prepared message so you can review it before sending. The garage confirms every request personally."
      />
      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-white/8 bg-steel p-6 sm:p-8">
            <BookingForm />
          </div>
          <aside className="space-y-6">
            <div className="border border-white/8 bg-charcoal p-6">
              <h2 className="font-display text-xl uppercase tracking-[0.06em] text-ivory">
                Prefer to talk first?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-silver">
                Call the workshop or start a WhatsApp chat if you are unsure which service you need.
              </p>
              <p className="mt-4 text-lg text-ivory">
                <PhoneLink />
              </p>
              <WhatsAppButton className="mt-4">Chat on WhatsApp</WhatsAppButton>
            </div>
            <div className="border border-white/8 bg-charcoal p-6">
              <h2 className="font-display text-xl uppercase tracking-[0.06em] text-ivory">
                Please note
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-silver">
                <li>A submitted form is a request, not a confirmed appointment.</li>
                <li>Estimates depend on inspection and parts availability.</li>
                <li>You can edit the WhatsApp message before you send it.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
