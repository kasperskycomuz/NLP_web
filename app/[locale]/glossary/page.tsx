import { PageHeader } from '@/components/page-header';
import { glossary } from '@/content/glossary';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function GlossaryPage({ params }: { params: { locale: Locale } }) {
  const t = useTranslations('pages.glossary');
  setRequestLocale(params.locale);
  const locale = params.locale;
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="grid gap-4 md:grid-cols-2">
        {glossary.map((item) => (
          <div key={item.term} className="glass card-hover rounded-2xl p-5">
            <div className="flex items-center justify-between text-lg font-semibold text-slate-900 dark:text-white">
              <span>{item.term}</span>
              <span className="text-xs text-slate-500 dark:text-slate-300">{locale === 'ru' ? 'RU' : 'UZ'}</span>
            </div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-200">{locale === 'ru' ? item.ru : item.uz}</div>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-300">{locale === 'ru' ? item.example.ru : item.example.uz}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
