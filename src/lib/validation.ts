export function normalizePhoneDigits(value: string): string {
  return value.replace(/\D/g, '');
}

export function isValidIndianMobile(value: string): boolean {
  const digits = normalizePhoneDigits(value);

  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }

  if (digits.length === 12 && digits.startsWith('91')) {
    return /^91[6-9]\d{9}$/.test(digits);
  }

  return false;
}

export function isNonEmpty(value: string, min = 2): boolean {
  return value.trim().length >= min;
}

export function todayIsoDate(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${month}-${day}`;
}

export function isDateTodayOrLater(isoDate: string): boolean {
  if (!isoDate) return false;
  return isoDate >= todayIsoDate();
}
