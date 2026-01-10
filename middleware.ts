import createIntlMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales } from './i18n';

export default createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix
});

export const config = {
  matcher: ['/', '/(ru|uz)/:path*']
};
