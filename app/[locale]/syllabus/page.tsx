import { PageHeader } from '@/components/page-header';
import { syllabusItems } from '@/content/syllabus';
import { Locale } from '@/i18n';

export default function SyllabusPage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="📋 Силлабус"
        subtitle="Цели обучения, расписание, критерии оценки и контрольные точки"
      />
      <div className="grid gap-4">
        {syllabusItems.map((item) => (
          <div key={item.week} className="glass card-hover rounded-2xl p-5">
            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">{item.week}</span>
              <span>{item.focus}</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200">
              {item.checkpoints.map((checkpoint) => (
                <li key={checkpoint} className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>{checkpoint}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200">
        PDF силлабуса можно прикрепить здесь (позже: ссылка на файл или storage).
      </div>
    </div>
  );
}
