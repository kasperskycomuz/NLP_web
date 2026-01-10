import { PageHeader } from '@/components/page-header';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function LecturesPage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages.lectures');
  const lectures = [
    '1лекция.pdf',
    '2 лекция.pdf',
    '3 лекция.pdf',
    '4 лекция.pdf',
    '5 лекция.pdf',
    '6 лекция.pdf',
    '7 лекция.pdf',
    '8 лекция.pdf',
    '9 лекция.pdf',
    '10 лекция.pdf',
    '11 лекция.pdf',
    '12 лекция.pdf',
    '13 лекция.pdf',
    '14 лекция.pdf',
    '15 лекция.pdf',
    '16 лекция.pdf',
    '17 лекция.pdf',
    '18 лекция.pdf'
  ];
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Скачать лекции</div>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {lectures.map((file) => (
            <a
              key={file}
              href={encodeURI(`/${file}`)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5 hover:shadow dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100"
            >
              <span className="truncate">{file}</span>
              <span aria-hidden>⬇</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
