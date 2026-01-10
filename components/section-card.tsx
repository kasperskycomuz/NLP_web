import { Link } from 'next-intl/navigation';
import { ReactNode } from 'react';

export type SectionCardProps = {
  title: string;
  description: string;
  badge?: string;
  href: string;
  gradient: string;
  icon: ReactNode;
};

export function SectionCard({ title, description, badge, href, gradient, icon }: SectionCardProps) {
  return (
    <Link href={href} className="card-hover block rounded-3xl border border-slate-200/70 bg-white/70 p-[1px] backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70">
      <div className={`${gradient} rounded-3xl p-[1px]`}> 
        <div className="flex h-full flex-col justify-between rounded-3xl bg-white/90 p-5 text-slate-800 dark:bg-slate-950/80 dark:text-white">
          <div className="flex items-center gap-3 text-xl font-semibold">
            <span className="text-2xl" aria-hidden>
              {icon}
            </span>
            <span>{title}</span>
          </div>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{description}</p>
          {badge && (
            <span className="mt-4 inline-flex w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur dark:bg-slate-800/80 dark:text-slate-100">
              {badge}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
