import { useMemo, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { business } from '../../config/business';
import { getServiceById, services } from '../../data/services';
import {
  isDateTodayOrLater,
  isNonEmpty,
  isValidIndianMobile,
  todayIsoDate,
} from '../../lib/validation';
import {
  formatBookingMessage,
  getBookingWhatsAppUrl,
  openWhatsApp,
  type BookingDetails,
} from '../../lib/whatsapp';
import { buttonClass } from '../ui/buttonStyles';
import { controlProps, Field, fieldControlClass } from './Field';

type FormState = {
  name: string;
  phone: string;
  vehicleType: string;
  brand: string;
  model: string;
  registration: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: '',
  phone: '',
  vehicleType: 'Car',
  brand: '',
  model: '',
  registration: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  notes: '',
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!isNonEmpty(values.name)) {
    errors.name = 'Please enter your full name.';
  }
  if (!isValidIndianMobile(values.phone)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  }
  if (!values.vehicleType) {
    errors.vehicleType = 'Select car or motorcycle.';
  }
  if (!isNonEmpty(values.brand)) {
    errors.brand = 'Enter the vehicle brand.';
  }
  if (!isNonEmpty(values.model)) {
    errors.model = 'Enter the vehicle model.';
  }
  if (!values.service) {
    errors.service = 'Select the service you need.';
  }
  if (!isDateTodayOrLater(values.preferredDate)) {
    errors.preferredDate = 'Choose today or a later date.';
  }
  if (!values.preferredTime) {
    errors.preferredTime = 'Choose a preferred time.';
  }

  return errors;
}

function toBookingDetails(values: FormState): BookingDetails {
  return {
    name: values.name.trim(),
    phone: values.phone.trim(),
    vehicleType: values.vehicleType,
    brand: values.brand.trim(),
    model: values.model.trim(),
    registration: values.registration.trim() || undefined,
    service: values.service,
    preferredDate: values.preferredDate,
    preferredTime: values.preferredTime,
    notes: values.notes.trim() || undefined,
  };
}

export function BookingForm() {
  const [searchParams] = useSearchParams();
  const preselected = getServiceById(searchParams.get('service') ?? '');

  const [values, setValues] = useState<FormState>({
    ...emptyForm,
    service: preselected?.name ?? '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'ready' | 'blocked'>('idle');
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);

  const preview = useMemo(() => {
    if (status === 'idle') return '';
    return formatBookingMessage(toBookingDetails(values));
  }, [status, values]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus('idle');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      return;
    }

    const url = getBookingWhatsAppUrl(toBookingDetails(values));
    setWhatsAppUrl(url);
    const opened = openWhatsApp(url);
    setStatus(opened ? 'ready' : 'blocked');
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="booking-name" label="Customer name" error={errors.name}>
          <input
            {...controlProps('booking-name', errors.name)}
            className={fieldControlClass}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
          />
        </Field>
        <Field
          id="booking-phone"
          label="Phone number"
          hint="10-digit Indian mobile number"
          error={errors.phone}
        >
          <input
            {...controlProps('booking-phone', errors.phone, '10-digit Indian mobile number')}
            className={fieldControlClass}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98765 43210"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
          />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ivory">Vehicle type</legend>
        <div className="flex flex-wrap gap-3">
          {business.vehicleTypes.map((type) => (
            <label
              key={type}
              className="inline-flex cursor-pointer items-center gap-2 border border-white/12 bg-ink px-3 py-2 text-sm text-ivory has-[:checked]:border-crimson"
            >
              <input
                type="radio"
                name="vehicleType"
                value={type}
                checked={values.vehicleType === type}
                onChange={() => update('vehicleType', type)}
                className="accent-crimson"
              />
              {type}
            </label>
          ))}
        </div>
        {errors.vehicleType ? (
          <p className="mt-1.5 text-xs text-crimson-hover" role="alert">
            {errors.vehicleType}
          </p>
        ) : null}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="booking-brand" label="Vehicle brand" error={errors.brand}>
          <input
            {...controlProps('booking-brand', errors.brand)}
            className={fieldControlClass}
            name="brand"
            list="vehicle-brands"
            placeholder="Toyota"
            value={values.brand}
            onChange={(event) => update('brand', event.target.value)}
          />
          <datalist id="vehicle-brands">
            {business.supportedBrands.map((brand) => (
              <option key={brand} value={brand} />
            ))}
          </datalist>
        </Field>
        <Field id="booking-model" label="Vehicle model" error={errors.model}>
          <input
            {...controlProps('booking-model', errors.model)}
            className={fieldControlClass}
            name="model"
            placeholder="Innova, Fortuner, City..."
            value={values.model}
            onChange={(event) => update('model', event.target.value)}
          />
        </Field>
      </div>

      <Field id="booking-reg" label="Registration number" optional>
        <input
          {...controlProps('booking-reg')}
          className={fieldControlClass}
          name="registration"
          placeholder="MH12AB1234"
          value={values.registration}
          onChange={(event) => update('registration', event.target.value)}
        />
      </Field>

      <Field id="booking-service" label="Service required" error={errors.service}>
        <select
          {...controlProps('booking-service', errors.service)}
          className={fieldControlClass}
          name="service"
          value={values.service}
          onChange={(event) => update('service', event.target.value)}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="booking-date" label="Preferred date" error={errors.preferredDate}>
          <input
            {...controlProps('booking-date', errors.preferredDate)}
            className={fieldControlClass}
            name="preferredDate"
            type="date"
            min={todayIsoDate()}
            value={values.preferredDate}
            onChange={(event) => update('preferredDate', event.target.value)}
          />
        </Field>
        <Field id="booking-time" label="Preferred time" error={errors.preferredTime}>
          <input
            {...controlProps('booking-time', errors.preferredTime)}
            className={fieldControlClass}
            name="preferredTime"
            type="time"
            value={values.preferredTime}
            onChange={(event) => update('preferredTime', event.target.value)}
          />
        </Field>
      </div>

      <Field id="booking-notes" label="Additional notes" optional>
        <textarea
          {...controlProps('booking-notes')}
          className={`${fieldControlClass} min-h-28 resize-y`}
          name="notes"
          value={values.notes}
          onChange={(event) => update('notes', event.target.value)}
        />
      </Field>

      <p className="border border-white/8 bg-ink/70 px-4 py-3 text-sm leading-relaxed text-silver">
        Submitting this form opens WhatsApp with your details filled in. Review the message and send
        it to the workshop. A booking is <strong className="text-ivory">not confirmed</strong> until
        Balaji Automobiles replies.
      </p>

      <button type="submit" className={buttonClass('primary', 'lg', 'w-full sm:w-auto')}>
        Send request on WhatsApp
      </button>

      {status === 'ready' ? (
        <p className="text-sm text-silver" role="status">
          WhatsApp should now be open with your request. If it did not appear, use the link below.
        </p>
      ) : null}

      {status === 'blocked' && whatsAppUrl ? (
        <p className="text-sm text-silver" role="alert">
          Your browser blocked the WhatsApp window.{' '}
          <a className="text-crimson-hover underline underline-offset-4" href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
            Open the booking message
          </a>
        </p>
      ) : null}

      {preview ? (
        <pre className="overflow-x-auto border border-white/8 bg-ink p-4 text-xs leading-relaxed text-mist whitespace-pre-wrap">
          {preview}
        </pre>
      ) : null}
    </form>
  );
}
