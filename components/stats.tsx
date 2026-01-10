import { useTranslations } from 'next-intl';

export function Stats() {
  const t = useTranslations('stats');
  const stats = [
    { value: '18', label: t('modules') },
    { value: '60+', label: t('hours') },
    { value: '8', label: t('practice') }
  ];

  return (
    <div className="grid gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 sm:grid-cols-3">
      {stats.map((item) => (
        <div key={item.label} className="text-center">
          <div className="text-3xl font-bold text-slate-900 dark:text-white">{item.value}</div>
          <div className="text-sm text-slate-600 dark:text-slate-300">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
