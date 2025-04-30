import { Direction } from '@mui/material';
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export type Locale = 'en' | 'fa';
export const languages: Record<
  Locale,
  {
    label: string;
    direction: Direction;
  }
> = {
  en: {
    label: 'English',
    direction: 'ltr',
  },
  fa: {
    label: 'Persian',
    direction: 'rtl',
  },
};

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
