"use client";

import { PageHeader } from '@/components/page-header';
import { testTopics } from '@/content/tests';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type ProgressEntry = { score: number; completed: boolean; date: string };
type ProgressMap = Record<string, ProgressEntry>;

const STORAGE_KEY = 'nlp-tests-progress';

export default function TestsPage({ params }: { params: { locale: Locale } }) {
  const t = useTranslations('pages.tests');
  const locale = params.locale;
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data: ProgressMap = JSON.parse(raw);
      setProgress(data);
    } catch (e) {
      console.error('Failed to load progress', e);
    }
  }, []);

  const { completedCount, certificateReady } = useMemo(() => {
    const completed = testTopics.reduce((acc, _, idx) => {
      const entry = progress[String(idx + 1)];
      return entry?.completed ? acc + 1 : acc;
    }, 0);
    return { completedCount: completed, certificateReady: completed === testTopics.length };
  }, [progress]);

  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="grid gap-4 md:grid-cols-2">
        {testTopics.map((test, idx) => {
          const entry = progress[String(idx + 1)];
          const hasResult = !!entry;
          const done = entry?.completed;
          const score = entry?.score ?? null;
          return (
            <Link
              key={test.title.ru}
              href={`/${locale}/tests/${idx + 1}`}
              prefetch={false}
              className="block rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <span className="text-xl" aria-hidden>{test.icon}</span>
                  <span>{test.title[locale]}</span>
                </span>
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${done ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-100' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>
                  {done ? '100% пройдено' : `${test.testsCount} тестов`}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{test.description[locale]}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-300">
                <span>Тема {idx + 1} / {testTopics.length}</span>
                {hasResult && !done && score !== null && <span className="text-amber-600 dark:text-amber-300">Результат: {score}%</span>}
                {done && <span className="text-emerald-700 dark:text-emerald-200">Готово для сертификата</span>}
              </div>
            </Link>
          );
        })}
      </div>

      <div className={`rounded-2xl border p-5 text-sm shadow-sm ${certificateReady ? 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-900/30 dark:text-emerald-50' : 'border-slate-200 bg-slate-50 text-slate-800 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-100'}`}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-lg font-semibold">Сертификат</div>
          <div className="text-sm">Прогресс: {completedCount} / {testTopics.length} тем с результатом 100%.</div>
        </div>
        {!certificateReady && <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Завершите оставшиеся темы на 100%, чтобы получить сертификат.</div>}
        {certificateReady && <div className="mt-1 text-xs font-semibold text-emerald-700 dark:text-emerald-100">Все темы пройдены на 100%. Сертификат доступен.</div>}
      </div>
    </div>
  );
}
