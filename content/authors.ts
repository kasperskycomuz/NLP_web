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
    name: 'Мухамадиева Кибрие',
    role: { ru: 'Преподаватель NLP', uz: 'NLP oʻqituvchisi' },
    org: { ru: 'NLP Hub', uz: 'NLP Hub' },
    tags: [{ ru: 'Корпуса', uz: 'Korpuslar' }, { ru: 'Обучение моделей', uz: 'Model o‘qitish' }],
    contacts: {
      email: 'kibrie@example.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  }
];
