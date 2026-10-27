const steps = [
  {
    n: '01',
    title: 'Tell us what you need',
    text: 'Call, WhatsApp, or send a booking request with your vehicle details.',
  },
  {
    n: '02',
    title: 'Get a clear next step',
    text: 'The workshop reviews the request and shares availability and an estimate.',
  },
  {
    n: '03',
    title: 'Service with updates',
    text: 'Work proceeds after you approve the scope. We keep the conversation simple.',
  },
] as const;

export function Process() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-crimson">How it works</p>
        <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.06em] text-ivory">
          From enquiry to workshop floor
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-crimson/70 pt-5">
              <p className="font-display text-2xl text-crimson">{step.n}</p>
              <h3 className="mt-3 font-display text-xl uppercase tracking-[0.06em] text-ivory">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
