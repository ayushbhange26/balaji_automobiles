import { CtaBand } from '../components/home/CtaBand';
import { PageHero } from '../components/layout/PageHero';
import { ServiceCard } from '../components/services/ServiceCard';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { services } from '../data/services';

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Workshop services for cars and motorcycles"
        description="Every job starts with understanding the vehicle and the symptom. Ask for the service you need — the owner will discuss the amount on WhatsApp only."
      />
      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-silver">
              Need help choosing a service? Message the workshop with your vehicle details.
            </p>
            <WhatsAppButton>Chat on WhatsApp</WhatsAppButton>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
