type Localized = { ru: string; uz: string };

export type TestTopic = {
  title: Localized;
  description: Localized;
  testsCount: number;
  icon: string;
};

export const testTopics: TestTopic[] = [
  {
    title: { ru: 'Введение и основы алгоритмов NLP', uz: 'Kirish va NLP algoritmlarining asoslari' },
    description: { ru: 'Базовые понятия и задачи NLP', uz: 'NLP asosiy tushunchalari va vazifalari' },
    testsCount: 25,
    icon: '🧭'
  },
  {
    title: { ru: 'Источники текстов и создание корпуса', uz: 'Matn manbalari va korpus tuzish' },
    description: { ru: 'Сбор данных и подготовка корпусов', uz: 'Maʼlumot yigʻish va korpus tayyorlash' },
    testsCount: 25,
    icon: '🗂️'
  },
  {
    title: { ru: 'Подготовка текста: токенизация, нормализация', uz: 'Matn tayyorlash: tokenizatsiya, normallashtirish' },
    description: { ru: 'Базовые шаги препроцессинга', uz: 'Preprocess bosqichlari' },
    testsCount: 25,
    icon: '✂️'
  },
  {
    title: { ru: 'Языковые модели: N-граммы, перплексия', uz: 'Til modellari: N-grammalar, perplexity' },
    description: { ru: 'Частотные LM и оценка качества', uz: 'Chastota LM va sifat baholash' },
    testsCount: 25,
    icon: '📈'
  },
  {
    title: { ru: 'Стемминг и лемматизация', uz: 'Stemming va lemmatizatsiya' },
    description: { ru: 'Нормализация словоформ', uz: 'Soʻz shakllarini normallashtirish' },
    testsCount: 25,
    icon: '🪶'
  },
  {
    title: { ru: 'Определение частей речи и стоп-слова', uz: 'Soʻz turkumlari (POS-tagging) va stop-soʻzlar' },
    description: { ru: 'POS-теггинг и фильтрация', uz: 'POS teglash va filtrlash' },
    testsCount: 25,
    icon: '🏷️'
  },
  {
    title: { ru: 'Текстовые признаки и модель TF-IDF', uz: 'Matn belgilari va TF-IDF' },
    description: { ru: 'Векторизация документов', uz: 'Hujjatlarni vektorlash' },
    testsCount: 25,
    icon: '📊'
  },
  {
    title: { ru: 'Сходство текстов', uz: 'Matnlar oʻxshashligi' },
    description: { ru: 'Метрики расстояний и сходства', uz: 'Masofa va oʻxshashlik metrikalari' },
    testsCount: 25,
    icon: '🤝'
  },
  {
    title: { ru: 'NER и анализ тональности', uz: 'NER va sentiment tahlili' },
    description: { ru: 'Извлечение сущностей и тональность', uz: 'Nomaʼlum obyektlarni ajratish va ohang' },
    testsCount: 25,
    icon: '🧠'
  },
  {
    title: { ru: 'Классификация текстов и ML/нейросети', uz: 'Matn klassifikatsiyasi, ML va neyrotarmoqlar' },
    description: { ru: 'Классические и нейросетевые подходы', uz: 'Klassik va neyro yondashuvlar' },
    testsCount: 25,
    icon: '🛰️'
  },
  {
    title: { ru: 'Основы тематического моделирования', uz: 'Mavzuli modellashtirish asoslari' },
    description: { ru: 'LDA и другие модели тем', uz: 'LDA va boshqa mavzu modellari' },
    testsCount: 25,
    icon: '🗃️'
  },
  {
    title: { ru: 'Стилистометрия и стиль текста', uz: 'Stilistometriya va matn uslubi' },
    description: { ru: 'Метрики стиля и авторства', uz: 'Uslub va mualliflik metrikalari' },
    testsCount: 25,
    icon: '✒️'
  },
  {
    title: { ru: 'Векторные представления и кластеризация', uz: 'Vektor tasvirlar va klasterlash' },
    description: { ru: 'Word embeddings и кластеризация', uz: 'Embeddinglar va klasterlash' },
    testsCount: 25,
    icon: '🧊'
  },
  {
    title: { ru: 'Векторный анализ и семантика', uz: 'Vektor tahlil va semantika' },
    description: { ru: 'Семантические операции над векторами', uz: 'Vektorlarda semantik amallar' },
    testsCount: 25,
    icon: '🧭'
  },
  {
    title: { ru: 'Синтаксические зависимости и анализ', uz: 'Sintaktik bogʻlanishlar va tahlil' },
    description: { ru: 'Деревья зависимостей и парсинг', uz: 'Bogʻliqlik daraxtlari va parsing' },
    testsCount: 25,
    icon: '🌿'
  },
  {
    title: { ru: 'Автоматическое реферирование и Transformer', uz: 'Avtomatik referat va Transformerlar' },
    description: { ru: 'Суммаризация и ввод в Transformer', uz: 'Summarizatsiya va Transformer kirish' },
    testsCount: 25,
    icon: '⚡'
  },
  {
    title: { ru: 'Техники исправления текста', uz: 'Matnni tuzatish texnikalari' },
    description: { ru: 'Орфография и перефраз', uz: 'Imlo va parafraz' },
    testsCount: 25,
    icon: '🩹'
  },
  {
    title: { ru: 'Алгоритмы машинного перевода', uz: 'Mashina tarjimasi algoritmlari' },
    description: { ru: 'Классика и нейросетевые MT', uz: 'Klassik va neyro MT' },
    testsCount: 25,
    icon: '🌐'
  }
];
