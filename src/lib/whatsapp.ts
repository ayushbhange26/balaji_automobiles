import { business } from '../config/business';

export type BookingDetails = {
  name: string;
  phone: string;
  vehicleType: string;
  brand: string;
  model: string;
  registration?: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
};

export type ContactEnquiry = {
  name: string;
  phone: string;
  subject?: string;
  message: string;
};

function toWhatsAppId(value: string): string {
  return value.replace(/[+\s()-]/g, '');
}

export function getWhatsAppNumber(): string {
  return toWhatsAppId(business.whatsapp.digits);
}

export function buildWhatsAppUrl(message: string): string {
  const number = getWhatsAppNumber();
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

export function getDefaultWhatsAppUrl(): string {
  return buildWhatsAppUrl(business.whatsapp.defaultMessage);
}

export function getServiceEnquiryMessage(serviceName: string): string {
  return `Hello Balaji Automobiles, I would like to enquire about ${serviceName}. Please let me know the next steps.`;
}

export function getServiceEnquiryUrl(serviceName: string): string {
  return buildWhatsAppUrl(getServiceEnquiryMessage(serviceName));
}

export function formatBookingMessage(details: BookingDetails): string {
  const lines = [
    'Hello Balaji Automobiles,',
    '',
    'I would like to request an automobile service booking.',
    '',
    `Name: ${details.name}`,
    `Contact number: ${details.phone}`,
    `Vehicle type: ${details.vehicleType}`,
    `Vehicle brand and model: ${details.brand} ${details.model}`,
  ];

  if (details.registration?.trim()) {
    lines.push(`Registration number: ${details.registration.trim()}`);
  }

  lines.push(
    `Requested service: ${details.service}`,
    `Preferred date: ${details.preferredDate}`,
    `Preferred time: ${details.preferredTime}`,
  );

  if (details.notes?.trim()) {
    lines.push(`Additional notes: ${details.notes.trim()}`);
  }

  lines.push(
    '',
    'Please share availability and an estimate. I understand this request is not confirmed until you reply.',
  );

  return lines.join('\n');
}

export function getBookingWhatsAppUrl(details: BookingDetails): string {
  return buildWhatsAppUrl(formatBookingMessage(details));
}

export function formatContactMessage(enquiry: ContactEnquiry): string {
  const lines = [
    'Hello Balaji Automobiles,',
    '',
    'I would like to get in touch.',
    '',
    `Name: ${enquiry.name}`,
    `Contact number: ${enquiry.phone}`,
  ];

  if (enquiry.subject?.trim()) {
    lines.push(`Subject: ${enquiry.subject.trim()}`);
  }

  lines.push('', enquiry.message.trim());

  return lines.join('\n');
}

export function getContactWhatsAppUrl(enquiry: ContactEnquiry): string {
  return buildWhatsAppUrl(formatContactMessage(enquiry));
}

export function openWhatsApp(url: string): boolean {
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  return opened !== null;
}
