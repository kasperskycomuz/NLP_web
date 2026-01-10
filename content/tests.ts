type Localized = { ru: string; uz: string };

type TestType = {
  title: Localized;
  description: Localized;
  icon: string;
};

export const testTypes: TestType[] = [
  { title: { ru: 'Квизы', uz: 'Kvizlar' }, description: { ru: 'Тесты с выбором ответа по каждому модулю', uz: 'Har modul uchun variantli testlar' }, icon: '📝' },
  { title: { ru: 'Код-задачи', uz: 'Kod-topshiriqlar' }, description: { ru: 'Написание кода с автопроверкой', uz: 'Avtotekshiruv bilan kod yozish' }, icon: '🧩' },
  { title: { ru: 'Кейсы', uz: 'Kayslar' }, description: { ru: 'Разбор реальных сценариев применения', uz: "Amaliy qo'llash holatlarini tahlil qilish" }, icon: '🔍' },
  { title: { ru: 'Итоговые тесты', uz: 'Yakuniy testlar' }, description: { ru: 'Комплексная проверка по всему курсу', uz: 'Butun kurs boʼyicha kompleks tekshiruv' }, icon: '🏆' }
];
