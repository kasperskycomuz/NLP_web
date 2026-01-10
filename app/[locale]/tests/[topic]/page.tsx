"use client";

import { testTopics } from '@/content/tests';
import { Locale } from '@/i18n';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type ProgressEntry = { score: number; completed: boolean; date: string };
type ProgressMap = Record<string, ProgressEntry>;

const STORAGE_KEY = 'nlp-tests-progress';

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleOptions<T>(options: T[], seed: number) {
  const rand = mulberry32(seed);
  const arr = [...options];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildQuestions(locale: Locale, topicIndex: number) {
  const topic = testTopics[topicIndex];

  return topic.questions.map((q, idx) => {
    const correctValue = 'correct';
    const annotated = q.options.map((opt, optIdx) => ({ opt, isCorrect: optIdx === q.answer }));
    const shuffled = shuffleOptions(annotated, (topicIndex + 1) * 1000 + (idx + 1));

    return {
      id: `q${idx + 1}`,
      text: q.text[locale],
      options: shuffled.map((entry, optIdx) => ({
        value: entry.isCorrect ? correctValue : `w${optIdx}`,
        label: entry.opt[locale]
      })),
      correct: correctValue
    };
  });
}

export default function TopicTestPage({ params }: { params: { locale: Locale; topic: string } }) {
  const locale = params.locale;
  const topicIndex = Math.max(0, Math.min(testTopics.length - 1, Number(params.topic) - 1));
  const topic = testTopics[topicIndex];
  const questions = useMemo(() => buildQuestions(locale, topicIndex), [locale, topicIndex]);

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [savedScore, setSavedScore] = useState<number | null>(null);

  const total = questions.length;
  const correctCount = questions.reduce((acc, q) => (answers[q.id] === q.correct ? acc + 1 : acc), 0);
  const percent = total ? Math.round((correctCount / total) * 100) : 0;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data: ProgressMap = JSON.parse(raw);
      const entry = data[String(topicIndex + 1)];
      if (entry) setSavedScore(entry.score);
    } catch (e) {
      console.error('Failed to read progress', e);
    }
  }, [topicIndex]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-300">Тест по теме</div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{topic.title[locale]}</h1>
          <p className="text-sm text-slate-700 dark:text-slate-200">{topic.description[locale]}</p>
        </div>
        <Link
          href={`/${locale}/tests`}
          className="rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:text-slate-100"
        >
          ← Назад
        </Link>
      </div>

      <div className="space-y-4">
        {questions.map((q, idx) => (
          <div key={q.id} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Вопрос {idx + 1} / {total}</div>
                <div className="text-sm text-slate-700 dark:text-slate-200">{q.text}</div>
              </div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{topic.testsCount} тестов</div>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {q.options.map((opt) => {
                const checked = answers[q.id] === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${
                      checked
                        ? 'border-indigo-300 bg-indigo-50 text-indigo-900 dark:border-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-50'
                        : 'border-slate-200 bg-white/60 text-slate-800 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-100'
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.value}
                      checked={checked}
                      onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.value }))}
                      className="h-4 w-4 accent-indigo-500"
                    />
                    <span>{opt.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => {
            setSubmitted(true);
            if (typeof window !== 'undefined') {
              try {
                const raw = localStorage.getItem(STORAGE_KEY);
                const data: ProgressMap = raw ? JSON.parse(raw) : {};
                const topicKey = String(topicIndex + 1);
                const entry: ProgressEntry = {
                  score: percent,
                  completed: percent === 100,
                  date: new Date().toISOString()
                };
                data[topicKey] = entry;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                setSavedScore(entry.score);
              } catch (e) {
                console.error('Failed to save progress', e);
              }
            }
          }}
          className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          Проверить ответы
        </button>
        <button
          onClick={() => {
            setAnswers({});
            setSubmitted(false);
          }}
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:text-slate-100"
        >
          Сбросить
        </button>
        <div className="text-sm text-slate-600 dark:text-slate-300">
          Заполнено {Object.keys(answers).length} / {total}
        </div>
      </div>

      {submitted && (
        <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-4 text-emerald-900 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-900/30 dark:text-emerald-50">
          <div className="text-lg font-semibold">Результат: {correctCount} из {total} ({percent}%)</div>
          <p className="text-sm mt-1">Для сертификата нужно 100% по всем темам.</p>
        </div>
      )}

      {savedScore !== null && (
        <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-100">
          <div className="text-sm font-semibold">Сохранено: {savedScore}%</div>
          <p className="text-xs text-slate-600 dark:text-slate-300">Результат учитывается в сертификате, когда равен 100%.</p>
        </div>
      )}
    </div>
  );
}
