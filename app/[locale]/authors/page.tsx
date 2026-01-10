import { PageHeader } from '@/components/page-header';
import { authors } from '@/content/authors';
import { Locale } from '@/i18n';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export default function AuthorsPage({ params }: { params: { locale: Locale } }) {
  const t = useTranslations('pages.authors');
  setRequestLocale(params.locale);
  const locale = params.locale;
  return (
    <div className="space-y-6">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />
      <div className="grid gap-4 md:grid-cols-2">
        {authors.map((author) => (
          <div key={author.name} className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <div className="text-lg font-semibold text-slate-900 dark:text-white">{author.name}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{author.role[locale]} · {author.org[locale]}</div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700 dark:text-slate-200">
              {author.tags.map((tag) => (
                <span key={tag.ru} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
                  {tag[locale]}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-indigo-600 dark:text-indigo-300">
              <Link href={`mailto:${author.contacts.email}`} prefetch={false}>
                Email
              </Link>
              <a href={author.contacts.github} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                GitHub
              </a>
              <a href={author.contacts.linkedin} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
