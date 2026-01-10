import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  locales: ['ru', 'uz'],
  defaultLocale: 'ru'
});

export default withNextIntl({
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  }
});
