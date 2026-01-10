import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-slate-200/70 bg-white/50 text-sm text-slate-600 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="font-medium text-slate-800 dark:text-slate-100">© 2026 NLP Hub</div>
          <div>{t('madeWith')}</div>
          <div>{t('org')}</div>
          <div>{t('contact')}</div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://github.com" className="rounded-full border border-slate-200 px-3 py-1 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-500">
            GitHub
          </Link>
          <Link href="https://vercel.com" className="rounded-full border border-slate-200 px-3 py-1 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-500">
            Vercel
          </Link>
        </div>
      </div>
    </footer>
  );
}
