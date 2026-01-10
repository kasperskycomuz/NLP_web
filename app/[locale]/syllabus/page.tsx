import { PageHeader } from '@/components/page-header';
import { syllabusItems } from '@/content/syllabus';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function SyllabusPage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages.syllabus');
  const locale = params.locale;
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="grid gap-4">
        {syllabusItems.map((item) => (
          <div key={item.week.ru} className="glass card-hover rounded-2xl p-5">
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">{item.week[locale]}</span>
              <span>{item.focus[locale]}</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200">
              {item.checkpoints.map((checkpoint) => (
                <li key={checkpoint.ru} className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>{checkpoint[locale]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">Силлабус</div>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Скачать «nlp kunduzgi.pdf». Если файла нет, добавьте его в папку public/nlp-kunduzgi.pdf.
            </p>
          </div>
          <a
            href="/nlp-kunduzgi.pdf"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-100 dark:text-slate-900"
            target="_blank"
            rel="noreferrer"
          >
            Скачать
          </a>
        </div>
      </div>
    </div>
  );
}
