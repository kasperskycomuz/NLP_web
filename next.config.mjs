import createNextIntlPlugin from 'next-intl/plugin';

// next-intl plugin expects a path to the i18n config file
const withNextIntl = createNextIntlPlugin('./i18n.ts');

export default withNextIntl({
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  }
});
