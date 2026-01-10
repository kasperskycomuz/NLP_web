type Localized = { ru: string; uz: string };

type SyllabusItem = {
  week: Localized;
  focus: Localized;
  checkpoints: Localized[];
};

export const syllabusItems: SyllabusItem[] = [
  {
    week: { ru: 'Неделя 1', uz: '1-hafta' },
    focus: { ru: 'Введение, постановка задач', uz: 'Kirish va vazifalarni qoʻyish' },
    checkpoints: [
      { ru: 'Ознакомление с курсом', uz: 'Kurs bilan tanishish' },
      { ru: 'Мини-квиз по основам NLP', uz: 'NLP asoslari boʼyicha mini-quiz' }
    ]
  },
  {
    week: { ru: 'Неделя 2', uz: '2-hafta' },
    focus: { ru: 'Предобработка текста', uz: 'Matnni tayyorlash' },
    checkpoints: [
      { ru: 'Практика по токенизации', uz: 'Tokenizatsiya amaliyoti' },
      { ru: 'Лабораторная по TF-IDF', uz: 'TF-IDF laboratoriya ishi' }
    ]
  },
  {
    week: { ru: 'Неделя 3', uz: '3-hafta' },
    focus: { ru: 'Векторные представления', uz: 'Vektorli tasvirlar' },
    checkpoints: [
      { ru: 'Word2Vec / FastText', uz: 'Word2Vec / FastText' },
      { ru: 'Мини-проект: эмбеддинги корпуса', uz: 'Mini-loyiha: korpus embeddinglari' }
    ]
  },
  {
    week: { ru: 'Неделя 4', uz: '4-hafta' },
    focus: { ru: 'Нейросетевые модели', uz: 'Neyrotarmoq modellari' },
    checkpoints: [
      { ru: 'RNN/LSTM/GRU', uz: 'RNN/LSTM/GRU' },
      { ru: 'Разбор Transformer', uz: 'Transformer tahlili' }
    ]
  },
  {
    week: { ru: 'Неделя 5', uz: '5-hafta' },
    focus: { ru: 'Прикладные задачи', uz: 'Amaliy vazifalar' },
    checkpoints: [
      { ru: 'Sentiment/NER', uz: 'Sentiment/NER' },
      { ru: 'Машинный перевод, QA', uz: 'Mashina tarjima va QA' }
    ]
  }
];
