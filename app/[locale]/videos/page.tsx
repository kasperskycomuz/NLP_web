import { PageHeader } from '@/components/page-header';
import { videoCategories } from '@/content/videos';
import { Locale } from '@/i18n';
import { setRequestLocale } from 'next-intl/server';

export default function VideosPage({ params }: { params: { locale: Locale } }) {
  setRequestLocale(params.locale);
  return (
    <div className="space-y-6">
      <PageHeader
        title="🎬 Видео"
        subtitle="Подборка видеолекций, код-разборов и интервью с экспертами"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {videoCategories.map((video) => (
          <div key={video.title} className="card-hover rounded-2xl border border-slate-200/70 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
              <span className="text-2xl" aria-hidden>
                {video.icon}
              </span>
              <span>{video.title}</span>
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{video.description}</p>
            <div className="mt-3 text-xs text-slate-500 dark:text-slate-300">Добавляем разборы по запросу студентов</div>
          </div>
        ))}
      </div>
    </div>
  );
}
