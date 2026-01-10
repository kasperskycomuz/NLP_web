import { Hero } from '@/components/hero';
import { SectionCard } from '@/components/section-card';
import { Stats } from '@/components/stats';
import { navigationLinks, Locale } from '@/i18n';
import { useTranslations } from 'next-intl';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const t = useTranslations('sections');
  const { locale } = params;

  const sectionCards = [
    {
      key: 'lectures',
      gradient: 'bg-gradient-lectures',
      icon: '📖'
    },
    {
      key: 'videos',
      gradient: 'bg-gradient-videos',
      icon: '🎬'
    },
    {
      key: 'practice',
      gradient: 'bg-gradient-practice',
      icon: '🛠️'
    },
    {
      key: 'tests',
      gradient: 'bg-gradient-tests',
      icon: '✅'
    },
    {
      key: 'syllabus',
      gradient: 'bg-gradient-syllabus',
      icon: '📋'
    },
    {
      key: 'authors',
      gradient: 'bg-gradient-authors',
      icon: '👥'
    }
  ];

  return (
    <div className="space-y-10">
      <Hero locale={locale} />
      <Stats />
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sectionCards.map((card) => {
          const navItem = navigationLinks.find((n) => n.key === card.key)!;
          return (
            <SectionCard
              key={card.key}
              title={t(`${card.key}.title`) as any}
              description={t(`${card.key}.description`) as any}
              badge={t(`${card.key}.badge`) as any}
              href={`/${locale}${navItem.href}`}
              gradient={card.gradient}
              icon={card.icon}
            />
          );
        })}
        <SectionCard
          title={t('glossary.title') as any}
          description={t('glossary.description') as any}
          badge={t('glossary.badge') as any}
          href={`/${locale}/glossary`}
          gradient="bg-gradient-aurora"
          icon="📚"
        />
      </section>
    </div>
  );
}
