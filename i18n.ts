export const locales = ['ru', 'uz'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

export const navigationLinks = [
  { href: '/lectures', key: 'lectures' },
  { href: '/videos', key: 'videos' },
  { href: '/practice', key: 'practice' },
  { href: '/tests', key: 'tests' },
  { href: '/syllabus', key: 'syllabus' },
  { href: '/authors', key: 'authors' },
  { href: '/glossary', key: 'glossary' }
];

const i18n = {
  locales,
  defaultLocale,
  localePrefix: 'always' as const
};

export default i18n;
