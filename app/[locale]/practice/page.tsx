import { PageHeader } from '@/components/page-header';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function PracticePage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages.practice');

  const presentations = [
    '1 Практическое занятие.pdf',
    '2 Практическое занятие.pdf',
    '3 Практическое занятие.pdf',
    '4 Практическое занятие.pdf',
    '5 Практическое занятие.pdf',
    '6 Практическое занятие.pdf',
    '7 Практическое занятие.pdf',
    '8 Практическое занятие.pdf',
    '9 Практическое занятие.pdf',
    '10 Практическое занятие.pdf',
    '11 Практическое занятие.pdf',
    '12 Практическое занятие.pdf',
    '13 Практическое занятие.pdf',
    '14 Практическое занятие.pdf',
    '15 Практическое занятие.pdf',
    '16 Практическое занятие.pdf',
    '17 Практическое занятие.pdf',
    '18 Практическое занятие.pdf'
  ];
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Скачать презентации практических занятий</div>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {presentations.map((file) => (
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
