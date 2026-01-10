import { PageHeader } from '@/components/page-header';
import { practiceItems } from '@/content/practice';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function PracticePage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages.practice');
  const locale = params.locale;
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="grid gap-4 md:grid-cols-2">
        {practiceItems.map((item) => (
          <div key={item.code} className="glass card-hover flex flex-col justify-between rounded-2xl p-5">
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">{item.code}</span>
              <span>{item.level[locale]}</span>
            </div>
            <div className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{item.title[locale]}</div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-200">Инструменты: {item.tools}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
