type Localized = { ru: string; uz: string };

type PracticeItem = {
  code: string;
  title: Localized;
  tools: string;
  level: Localized;
};

export const practiceItems: PracticeItem[] = [
  { code: 'P1', title: { ru: 'Токенизация узбекского текста', uz: 'Oʻzbek matnini tokenizatsiya qilish' }, tools: 'NLTK, spaCy', level: { ru: '⭐ Начальный', uz: '⭐ Boshlangʻich' } },
  { code: 'P2', title: { ru: 'Построение TF-IDF модели', uz: 'TF-IDF modelini qurish' }, tools: 'scikit-learn', level: { ru: '⭐ Начальный', uz: '⭐ Boshlangʻich' } },
  { code: 'P3', title: { ru: 'Обучение Word2Vec на корпусе', uz: 'Korpusda Word2Vec oʻqitish' }, tools: 'Gensim', level: { ru: '⭐⭐ Средний', uz: '⭐⭐ Oʻrta' } },
  { code: 'P4', title: { ru: 'Классификация новостей', uz: 'Yangiliklarni tasniflash' }, tools: 'PyTorch, Transformers', level: { ru: '⭐⭐ Средний', uz: '⭐⭐ Oʻrta' } },
  { code: 'P5', title: { ru: 'Sentiment-анализ отзывов', uz: 'Fikr-mulohazalarda sentiment tahlil' }, tools: 'HuggingFace', level: { ru: '⭐⭐ Средний', uz: '⭐⭐ Oʻrta' } },
  { code: 'P6', title: { ru: 'NER для узбекского языка', uz: 'Oʻzbek tili uchun NER' }, tools: 'spaCy, Flair', level: { ru: '⭐⭐⭐ Продвинутый', uz: '⭐⭐⭐ Ilgʻor' } },
  { code: 'P7', title: { ru: 'Fine-tuning BERT', uz: 'BERT ni nozik sozlash' }, tools: 'Transformers', level: { ru: '⭐⭐⭐ Продвинутый', uz: '⭐⭐⭐ Ilgʻor' } },
  { code: 'P8', title: { ru: 'Создание чат-бота', uz: 'Chat-bot yaratish' }, tools: 'LangChain, OpenAI', level: { ru: '⭐⭐⭐ Продвинутый', uz: '⭐⭐⭐ Ilgʻor' } }
];
