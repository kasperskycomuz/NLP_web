import { getRequestConfig } from 'next-intl/server';

export const locales = ['ru', 'uz'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';
export const localePrefix = 'always' as const;

export const navigationLinks = [
  { href: '/lectures', key: 'lectures' },
  { href: '/videos', key: 'videos' },
  { href: '/practice', key: 'practice' },
  { href: '/tests', key: 'tests' },
  { href: '/syllabus', key: 'syllabus' },
  { href: '/authors', key: 'authors' },
  { href: '/glossary', key: 'glossary' }
];

// next-intl requires a default export that provides messages per locale at request time
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
