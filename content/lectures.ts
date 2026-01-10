type Localized = { ru: string; uz: string };

type LectureModule = {
  title: Localized;
  subtitle: Localized;
  lessons: Localized[];
};

export const lectureModules: LectureModule[] = [
  {
    title: { ru: 'Модуль 1: Введение в NLP', uz: '1-modul: NLP ga kirish' },
    subtitle: { ru: 'Введение', uz: 'Kirish' },
    lessons: [
      { ru: 'Что такое NLP и зачем он нужен', uz: 'NLP nima va u nima uchun kerak' },
      { ru: 'История: от правил к нейросетям', uz: 'Taraqqiyot: qoidalardan neyrotarmoqlargacha' },
      { ru: 'Области применения', uz: "Qo'llash sohalari" }
    ]
  },
  {
    title: { ru: 'Модуль 2: Предобработка текста', uz: '2-modul: Matnni tayyorlash' },
    subtitle: { ru: 'Очистка и токенизация', uz: 'Tozalash va tokenizatsiya' },
    lessons: [
      { ru: 'Токенизация и сегментация', uz: 'Tokenizatsiya va segmentatsiya' },
      { ru: 'Нормализация текста', uz: 'Matnni normallashtirish' },
      { ru: 'Стемминг и лемматизация', uz: 'Stemming va lemmatizatsiya' },
      { ru: 'Стоп-слова и фильтрация', uz: 'Stop-sozlar va filtrlash' },
      { ru: 'Работа с N-граммами', uz: 'N-grammalar bilan ishlash' }
    ]
  },
  {
    title: { ru: 'Модуль 3: Векторные представления', uz: '3-modul: Vektorli tasvirlar' },
    subtitle: { ru: 'Эмбеддинги', uz: 'Embedddinglar' },
    lessons: [
      { ru: 'Bag of Words и TF-IDF', uz: 'Bag of Words va TF-IDF' },
      { ru: 'Word2Vec', uz: 'Word2Vec' },
      { ru: 'FastText', uz: 'FastText' },
      { ru: 'Контекстные эмбеддинги (ELMo)', uz: 'Kontekstli embeddinglar (ELMo)' }
    ]
  },
  {
    title: { ru: 'Модуль 4: Нейросетевые архитектуры', uz: '4-modul: Neyrotarmoqlar' },
    subtitle: { ru: 'Рекуррентные и трансформеры', uz: 'Rekurrent va transformerlar' },
    lessons: [
      { ru: 'RNN', uz: 'RNN' },
      { ru: 'LSTM/GRU', uz: 'LSTM/GRU' },
      { ru: 'Attention', uz: 'Eʼtibor (Attention)' },
      { ru: 'Transformer', uz: 'Transformer' },
      { ru: 'BERT, GPT', uz: 'BERT, GPT' }
    ]
  },
  {
    title: { ru: 'Модуль 5: Задачи NLP', uz: '5-modul: NLP vazifalari' },
    subtitle: { ru: 'Прикладные задачи', uz: 'Amaliy vazifalar' },
    lessons: [
      { ru: 'Классификация', uz: 'Klassifikatsiya' },
      { ru: 'Sentiment', uz: 'Sentiment tahlil' },
      { ru: 'NER', uz: 'NER' },
      { ru: 'Машинный перевод', uz: 'Mashina tarjima' },
      { ru: 'Генерация', uz: 'Generatsiya' },
      { ru: 'QA', uz: 'QA savol-javob' },
      { ru: 'Суммаризация', uz: 'Summarizatsiya' }
    ]
  }
];
