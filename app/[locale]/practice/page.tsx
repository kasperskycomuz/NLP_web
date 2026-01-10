import { PageHeader } from '@/components/page-header';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function PracticePage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages.practice');

  const presentations = [
    { file: '1 Практическое занятие.pdf', label: '1 практическое занятие' },
    { file: '2 Практическое занятие.pdf', label: '2 практическое занятие' },
    { file: '3 Практическое занятие.pdf', label: '3 практическое занятие' },
    { file: '4 Практическое занятие.pdf', label: '4 практическое занятие' },
    { file: '5 Практическое занятие.pdf', label: '5 практическое занятие' },
    { file: '6 Практическое занятие.pdf', label: '6 практическое занятие' },
    { file: '7 Практическое занятие.pdf', label: '7 практическое занятие' },
    { file: '8 Практическое занятие.pdf', label: '8 практическое занятие' },
    { file: '9 Практическое занятие.pdf', label: '9 практическое занятие' },
    { file: '10 Практическое занятие.pdf', label: '10 практическое занятие' },
    { file: '11 Практическое занятие.pdf', label: '11 практическое занятие' },
    { file: '12 Практическое занятие.pdf', label: '12 практическое занятие' },
    { file: '13 Практическое занятие.pdf', label: '13 практическое занятие' },
    { file: '14 Практическое занятие.pdf', label: '14 практическое занятие' },
    { file: '15 Практическое занятие.pdf', label: '15 практическое занятие' },
    { file: '16 Практическое занятие.pdf', label: '16 практическое занятие' },
    { file: '17 Практическое занятие.pdf', label: '17 практическое занятие' },
    { file: '18 Практическое занятие.pdf', label: '18 практическое занятие' }
  ];
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Скачать презентации практических занятий</div>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {presentations.map(({ file, label }) => (
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
