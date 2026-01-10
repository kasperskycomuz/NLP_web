import { PageHeader } from '@/components/page-header';
import { lectureModules } from '@/content/lectures';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function LecturesPage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  const t = useTranslations('pages.lectures');
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="grid gap-4">
        {lectureModules.map((module) => (
          <div key={module.title} className="glass card-hover rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-slate-900 dark:text-white">{module.title}</div>
              <span className="text-sm text-slate-500 dark:text-slate-300">{module.subtitle}</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200">
              {module.lessons.map((lesson) => (
                <li key={lesson} className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
