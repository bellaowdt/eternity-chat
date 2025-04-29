export const languages = [
  { name: 'English', dir: 'ltr', symbol: 'en-US', flag: 'gb' },
  { name: 'العربية', dir: 'rtl', symbol: 'ar-OM', flag: 'sa' },
  { name: 'فارسی', dir: 'rtl', symbol: 'fa-IR', flag: 'ir' },
] as const;

export type LanguagesType = (typeof languages)[number]['symbol'];
export const defaultLocale = 'en-US' as const;
