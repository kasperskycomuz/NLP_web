import { PageHeader } from '@/components/page-header';
import { testTypes } from '@/content/tests';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function TestsPage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages.tests');
  const locale = params.locale;
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="grid gap-4 md:grid-cols-2">
        {testTypes.map((test) => (
          <div key={test.title.ru} className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
              <span className="text-2xl" aria-hidden>
                {test.icon}
              </span>
              <span>{test.title[locale]}</span>
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{test.description[locale]}</p>
            <div className="mt-3 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-200">
              Интерактивные кейсы и самопроверка
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
