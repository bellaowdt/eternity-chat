import { defaultTheme, globalStyles, persianTheme } from '@/config/theme';
import { languages, Locale } from '@/navigation';
import { AppProvider, TanstackProvider } from '@/providers';
import ConfirmAlertProvider from '@/providers/ConfirmAlertProvider';
import I18nProvider from '@/providers/I18nProvider';
import ToastProvider from '@/providers/ToastProvider';
import {
  CssBaseline,
  GlobalStyles,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { userAgent } from 'next/server';
import { PropsWithChildren } from 'react';
import './globals.css';

type LocaleLayoutParams = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export const metadata: Metadata = {
  title: 'Eternity Chat',
  description: 'Reconnect with Memories. Cherish the Moments.',
};

export default async function LocaleLayout({
  children,
  params,
}: PropsWithChildren<LocaleLayoutParams>) {
  const headersList = await headers();
  const reqUserAgent = userAgent({ headers: headersList });

  const themes: Record<Locale, ThemeOptions> = {
    en: defaultTheme,
    fa: persianTheme,
  };

  const { locale } = await params;

  return (
    <html lang={locale} dir={languages?.[locale]?.direction}>
      <body>
        <TanstackProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={themes[locale] ?? defaultTheme}>
              <ToastProvider />
              <AppProvider userAgent={reqUserAgent}>
                <CssBaseline />
                <GlobalStyles styles={globalStyles} />
                {/* <RTLProvider>
                  <CustomLocalizationProvider locale={locale}>*/}
                <I18nProvider locale={locale}>
                  <ConfirmAlertProvider>{children}</ConfirmAlertProvider>
                </I18nProvider>
                {/*
                </CustomLocalizationProvider>
                </RTLProvider> */}
              </AppProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
