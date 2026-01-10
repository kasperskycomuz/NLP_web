import '../globals.css';
import { NavBar } from '@/components/nav-bar';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';
import { defaultLocale, Locale, locales } from '@/i18n';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

export const metadata = {
  title: 'NLP Hub — Образовательный портал по NLP',
  description: 'Лекции, видео, практика, тесты и силлабус на русском и узбекском языках'
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const locale = params.locale ?? defaultLocale;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <NavBar locale={locale} />
            <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
