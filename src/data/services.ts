export type ServiceItem = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: ServiceIconName;
  featured?: boolean;
};

export type ServiceIconName =
  | 'wrench'
  | 'engine'
  | 'oil'
  | 'brake'
  | 'battery'
  | 'ac'
  | 'suspension'
  | 'wheel'
  | 'wash'
  | 'preventive'
  | 'toyota';

export const services: ServiceItem[] = [
  {
    id: 'general-servicing',
    name: 'General servicing',
    shortName: 'General service',
    description:
      'Scheduled inspection and servicing to keep engines, fluids, filters, and safety systems in reliable working order.',
    icon: 'wrench',
    featured: true,
  },
  {
    id: 'engine-diagnostics',
    name: 'Engine diagnostics and repair',
    shortName: 'Engine diagnostics',
    description:
      'Computerised diagnostics and mechanical repair for warning lights, rough running, starting issues, and performance problems.',
    icon: 'engine',
    featured: true,
  },
  {
    id: 'oil-filter',
    name: 'Oil and filter changes',
    shortName: 'Oil & filters',
    description:
      'Engine oil, oil filter, and related fluid service using the grade recommended for your vehicle.',
    icon: 'oil',
    featured: true,
  },
  {
    id: 'brakes',
    name: 'Brake inspection and repair',
    shortName: 'Brakes',
    description:
      'Pad, disc, drum, and fluid inspection with repair or replacement when braking feel, noise, or stopping distance changes.',
    icon: 'brake',
    featured: true,
  },
  {
    id: 'battery',
    name: 'Battery inspection and replacement',
    shortName: 'Battery',
    description:
      'Battery health checks, terminal cleaning, and replacement when starting power is weak or unreliable.',
    icon: 'battery',
  },
  {
    id: 'ac-servicing',
    name: 'AC servicing',
    shortName: 'AC service',
    description:
      'Cooling performance checks, gas top-up where required, filter service, and diagnosis of weak or uneven cabin cooling.',
    icon: 'ac',
    featured: true,
  },
  {
    id: 'suspension-steering',
    name: 'Suspension and steering repairs',
    shortName: 'Suspension & steering',
    description:
      'Diagnosis and repair for knocking, pulling, vibration, or loose steering so the vehicle stays stable and predictable.',
    icon: 'suspension',
  },
  {
    id: 'wheel-alignment',
    name: 'Wheel alignment and balancing',
    shortName: 'Alignment & balancing',
    description:
      'Alignment and balancing to reduce uneven tyre wear, steering pull, and vibration at speed.',
    icon: 'wheel',
    featured: true,
  },
  {
    id: 'wash-detailing',
    name: 'Car washing and detailing',
    shortName: 'Wash & detailing',
    description:
      'Exterior wash, interior clean, and detailing to restore presentation after regular use or a long trip.',
    icon: 'wash',
  },
  {
    id: 'preventive',
    name: 'Preventive maintenance',
    shortName: 'Preventive care',
    description:
      'Proactive checks on wear items, fluids, belts, and filters so small issues are found before they become breakdowns.',
    icon: 'preventive',
  },
  {
    id: 'toyota-servicing',
    name: 'Toyota-specific servicing',
    shortName: 'Toyota service',
    description:
      'Service work tailored to Toyota cars and SUVs, with attention to model-specific maintenance needs and genuine-quality parts where specified.',
    icon: 'toyota',
    featured: true,
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getServiceById(id: string): ServiceItem | undefined {
  return services.find((service) => service.id === id);
}
