import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
};

export function Field({ id, label, hint, error, optional, children }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ivory">
        {label}
        {optional ? <span className="ml-2 text-xs font-normal text-mute">Optional</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p id={hintId} className="mt-1.5 text-xs text-mute">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-crimson-hover" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const fieldControlClass =
  'w-full rounded-sm border border-white/12 bg-ink px-3 py-2.5 text-ivory outline-none transition-colors placeholder:text-mute/80 focus:border-crimson';

export function controlProps(id: string, error?: string, hint?: string) {
  return {
    id,
    'aria-invalid': Boolean(error) || undefined,
    'aria-describedby': cn(error && `${id}-error`, hint && !error && `${id}-hint`) || undefined,
  };
}
