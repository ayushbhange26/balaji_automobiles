import { useState, type FormEvent } from 'react';
import { isNonEmpty, isValidIndianMobile } from '../../lib/validation';
import {
  getContactWhatsAppUrl,
  openWhatsApp,
} from '../../lib/whatsapp';
import { buttonClass } from '../ui/buttonStyles';
import { controlProps, Field, fieldControlClass } from './Field';

type FormState = {
  name: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [values, setValues] = useState<FormState>({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'ready' | 'blocked'>('idle');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus('idle');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (!isNonEmpty(values.name)) nextErrors.name = 'Please enter your name.';
    if (!isValidIndianMobile(values.phone)) {
      nextErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (!isNonEmpty(values.message, 8)) {
      nextErrors.message = 'Please add a short message so the workshop can help.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const url = getContactWhatsAppUrl({
      name: values.name.trim(),
      phone: values.phone.trim(),
      subject: values.subject.trim() || undefined,
      message: values.message.trim(),
    });
    setWhatsAppUrl(url);
    setStatus(openWhatsApp(url) ? 'ready' : 'blocked');
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Your name" error={errors.name}>
          <input
            {...controlProps('contact-name', errors.name)}
            className={fieldControlClass}
            autoComplete="name"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
          />
        </Field>
        <Field id="contact-phone" label="Phone number" error={errors.phone}>
          <input
            {...controlProps('contact-phone', errors.phone)}
            className={fieldControlClass}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
          />
        </Field>
      </div>
      <Field id="contact-subject" label="Subject" optional>
        <input
          {...controlProps('contact-subject')}
          className={fieldControlClass}
          value={values.subject}
          onChange={(event) => update('subject', event.target.value)}
        />
      </Field>
      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea
          {...controlProps('contact-message', errors.message)}
          className={`${fieldControlClass} min-h-32 resize-y`}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
        />
      </Field>
      <p className="text-sm text-silver">
        This enquiry opens WhatsApp with your message. The workshop will reply when available.
      </p>
      <button type="submit" className={buttonClass('whatsapp', 'lg')}>
        Send enquiry on WhatsApp
      </button>
      {status === 'blocked' && whatsAppUrl ? (
        <p className="text-sm text-silver" role="alert">
          <a className="text-crimson-hover underline" href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
            Open WhatsApp enquiry
          </a>
        </p>
      ) : null}
      {status === 'ready' ? (
        <p className="text-sm text-silver" role="status">
          WhatsApp should now be open with your enquiry.
        </p>
      ) : null}
    </form>
  );
}
