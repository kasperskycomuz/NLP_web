import { PageHeader } from '@/components/page-header';
import { testTopics } from '@/content/tests';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export default function TestsPage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages.tests');
  const locale = params.locale;
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="grid gap-4 md:grid-cols-2">
        {testTopics.map((test, idx) => (
          <Link
            key={test.title.ru}
            href={`/${locale}/tests/${idx + 1}`}
            prefetch={false}
            className="block rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <span className="text-xl" aria-hidden>{test.icon}</span>
                <span>{test.title[locale]}</span>
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">{test.testsCount} тестов</span>
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{test.description[locale]}</p>
            <div className="mt-3 text-xs text-slate-500 dark:text-slate-300">Тема {idx + 1} / 18 • Нажмите, чтобы открыть</div>
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-5 text-emerald-900 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-900/30 dark:text-emerald-50">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-lg font-semibold">Сертификат</div>
          <div className="text-sm">При успешной сдаче всех тестов без ошибок вы получаете сертификат.</div>
        </div>
      </div>
    </div>
  );
}
