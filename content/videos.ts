type Localized = { ru: string; uz: string };

type VideoCategory = {
  title: Localized;
  description: Localized;
  icon: string;
};

export const videoCategories: VideoCategory[] = [
  { title: { ru: 'Видеолекции', uz: "Videoma'ruzalar" }, description: { ru: 'Записи лекций с визуальными объяснениями', uz: "Vizual izohlar bilan yozib olingan ma'ruzalar" }, icon: '🎓' },
  { title: { ru: 'Код-разборы', uz: 'Kod tahlillari' }, description: { ru: 'Пошаговые разборы реализации алгоритмов', uz: 'Algoritmlarni bosqichma-bosqich koʼrib chiqish' }, icon: '💻' },
  { title: { ru: 'Интервью', uz: 'Intervyular' }, description: { ru: 'Беседы с практикующими специалистами', uz: 'Amaliy mutaxassislar bilan suhbatlar' }, icon: '🗣️' },
  { title: { ru: 'Демонстрации', uz: 'Demonstratsiyalar' }, description: { ru: 'Показ работы моделей и инструментов', uz: 'Modellar va vositalar ishlashini koʼrsatish' }, icon: '📊' }
];
