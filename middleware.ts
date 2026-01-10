import createIntlMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n';

export default createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(ru|uz)/:path*']
};
