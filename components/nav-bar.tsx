"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { navigationLinks, Locale } from '@/i18n';
import { ThemeToggle } from './theme-toggle';

export function NavBar({ locale }: { locale: Locale }) {
  const tNav = useTranslations('nav');
  const pathname = usePathname() || '';

  const isActive = (href: string) => pathname === `/${locale}${href}`;

  const otherLocale: Locale = locale === 'ru' ? 'uz' : 'ru';
  const switchLocaleHref = pathname.replace(/^\/(ru|uz)/, `/${otherLocale}`) || `/${otherLocale}`;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-3 font-heading text-xl font-semibold text-slate-900 dark:text-slate-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-aurora text-white shadow-glow">NLP</span>
          <span>NLP Hub</span>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-slate-200/60 bg-white/50 px-2 py-1 text-sm text-slate-700 shadow-sm backdrop-blur-md dark:border-slate-700/40 dark:bg-slate-900/50 dark:text-slate-100 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className={`${isActive(item.href) ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'hover:bg-slate-100 dark:hover:bg-slate-800'} rounded-full px-3 py-1 transition`}
            >
              {tNav(item.key as keyof ReturnType<typeof tNav>) || tNav.raw(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={switchLocaleHref as any}
            prefetch={false}
            className="rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:text-slate-100 dark:hover-border-slate-500"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
