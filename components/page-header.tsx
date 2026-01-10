import { ReactNode } from 'react';

export function PageHeader({ title, subtitle, icon }: { title: string; subtitle: string; icon?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <div className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
        {icon && <span className="text-3xl" aria-hidden>{icon}</span>}
        <span>{title}</span>
      </div>
      <p className="text-slate-700 dark:text-slate-300">{subtitle}</p>
    </div>
  );
}
