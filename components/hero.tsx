import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero');
  const tSections = useTranslations('sections');

  return (
    <section className="glass relative overflow-hidden rounded-3xl px-6 py-10 shadow-glow sm:px-10">
      <div className="absolute inset-0 bg-gradient-aurora opacity-5" />
      <div className="relative grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-white/90 dark:text-slate-900">NLP Hub</p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            {t('title')}
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-200">{t('subtitle')}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/lectures`}
              className="rounded-full bg-gradient-aurora px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25"
            >
              {t('cta')}
            </Link>
            <Link
              href={`/${locale}/syllabus`}
              className="rounded-full border border-indigo-200 bg-white/70 px-5 py-3 text-sm font-semibold text-indigo-700 backdrop-blur hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900/70 dark:text-indigo-200"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { key: 'lectures', gradient: 'bg-gradient-lectures', icon: '📖' },
            { key: 'videos', gradient: 'bg-gradient-videos', icon: '🎬' },
            { key: 'practice', gradient: 'bg-gradient-practice', icon: '🛠️' },
            { key: 'tests', gradient: 'bg-gradient-tests', icon: '✅' }
          ].map((item) => (
            <div key={item.key} className={`${item.gradient} card-hover rounded-2xl p-[1px] text-white`}>
              <div className="glass h-full rounded-2xl p-4">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <div className="text-lg font-semibold">{tSections(`${item.key}.title`)}</div>
                <div className="text-sm text-slate-100/80">{tSections(`${item.key}.description`)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
