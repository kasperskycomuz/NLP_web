type Localized = { ru: string; uz: string };

type Author = {
  name: string;
  role: Localized;
  org: Localized;
  tags: Localized[];
  contacts: { email: string; github: string; linkedin: string };
};

export const authors: Author[] = [
  {
    name: 'Дилноза Абдуллаева',
    role: { ru: 'PhD, Компьютерная лингвистика', uz: "PhD, Kompyuter lingvistikasi" },
    org: { ru: 'УзГУМЯ', uz: 'OʻzDJTU' },
    tags: [{ ru: 'Морфология', uz: 'Morfologiya' }, { ru: 'Корпуса', uz: 'Korpuslar' }],
    contacts: { email: 'dilnoza@example.com', github: 'https://github.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Илья Смирнов',
    role: { ru: 'ML Engineer', uz: 'ML muhandis' },
    org: { ru: 'NLP Hub', uz: 'NLP Hub' },
    tags: [{ ru: 'Трансформеры', uz: 'Transformerlar' }, { ru: 'MLOps', uz: 'MLOps' }],
    contacts: { email: 'ilya@example.com', github: 'https://github.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Aziza Karimova',
    role: { ru: 'Data Scientist', uz: 'Data Scientist' },
    org: { ru: 'Freelance', uz: 'Freelance' },
    tags: [{ ru: 'NER', uz: 'NER' }, { ru: 'Sentiment', uz: 'Sentiment' }],
    contacts: { email: 'aziza@example.com', github: 'https://github.com', linkedin: 'https://linkedin.com' }
  }
];
