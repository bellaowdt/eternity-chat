import { defineRouting } from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'fa'] as const;

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/pathnames': {
      fa: '/pfadnamen',
    },
  },
});
