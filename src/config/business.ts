/**
 * Single source of truth for workshop contact details and public copy.
 *
 * Replace every value marked PLACEHOLDER before going live.
 * Do not store API keys or secrets in this file.
 */

export const business = {
  name: 'Balaji Automobiles',
  legalName: 'Balaji Automobiles',
  tagline: 'Reliable Car Care. Expert Service. Complete Peace of Mind.',
  shortDescription:
    'Professional automobile servicing for Toyota and other major car and motorcycle brands — diagnostics, repairs, and maintenance you can trust.',
  specialty: 'Toyota-focused workshop that also services other major car and motorcycle brands.',

  /**
   * Update `display`, `tel`, and `digits` together.
   * `tel` is used in tel: links. `digits` is country code + number with no +, spaces, or brackets.
   */
  phone: {
    display: '+91 75229 70156',
    tel: '+917522970156',
    digits: '917522970156',
  },

  /**
   * WhatsApp number. Digits only, including country code (91 for India).
   */
  whatsapp: {
    digits: '917522970156',
    defaultMessage:
      'Hello Balaji Automobiles, I would like to enquire about your automobile services. Please let me know the next steps.',
  },

  address: {
    line1: 'At Post Kothulana',
    line2: 'Tahsil Savner',
    cityLine: 'Dist. Nagpur, PIN 441101',
    mapsQuery: 'Kohutlana, Savner, Nagpur, Maharashtra 441101',
  },

  /**
   * PLACEHOLDER hours. Confirm with the workshop before publishing.
   */
  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', time: 'Closed — appointments on request' },
  ] as const,

  hoursNote:
    'Business hours are placeholders. Update them in src/config/business.ts once confirmed.',

  supportedBrands: [
    'Toyota',
    'Honda',
    'Hyundai',
    'Maruti Suzuki',
    'Mahindra',
    'Tata',
    'Kia',
    'Volkswagen',
    'Skoda',
    'Renault',
    'Ford',
    'Hero',
    'Honda Motorcycles',
    'TVS',
    'Bajaj',
    'Royal Enfield',
    'Yamaha',
  ] as const,

  vehicleTypes: ['Car', 'Motorcycle'] as const,
} as const;

export type VehicleType = (typeof business.vehicleTypes)[number];

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Book a Service', to: '/book' },
  { label: 'Contact', to: '/contact' },
] as const;

export function getTelHref(): string {
  return `tel:${business.phone.tel}`;
}

export function getMapsSearchUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address.mapsQuery)}`;
}

export function getMapsEmbedUrl(): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(business.address.mapsQuery)}&z=15&output=embed`;
}

export function getFormattedAddress(): string {
  return [business.address.line1, business.address.line2, business.address.cityLine].join(', ');
}
