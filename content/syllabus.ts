type Localized = { ru: string; uz: string };

type SyllabusItem = {
  week: Localized;
  focus: Localized;
  checkpoints: Localized[];
};

export const syllabusItems: SyllabusItem[] = [
  {
    week: { ru: 'Неделя 1', uz: '1-hafta' },
    focus: { ru: 'Введение и основы алгоритмов NLP', uz: 'Kirish va NLP algoritmlarining asoslari' },
    checkpoints: [
      { ru: 'Знакомство с целями курса и ролью NLP', uz: 'Kurs maqsadlari va NLP roli bilan tanishish' },
      { ru: 'Базовые задачи и примеры применения', uz: 'Asosiy vazifalar va qoʼllash misollari' }
    ]
  },
  {
    week: { ru: 'Неделя 2', uz: '2-hafta' },
    focus: { ru: 'Источники текстов и создание корпуса', uz: 'Matn manbalari va korpus tuzish' },
    checkpoints: [
      { ru: 'Сбор, лицензии и очистка данных', uz: 'Maʼlumot yigʼish, litsenziyalar va tozalash' },
      { ru: 'Разметка и балансировка корпуса', uz: 'Korpusni belgilash va balanslash' }
    ]
  },
  {
    week: { ru: 'Неделя 3', uz: '3-hafta' },
    focus: { ru: 'Подготовка текста: токенизация, нормализация', uz: 'Matn tayyorlash: tokenizatsiya, normallashtirish' },
    checkpoints: [
      { ru: 'Unicode, токенизация, очистка', uz: 'Unicode, tokenizatsiya, tozalash' },
      { ru: 'Нормализация, лемматизация/стемминг', uz: 'Normalizatsiya, lemmatizatsiya/stemming' }
    ]
  },
  {
    week: { ru: 'Неделя 4', uz: '4-hafta' },
    focus: { ru: 'Языковые модели: N-граммы, перплексия', uz: 'Til modellari: N-grammalar, perplexity' },
    checkpoints: [
      { ru: 'N-граммы и сглаживание', uz: 'N-grammalar va silliqlash' },
      { ru: 'Перплексия и оценка LM', uz: 'Perpleksiya va LM baholash' }
    ]
  },
  {
    week: { ru: 'Неделя 5', uz: '5-hafta' },
    focus: { ru: 'Стемминг и лемматизация', uz: 'Stemming va lemmatizatsiya' },
    checkpoints: [
      { ru: 'Алгоритмы Porter/Snowball', uz: 'Porter/Snowball algoritmlari' },
      { ru: 'Сравнение со словарной лемматизацией', uz: 'Lugʼaviy lemmatizatsiya bilan solishtirish' }
    ]
  },
  {
    week: { ru: 'Неделя 6', uz: '6-hafta' },
    focus: { ru: 'Определение частей речи (POS-tagging) и стоп-слова', uz: 'POS-teglash (soʼz turkumlari) va stop-soʼzlar' },
    checkpoints: [
      { ru: 'Теггеры: HMM/CRF/biLSTM-CRF', uz: 'Taggerlar: HMM/CRF/biLSTM-CRF' },
      { ru: 'Стоп-слова и их влияние на задачи', uz: 'Stop-soʼzlar va vazifalardagi taʼsiri' }
    ]
  },
  {
    week: { ru: 'Неделя 7', uz: '7-hafta' },
    focus: { ru: 'Текстовые признаки и модель TF-IDF', uz: 'Matn belgilari va TF-IDF modeli' },
    checkpoints: [
      { ru: 'Bag-of-Words, n-граммы', uz: 'Bag-of-Words, n-grammalar' },
      { ru: 'TF-IDF, косинусное сходство', uz: 'TF-IDF, kosinus oʼxshashlik' }
    ]
  },
  {
    week: { ru: 'Неделя 8', uz: '8-hafta' },
    focus: { ru: 'Сходство текстов', uz: 'Matnlar oʼxshashligi' },
    checkpoints: [
      { ru: 'Метрики Jaccard/BM25', uz: 'Jaccard/BM25 metrikalari' },
      { ru: 'Эмбеддинги предложений и сравнение', uz: 'Gap embeddinglari va taqqoslash' }
    ]
  },
  {
    week: { ru: 'Неделя 9', uz: '9-hafta' },
    focus: { ru: 'NER и анализ тональности', uz: 'NER va sentiment tahlili' },
    checkpoints: [
      { ru: 'BIO-разметка и модели NER', uz: 'BIO belgilash va NER modellari' },
      { ru: 'Классификация тональности', uz: 'Sentimentni klassifikatsiya qilish' }
    ]
  },
  {
    week: { ru: 'Неделя 10', uz: '10-hafta' },
    focus: { ru: 'Классификация текстов, машинное обучение и нейронные сети', uz: 'Matn klassifikatsiyasi, mashinaviy oʼqitish va neyron tarmoqlar' },
    checkpoints: [
      { ru: 'Логистическая регрессия, SVM', uz: 'Logistik regressiya, SVM' },
      { ru: 'Нейросетевые подходы, регуляризация', uz: 'Neyrotarmoq yondashuvlari, regulyarizatsiya' }
    ]
  },
  {
    week: { ru: 'Неделя 11', uz: '11-hafta' },
    focus: { ru: 'Основы тематического моделирования (topic modeling)', uz: 'Mavzuli modellashtirish asoslari (topic modeling)' },
    checkpoints: [
      { ru: 'LDA и когерентность', uz: 'LDA va coherence' },
      { ru: 'Контекстные модели тем', uz: 'Kontekstli mavzu modellari' }
    ]
  },
  {
    week: { ru: 'Неделя 12', uz: '12-hafta' },
    focus: { ru: 'Стилистометрия и стиль текста', uz: 'Stilometriya va matn uslubi' },
    checkpoints: [
      { ru: 'Символьные n-граммы, функциональные слова', uz: 'Belgi n-gramlari, funksional soʼzlar' },
      { ru: 'Атрибуция авторства', uz: 'Mualliflikni aniqlash' }
    ]
  },
  {
    week: { ru: 'Неделя 13', uz: '13-hafta' },
    focus: { ru: 'Векторные представления слов и кластеризация', uz: 'Soʼzlarning vektorli tasvirlari va klasterlash' },
    checkpoints: [
      { ru: 'CBOW/Skip-gram, fastText', uz: 'CBOW/Skip-gram, fastText' },
      { ru: 'Кластеризация, визуализация', uz: 'Klasterlash, vizualizatsiya' }
    ]
  },
  {
    week: { ru: 'Неделя 14', uz: '14-hafta' },
    focus: { ru: 'Векторный анализ и семантика текста', uz: 'Vektor tahlil va matn semantikasi' },
    checkpoints: [
      { ru: 'Косинус, аналогии, bias', uz: 'Kosinus, analogiyalar, bias' },
      { ru: 'Ретрофиттинг, выравнивание пространств', uz: 'Retrofitting, makonlarni tekislash' }
    ]
  },
  {
    week: { ru: 'Неделя 15', uz: '15-hafta' },
    focus: { ru: 'Синтаксические зависимости и анализ', uz: 'Sintaktik bogʼlanishlar va tahlil' },
    checkpoints: [
      { ru: 'UD, LAS/UAS метрики', uz: 'UD, LAS/UAS metrikalari' },
      { ru: 'Transition-based/graph-based парсеры', uz: 'Transition-based/graph-based parserlar' }
    ]
  },
  {
    week: { ru: 'Неделя 16', uz: '16-hafta' },
    focus: { ru: 'Автоматическое реферирование текста и введение в Transformer-модели', uz: 'Matnni avtomatik referat qilish va Transformer modellari bilan tanishuv' },
    checkpoints: [
      { ru: 'Экстрактивная vs абстрактивная', uz: 'Ekstraktiv va abstraktiv' },
      { ru: 'Encoder-decoder, beam search', uz: 'Encoder-decoder, beam search' }
    ]
  },
  {
    week: { ru: 'Неделя 17', uz: '17-hafta' },
    focus: { ru: 'Техники исправления текста', uz: 'Matnni tuzatish texnikalari' },
    checkpoints: [
      { ru: 'Spell-check, noisy channel', uz: 'Spell-check, noisy channel' },
      { ru: 'Грамматическая коррекция', uz: 'Grammatik tuzatish' }
    ]
  },
  {
    week: { ru: 'Неделя 18', uz: '18-hafta' },
    focus: { ru: 'Алгоритмы машинного перевода', uz: 'Mashina tarjimasi algoritmlari' },
    checkpoints: [
      { ru: 'SMT → NMT, attention', uz: 'SMT → NMT, attention' },
      { ru: 'Beam search, length penalty', uz: 'Beam search, length penalty' }
    ]
  }
];
