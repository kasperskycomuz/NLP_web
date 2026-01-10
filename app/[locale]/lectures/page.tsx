import { PageHeader } from '@/components/page-header';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function LecturesPage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages.lectures');
  const lectures = [
    { file: '1лекция.pdf', label: '1 лекция' },
    { file: '2 лекция.pdf', label: '2 лекция' },
    { file: '3 лекция.pdf', label: '3 лекция' },
    { file: '4 лекция.pdf', label: '4 лекция' },
    { file: '5 лекция.pdf', label: '5 лекция' },
    { file: '6 лекция.pdf', label: '6 лекция' },
    { file: '7 лекция.pdf', label: '7 лекция' },
    { file: '8 лекция.pdf', label: '8 лекция' },
    { file: '9 лекция.pdf', label: '9 лекция' },
    { file: '10 лекция.pdf', label: '10 лекция' },
    { file: '11 лекция.pdf', label: '11 лекция' },
    { file: '12 лекция.pdf', label: '12 лекция' },
    { file: '13 лекция.pdf', label: '13 лекция' },
    { file: '14 лекция.pdf', label: '14 лекция' },
    { file: '15 лекция.pdf', label: '15 лекция' },
    { file: '16 лекция.pdf', label: '16 лекция' },
    { file: '17 лекция.pdf', label: '17 лекция' },
    { file: '18 лекция.pdf', label: '18 лекция' }
  ];
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Скачать лекции</div>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {lectures.map(({ file, label }) => (
            <a
              key={file}
              href={encodeURI(`/${file}`)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5 hover:shadow dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100"
            >
              <span className="truncate">{label}</span>
              <span aria-hidden>⬇</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
