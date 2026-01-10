type Localized = { ru: string; uz: string };

type Question = {
  text: Localized;
  options: Localized[];
  answer: number; // index in options
};

export type TestTopic = {
  title: Localized;
  description: Localized;
  testsCount: number;
  icon: string;
  questions: Question[];
};

export const testTopics: TestTopic[] = [
  {
    title: { ru: 'Введение и основы алгоритмов NLP', uz: 'Kirish va NLP algoritmlarining asoslari' },
    description: { ru: 'Базовые понятия и задачи NLP', uz: 'NLP asosiy tushunchalari va vazifalari' },
    testsCount: 10,
    icon: '🧭',
    questions: [
      {
        text: { ru: 'Что делает NLP?', uz: 'NLP nima qiladi?' },
        options: [
          { ru: 'Учит машины понимать и генерировать текст/речь', uz: 'Matn va nutqni tushunish va yaratishni oʼrgatadi' },
          { ru: 'Рендерит 3D-графику', uz: '3D grafikani chizadi' },
          { ru: 'Управляет базами данных', uz: 'Maʼlumotlar bazasini boshqaradi' },
          { ru: 'Заменяет операционную систему', uz: 'Operatsion tizimni almashtiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Чем отличается правило-ориентированный подход от ML?', uz: 'Qoidali yondashuv ML dan nimasi bilan farq qiladi?' },
        options: [
          { ru: 'Правила пишутся вручную, ML обучает параметры на данных', uz: 'Qoidalar qoʼlda yoziladi, ML parametrlarni maʼlumotlarda oʼqitadi' },
          { ru: 'ML всегда точнее', uz: 'ML doimo aniqroq' },
          { ru: 'Правила используют только графы', uz: 'Qoidalar faqat graf ishlatadi' },
          { ru: 'ML не требует данных', uz: 'ML maʼlumot talab qilmaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой тип задач относится к NLP?', uz: 'Qaysi vazifa NLP ga tegishli?' },
        options: [
          { ru: 'Анализ тональности', uz: 'Sentiment tahlil' },
          { ru: 'Решение интегралов', uz: 'Integrallar yechish' },
          { ru: 'Рендер видео', uz: 'Video render' },
          { ru: 'Компрессия изображений', uz: 'Rasmlarni siqish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое пайплайн NLP?', uz: 'NLP pipeline nima?' },
        options: [
          { ru: 'Набор шагов препроцессинга и моделирования', uz: 'Preprocess va modellashtirish bosqichlari ketma-ketligi' },
          { ru: 'Алгоритм сортировки', uz: 'Saralash algoritmi' },
          { ru: 'Только визуализация', uz: 'Faqat vizualizatsiya' },
          { ru: 'Набор CSS-стилей', uz: 'CSS uslublari toʼplami' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Чем отличается NLU от NLG?', uz: 'NLU va NLG oʼrtasidagi farq nima?' },
        options: [
          { ru: 'NLU понимает, NLG генерирует', uz: 'NLU tushunadi, NLG yaratadi' },
          { ru: 'NLU всегда быстрее', uz: 'NLU har doim tez' },
          { ru: 'NLG только для речи', uz: 'NLG faqat nutq uchun' },
          { ru: 'Это одно и то же', uz: 'Bu ikkalasi bir xil' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое zero-shot в NLP?', uz: 'NLP da zero-shot nima?' },
        options: [
          { ru: 'Решение задачи без примеров обучения', uz: 'Treningsiz vazifani bajarish' },
          { ru: 'Обучение на нулевом датасете', uz: 'Nol datasetda oʼqitish' },
          { ru: 'Сеть без весов', uz: 'Ogʼirliksiz tarmoq' },
          { ru: 'Только ручные правила', uz: 'Faqat qoʼlda qoidalar' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему важна разметка данных?', uz: 'Nega maʼlumotlarni belgilash muhim?' },
        options: [
          { ru: 'Обучение супервизированных моделей требует меток', uz: 'Supervayzerdagi modellarga yorliqlar kerak' },
          { ru: 'Чтобы уменьшить размер корпуса', uz: 'Korpus hajmini kamaytirish uchun' },
          { ru: 'Чтобы ускорить GPU', uz: 'GPU ni tezlatish uchun' },
          { ru: 'Для визуализации', uz: 'Vizualizatsiya uchun' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой риск связан с data leakage?', uz: 'Data leakage xavfi nimada?' },
        options: [
          { ru: 'Утечка тестовой информации в обучение завышает метрики', uz: 'Test maʼlumoti treningga tushsa metrikalar shishadi' },
          { ru: 'Падает скорость GPU', uz: 'GPU sekinlashadi' },
          { ru: 'Уменьшается словарь', uz: 'Lugʼat kichrayadi' },
          { ru: 'Всегда повышает обобщение', uz: 'Doim umumlashuvni oshiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что относится к оценке классификатора?', uz: 'Klassifikatorni baholashga nima kiradi?' },
        options: [
          { ru: 'Precision, recall, F1', uz: 'Precision, recall, F1' },
          { ru: 'FPS и разрешение', uz: 'FPS va ruxsat' },
          { ru: 'Глубина цвета', uz: 'Rang chuqurligi' },
          { ru: 'IOPS диска', uz: 'Disk IOPS' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как отличить задачу NLU?', uz: 'NLU vazifasini qanday ajratish mumkin?' },
        options: [
          { ru: 'Она требует понимания смысла входа', uz: 'Kiritma maʼnosini tushunishni talab qiladi' },
          { ru: 'Всегда генерирует текст', uz: 'Har doim matn yaratadi' },
          { ru: 'Работает без данных', uz: 'Maʼlumotsiz ishlaydi' },
          { ru: 'Использует только правила', uz: 'Faqat qoidalar ishlatadi' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Источники текстов и создание корпуса', uz: 'Matn manbalari va korpus tuzish' },
    description: { ru: 'Сбор данных и подготовка корпусов', uz: 'Maʼlumot yigʻish va korpus tayyorlash' },
    testsCount: 10,
    icon: '🗂️',
    questions: [
      {
        text: { ru: 'Что такое золотой стандарт корпуса?', uz: "Korpusning oltin standarti nima?" },
        options: [
          { ru: 'Качественно размеченный корпус экспертами', uz: 'Ekspertlar sifatli belgilagan korpus' },
          { ru: 'Самый большой необработанный сборник', uz: 'Eng katta xom toʼplam' },
          { ru: 'Сжатый архив', uz: 'Siqilgan arxiv' },
          { ru: 'Любой веб-скрапинг', uz: 'Istalgan web-scraping' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем балансировать корпус?', uz: 'Korpusni nega balanslash kerak?' },
        options: [
          { ru: 'Чтобы уменьшить смещение модели', uz: 'Model ogʼishini kamaytirish uchun' },
          { ru: 'Чтобы увеличить размер файлов', uz: 'Fayl hajmini oshirish uchun' },
          { ru: 'Для ускорения GPU', uz: 'GPU ni tezlatish uchun' },
          { ru: 'Чтобы скрыть данные', uz: 'Maʼlumotlarni yashirish uchun' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какое типичное разбиение train/val/test?', uz: 'Train/val/test odatiy nisbati qanday?' },
        options: [
          { ru: '80/10/10', uz: '80/10/10' },
          { ru: '10/10/80', uz: '10/10/80' },
          { ru: '33/33/33', uz: '33/33/33' },
          { ru: '5/5/90', uz: '5/5/90' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что учитывать при web-scraping?', uz: 'Web-scrapingda nimalarga eʼtibor beriladi?' },
        options: [
          { ru: 'robots.txt и лицензии', uz: 'robots.txt va litsenziyalar' },
          { ru: 'Только скорость сети', uz: 'Faqat tarmoq tezligi' },
          { ru: 'Глубину стека вызовов', uz: 'Call stack chuqurligi' },
          { ru: 'Размер кэша', uz: 'Kesh hajmi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем нужны метаданные в корпусе?', uz: 'Korpusda metadata nima uchun kerak?' },
        options: [
          { ru: 'Фильтрация и анализ (жанр, дата, источник)', uz: 'Filtrlash va tahlil (janr, sana, manba)' },
          { ru: 'Для сжатия текста', uz: 'Matnni siqish uchun' },
          { ru: 'Для GPU-оптимизации', uz: 'GPU optimallashtirish uchun' },
          { ru: 'Только для визуализации', uz: 'Faqat vizualizatsiya uchun' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое sentence alignment?', uz: 'Sentence alignment nima?' },
        options: [
          { ru: 'Сопоставление предложений в параллельных корпусах', uz: 'Parallel korpuslarda gaplarni moslashtirish' },
          { ru: 'Выравнивание пикселей', uz: 'Piksel tekislash' },
          { ru: 'Синхронизация аудио', uz: 'Audio sinxronizatsiya' },
          { ru: 'Балансировка классов', uz: 'Sinflarni balanslash' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как уменьшить дубликаты в корпусе?', uz: 'Korpusda dublikatlarni qanday kamaytirish?' },
        options: [
          { ru: 'MinHash/SimHash фильтрация', uz: 'MinHash/SimHash filtrlash' },
          { ru: 'Увеличить размер шрифта', uz: 'Shriftni kattalashtirish' },
          { ru: 'Менять кодировку', uz: 'Kodlashni oʼzgartirish' },
          { ru: 'Смешивать языки', uz: 'Tillarning aralashtirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое guideline для разметчиков?', uz: 'Belgilovchilar uchun guideline nima?' },
        options: [
          { ru: 'Правила разметки для единообразия', uz: 'Yagona yondashuv uchun belgilash qoidalari' },
          { ru: 'Файл с логами', uz: 'Log fayl' },
          { ru: 'Набор шрифтов', uz: 'Shrift toʼplami' },
          { ru: 'Только лицензия', uz: 'Faqat litsenziya' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Главная причина удалять шум?', uz: 'Shovqinni olib tashlash sababi?' },
        options: [
          { ru: 'Шум снижает качество модели', uz: 'Shovqin model sifatini pasaytiradi' },
          { ru: 'Ускоряет GPU', uz: 'GPU ni tezlatadi' },
          { ru: 'Повышает частоту CPU', uz: 'CPU chastotasini oshiradi' },
          { ru: 'Меняет кодировку', uz: 'Kodlashni oʼzgartiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как защититься от лицензионных рисков?', uz: 'Litsenziya xataridan qanday saqlanish?' },
        options: [
          { ru: 'Использовать открытые лицензии и хранить ссылки на источник', uz: 'Ochiq litsenziyalar va manba havolalarini saqlash' },
          { ru: 'Скрывать автора', uz: 'Muallifni yashirish' },
          { ru: 'Удалять все метаданные', uz: 'Barcha metadatani oʼchirish' },
          { ru: 'Мешать тексты случайно', uz: 'Matnlarni tasodifiy aralashtirish' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Подготовка текста: токенизация, нормализация', uz: 'Matn tayyorlash: tokenizatsiya, normallashtirish' },
    description: { ru: 'Базовые шаги препроцессинга', uz: 'Preprocess bosqichlari' },
    testsCount: 10,
    icon: '✂️',
    questions: [
      {
        text: { ru: 'Чем отличается субсловная токенизация?', uz: 'Subsoʼz tokenizatsiyasi nimasi bilan farq qiladi?' },
        options: [
          { ru: 'Разбивает слова на куски для OOV', uz: 'Soʼzlarni OOV uchun boʼlaklaydi' },
          { ru: 'Удаляет все гласные', uz: 'Barcha unli harflarni oʼchiradi' },
          { ru: 'Сортирует токены', uz: 'Tokenlarni saralaydi' },
          { ru: 'Всегда даёт меньше токенов, чем слова', uz: 'Har doim soʼzdan kam token beradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что включает нормализация?', uz: 'Normalizatsiya nimalarni oʼz ichiga oladi?' },
        options: [
          { ru: 'Приведение регистра, очистку, лемматизацию', uz: 'Katta-kichik harf, tozalash, lemmatizatsiya' },
          { ru: 'Обучение модели', uz: 'Modelni oʼqitish' },
          { ru: 'Сжатие файлов', uz: 'Fayl siqish' },
          { ru: 'Настройку GPU', uz: 'GPU sozlash' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем Unicode NFC/NFKC?', uz: 'Unicode NFC/NFKC nima uchun?' },
        options: [
          { ru: 'Избежать разных представлений одного символа', uz: 'Bitta belgining turli koʼrinishlarini oldini olish' },
          { ru: 'Ускорить сеть', uz: 'Tarmoqni tezlatish' },
          { ru: 'Увеличить размер текста', uz: 'Matn hajmini oshirish' },
          { ru: 'Добавить эмодзи', uz: 'Emodzilar qoʼshish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какая проблема у простого split по пробелу?', uz: 'Fazo boʼyicha oddiy splitning muammosi nima?' },
        options: [
          { ru: 'Не работает для агглютинативных языков и пунктуации', uz: 'Agglutinativ tillar va tinish belgilarida ishlamaydi' },
          { ru: 'Слишком медленный', uz: 'Juda sekin' },
          { ru: 'Требует GPU', uz: 'GPU talab qiladi' },
          { ru: 'Меняет порядок слов', uz: 'Soʼz tartibini oʼzgartiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как уменьшить влияние пунктуации?', uz: 'Tinish belgilarining taʼsirini qanday kamaytirish?' },
        options: [
          { ru: 'Удалить/нормализовать знаки или учитывать их отдельно', uz: 'Belgilarni oʼchirish/yagona qilish yoki alohida hisoblash' },
          { ru: 'Увеличить шрифт', uz: 'Shriftni kattalashtirish' },
          { ru: 'Сортировать предложения', uz: 'Gaplarni saralash' },
          { ru: 'Всегда оставить как есть', uz: 'Har doim qoldirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как работать с многословными выражениями?', uz: 'Koʼp soʼzli iboralar bilan qanday ishlash?' },
        options: [
          { ru: 'Использовать списки MWEs или поиск коллокаций', uz: 'MWE roʼyxatlari yoki kollokatsiya qidirish' },
          { ru: 'Удалять все пробелы', uz: 'Barcha boʼsh joylarni oʼchirish' },
          { ru: 'Перемешивать слова', uz: 'Soʼzlarni aralashtirish' },
          { ru: 'Всегда разделять', uz: 'Har doim ajratish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему лемматизация зависит от POS?', uz: 'Lemmatizatsiya nega POS ga bogʼliq?' },
        options: [
          { ru: 'Лемма глагола и существительного различается', uz: 'Feʼl va ot lemmasi farq qiladi' },
          { ru: 'POS ускоряет GPU', uz: 'POS GPU ni tezlatadi' },
          { ru: 'POS уменьшает длину текста', uz: 'POS matn uzunligini kamaytiradi' },
          { ru: 'Не зависит', uz: 'Bogʼliq emas' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как обрабатывать OOV?', uz: 'OOV ni qanday koʼrib chiqamiz?' },
        options: [
          { ru: 'Субсловные модели BPE/WordPiece', uz: 'BPE/WordPiece subsoʼz modellari' },
          { ru: 'Удалить токен', uz: 'Tokenga oʼchirish' },
          { ru: 'Поменять язык', uz: 'Tilni almashtirish' },
          { ru: 'Игнорировать всё предложение', uz: 'Butun gapni tashlash' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что даёт приведение регистра?', uz: 'Katta-kichik harfni birxillashtirish nima beradi?' },
        options: [
          { ru: 'Снижает размер словаря', uz: 'Lugʼat hajmini kamaytiradi' },
          { ru: 'Увеличивает параметры модели', uz: 'Model parametrlarini oshiradi' },
          { ru: 'Убирает пунктуацию', uz: 'Tinish belgilarini olib tashlaydi' },
          { ru: 'Меняет синтаксис', uz: 'Sintaksisni oʼzgartiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Когда нормализация может навредить?', uz: 'Normalizatsiya qachon zarar yetkazishi mumkin?' },
        options: [
          { ru: 'Когда важна точная форма (например, имена)', uz: 'Aniq shakl muhim boʼlsa (masalan, ismlar)' },
          { ru: 'Всегда полезна', uz: 'Har doim foydali' },
          { ru: 'При коротких текстах', uz: 'Qisqa matnlarda' },
          { ru: 'Вне зависимости от задачи', uz: 'Vazifadan qatʼi nazar' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Языковые модели: N-граммы, перплексия', uz: 'Til modellari: N-grammalar, perplexity' },
    description: { ru: 'Частотные LM и оценка качества', uz: 'Chastota LM va sifat baholash' },
    testsCount: 10,
    icon: '📈',
    questions: [
      {
        text: { ru: 'Что измеряет перплексия?', uz: 'Perplexity nima oʼlchaydi?' },
        options: [
          { ru: 'Насколько модель удивлена тестовым текстом (чем ниже, тем лучше)', uz: 'Model test matnidan qanchalik hayratda (past boʼlsa yaxshi)' },
          { ru: 'Длину слов', uz: 'Soʼz uzunligini' },
          { ru: 'Частоту GPU', uz: 'GPU chastotasini' },
          { ru: 'Размер словаря', uz: 'Lugʼat hajmini' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем нужна сглаживание в N-граммах?', uz: 'N-gramda silliqlash nima uchun?' },
        options: [
          { ru: 'Чтобы дать ненулевую вероятность редким/невидимым n-граммам', uz: 'Kam/koʼrilmagan n-grammalarga nol boʼlmagan ehtimol berish' },
          { ru: 'Чтобы уменьшить словарь', uz: 'Lugʼatni kamaytirish' },
          { ru: 'Чтобы ускорить GPU', uz: 'GPU ni tezlatish' },
          { ru: 'Чтобы сортировать токены', uz: 'Tokenlarni saralash' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Чем отличается бэкоф от интерполяции?', uz: 'Back-off va interpolatsiya farqi nima?' },
        options: [
          { ru: 'Бэкоф падает на меньший n, интерполяция смешивает уровни', uz: 'Back-off n ni kamaytiradi, interpolatsiya darajalarni aralashtiradi' },
          { ru: 'Это одно и то же', uz: 'Ikkalasi bir xil' },
          { ru: 'Бэкоф сложнее', uz: 'Back-off murakkabroq' },
          { ru: 'Интерполяция запрещена', uz: 'Interpolatsiya taqiqlangan' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему растёт разреженность при увеличении N?', uz: 'N oshganda siyraklik nega ortadi?' },
        options: [
          { ru: 'Комбинаций токенов экспоненциально больше', uz: 'Token kombinatsiyalari eksponentsial koʼpayadi' },
          { ru: 'Память уменьшается', uz: 'Xotira kamayadi' },
          { ru: 'Меньше слов', uz: 'Kamroq soʼz' },
          { ru: 'Больше пунктуации', uz: 'Koʼproq tinish belgisi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как снизить OOV в N-граммной LM?', uz: 'N-gram LM da OOV ni qanday kamaytirish?' },
        options: [
          { ru: 'Использовать <unk> и подслова', uz: '<unk> va subsoʼzlardan foydalanish' },
          { ru: 'Удалить стоп-слова', uz: 'Stop-soʼzlarni oʼchirish' },
          { ru: 'Менять порядок предложений', uz: 'Gap tartibini oʼzgartirish' },
          { ru: 'Всегда использовать unigram', uz: 'Har doim unigram ishlatish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что нужно добавить в корпус для LM?', uz: 'LM uchun korpusga nima qoʼshish kerak?' },
        options: [
          { ru: 'Токены начала/конца предложения', uz: 'Gap bosh/oxir tokenlari' },
          { ru: 'HTML-теги', uz: 'HTML teglar' },
          { ru: 'Число строк', uz: 'Qator soni' },
          { ru: 'Размер шрифта', uz: 'Shrift hajmi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как оценивать LM?', uz: 'LM ni qanday baholash?' },
        options: [
          { ru: 'Перплексией на тестовом тексте', uz: 'Test matnida perplexity bilan' },
          { ru: 'Точностью классификации', uz: 'Klassifikatsiya aniqligi' },
          { ru: 'FPS', uz: 'FPS' },
          { ru: 'BLEU', uz: 'BLEU' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что делает Kneser-Ney?', uz: 'Kneser-Ney nima qiladi?' },
        options: [
          { ru: 'Перераспределяет вероятность редким продолжениям', uz: 'Kam davomlar ehtimolini qayta taqsimlaydi' },
          { ru: 'Увеличивает словарь', uz: 'Lugʼatni oshiradi' },
          { ru: 'Удаляет биграммы', uz: 'Bigrammalarni oʼchiradi' },
          { ru: 'Сортирует предложения', uz: 'Gaplarni saralaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему низкая перплексия желательна?', uz: 'Past perplexity nega kerak?' },
        options: [
          { ru: 'Модель лучше предсказывает тестовый текст', uz: 'Model test matnini yaxshi bashorat qiladi' },
          { ru: 'Модель быстрее', uz: 'Model tezroq' },
          { ru: 'Словарь меньше', uz: 'Lugʼat kichik' },
          { ru: 'GPU холоднее', uz: 'GPU sovuq' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой минус у больших N?', uz: 'Katta N ning minusi nima?' },
        options: [
          { ru: 'Память и переобучение растут', uz: 'Xotira va overfitting ortadi' },
          { ru: 'Перплексия всегда падает до нуля', uz: 'Perplexity nolga tushadi' },
          { ru: 'Скорость не меняется', uz: 'Tezlik oʼzgarmaydi' },
          { ru: 'Нет минусов', uz: 'Minus yoʼq' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Стемминг и лемматизация', uz: 'Stemming va lemmatizatsiya' },
    description: { ru: 'Нормализация словоформ', uz: 'Soʻz shakllarini normallashtirish' },
    testsCount: 10,
    icon: '🪶',
    questions: [
      {
        text: { ru: 'Основной минус стемминга?', uz: 'Stemmingning asosiy kamchiligi?' },
        options: [
          { ru: 'Может исказить смысл слова', uz: 'Soʼz maʼnosini buzishi mumkin' },
          { ru: 'Требует большой словарь', uz: 'Katta lugʼat talab qiladi' },
          { ru: 'Не работает без GPU', uz: 'GPU siz ishlamaydi' },
          { ru: 'Увеличивает количество токенов', uz: 'Tokenlar sonini oshiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что нужно для лемматизации?', uz: 'Lemmatizatsiya uchun nima kerak?' },
        options: [
          { ru: 'Словарь и правила морфологии', uz: 'Lugʼat va morfologiya qoidalari' },
          { ru: 'Генератор шума', uz: 'Shovqin generatori' },
          { ru: 'GPU', uz: 'GPU' },
          { ru: 'Только частотность', uz: 'Faqat chastota' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Porter vs Snowball?', uz: 'Porter va Snowball farqi?' },
        options: [
          { ru: 'Snowball — улучшенная/более гибкая версия Porter', uz: 'Snowball — Porter ning takomillashtirilgan versiyasi' },
          { ru: 'Porter медленнее', uz: 'Porter sekin' },
          { ru: 'Snowball только для русского', uz: 'Snowball faqat ruscha uchun' },
          { ru: 'Это лемматизаторы', uz: 'Ular lemmatizatorlar' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Когда лучше лемматизация, а не стемминг?', uz: 'Qachon lemmatizatsiya stemmingdan afzal?' },
        options: [
          { ru: 'В морфологически богатых языках', uz: 'Morfologik boy tillarda' },
          { ru: 'При коротких словах', uz: 'Qisqa soʼzlarda' },
          { ru: 'Когда нет теггера', uz: 'Tagger yoʼq boʼlganda' },
          { ru: 'Всегда стемминг лучше', uz: 'Har doim stemming yaxshi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как стемминг влияет на precision/recall?', uz: 'Stemming precision/recall ga qanday taʼsir qiladi?' },
        options: [
          { ru: 'Повышает полноту, может снизить точность', uz: 'Recall oshiradi, precision tushishi mumkin' },
          { ru: 'Всегда повышает precision', uz: 'Doim precisionni oshiradi' },
          { ru: 'Не влияет', uz: 'Taʼsir qilmaydi' },
          { ru: 'Снижает recall', uz: 'Recall ni kamaytiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему лемматизация зависит от POS?', uz: 'Lemmatizatsiya nega POS ga bogʼliq?' },
        options: [
          { ru: 'Часть речи определяет правильную базовую форму', uz: 'Soʼz turkumi toʼgʼri bazaviy shaklni belgilaydi' },
          { ru: 'Ускоряет GPU', uz: 'GPU ni tezlatadi' },
          { ru: 'Меняет частоту', uz: 'Chastotani oʼzgartiradi' },
          { ru: 'Не зависит', uz: 'Bogʼliq emas' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как оценить влияние нормализации?', uz: 'Normalizatsiya taʼsirini qanday baholash?' },
        options: [
          { ru: 'Сравнить метрики downstream-модели', uz: 'Keyingi model metriksini solishtirish' },
          { ru: 'Посчитать число токенов', uz: 'Token sonini sanash' },
          { ru: 'Посмотреть цвет логотипа', uz: 'Logotip rangini koʼrish' },
          { ru: 'Измерить FPS', uz: 'FPS ni oʼlchash' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Пример ошибки стемминга?', uz: 'Stemming xatosiga misol?' },
        options: [
          { ru: 'studies → studi', uz: 'studies → studi' },
          { ru: 'dogs → dog', uz: 'dogs → dog' },
          { ru: 'run → run', uz: 'run → run' },
          { ru: 'go → went', uz: 'go → went' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Где стемминг полезен?', uz: 'Qayerda stemming foydali?' },
        options: [
          { ru: 'Поиск и ранжирование документов', uz: 'Qidiruv va hujjatlarni tartiblash' },
          { ru: 'Синтаксический разбор', uz: 'Sintaktik tahlil' },
          { ru: 'Перевод', uz: 'Tarjima' },
          { ru: 'Чат-боты', uz: 'Chat-botlar' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Когда сочетать стемминг и лемматизацию?', uz: 'Qachon stemming va lemmatizatsiyani birlashtirish?' },
        options: [
          { ru: 'Когда нужно уменьшить словарь, но сохранить смысл', uz: 'Lugʼatni kamaytirib, maʼnoni saqlash kerak boʼlsa' },
          { ru: 'Никогда', uz: 'Hech qachon' },
          { ru: 'Только для цифр', uz: 'Faqat sonlar uchun' },
          { ru: 'Только для эмодзи', uz: 'Faqat emodzi uchun' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Определение частей речи и стоп-слова', uz: 'Soʻz turkumlari (POS-tagging) va stop-soʻzlar' },
    description: { ru: 'POS-теггинг и фильтрация', uz: 'POS teglash va filtrlash' },
    testsCount: 10,
    icon: '🏷️',
    questions: [
      {
        text: { ru: 'Для чего POS-теггинг?', uz: 'POS-tegging nima uchun?' },
        options: [
          { ru: 'Определить часть речи каждого токена', uz: 'Har tokenning soʼz turkumini aniqlash' },
          { ru: 'Разбить на предложения', uz: 'Gaplarga boʼlish' },
          { ru: 'Удалить пунктуацию', uz: 'Tinish belgilarini oʼchirish' },
          { ru: 'Сделать перевод', uz: 'Tarjima qilish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Когда удаление стоп-слов вредно?', uz: 'Stop-soʼzlarni oʼchirish qachon zararli?' },
        options: [
          { ru: 'В задачах тональности (важны отрицания)', uz: 'Sentimentda (inkorlar muhim)' },
          { ru: 'Всегда полезно', uz: 'Har doim foydali' },
          { ru: 'В классификации тем', uz: 'Mavzu klassifikatsiyada' },
          { ru: 'В поиске', uz: 'Qidiruvda' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой алгоритм применим для POS?', uz: 'POS uchun qaysi algoritm ishlaydi?' },
        options: [
          { ru: 'CRF/HMM/biLSTM-CRF', uz: 'CRF/HMM/biLSTM-CRF' },
          { ru: 'FFT', uz: 'FFT' },
          { ru: 'KD-tree', uz: 'KD-tree' },
          { ru: 'DBSCAN', uz: 'DBSCAN' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что входит в Universal POS tagset?', uz: 'Universal POS tagset nimalarni oʼz ichiga oladi?' },
        options: [
          { ru: 'NOUN, VERB, ADJ и др.', uz: 'NOUN, VERB, ADJ va boshqalar' },
          { ru: 'RGB', uz: 'RGB' },
          { ru: 'TCP/UDP', uz: 'TCP/UDP' },
          { ru: 'GET/POST', uz: 'GET/POST' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему важен контекст для POS?', uz: 'POS uchun kontekst nega muhim?' },
        options: [
          { ru: 'Слово может быть разных частей речи', uz: 'Soʼz turli turkumda boʼlishi mumkin' },
          { ru: 'Контекст ускоряет GPU', uz: 'Kontekst GPU ni tezlatadi' },
          { ru: 'Контекст меняет кодировку', uz: 'Kontekst kodlashni oʼzgartiradi' },
          { ru: 'Не важен', uz: 'Muhim emas' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что делать с отрицаниями при стоп-словах?', uz: 'Stop-soʼzlarda inkorlarni nima qilish kerak?' },
        options: [
          { ru: 'Сохранять «не/emas/yoʼq»', uz: '"не/emas/yoʼq" ni saqlash' },
          { ru: 'Всегда удалять', uz: 'Har doim oʼchirish' },
          { ru: 'Заменять на <unk>', uz: '<unk> ga almashtirish' },
          { ru: 'Объединять с соседними', uz: 'Qoʼshnilar bilan birlashtirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Метрика для POS-теггера?', uz: 'POS-tegger uchun metrika?' },
        options: [
          { ru: 'Accuracy per token', uz: 'Token boʼyicha accuracy' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' },
          { ru: 'WER', uz: 'WER' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как влияет доменный сдвиг?', uz: 'Domen siljishi qanday taʼsir qiladi?' },
        options: [
          { ru: 'Снижает точность, если тэггер обучен на другом домене', uz: 'Boshqa domenda oʼqitilsa aniqlik tushadi' },
          { ru: 'Ускоряет инференс', uz: 'Inference tezlashadi' },
          { ru: 'Всегда улучшает тэггер', uz: 'Har doim yaxshilaydi' },
          { ru: 'Не влияет', uz: 'Taʼsir qilmaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Пример многозначного слова для POS?', uz: 'POS uchun koʼp maʼnoli soʼz misoli?' },
        options: [
          { ru: 'book (существительное/глагол)', uz: 'book (ot/feʼl)' },
          { ru: 'CPU', uz: 'CPU' },
          { ru: 'HTML', uz: 'HTML' },
          { ru: 'API', uz: 'API' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какие данные нужны для обучения POS?', uz: 'POSni oʼqitish uchun qanday maʼlumot kerak?' },
        options: [
          { ru: 'Размеченные предложения с тегами', uz: 'Teglangan gaplar' },
          { ru: 'Только неразмеченный текст', uz: 'Faqat belgisiz matn' },
          { ru: 'Только аудио', uz: 'Faqat audio' },
          { ru: 'Изображения', uz: 'Rasmlar' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Текстовые признаки и модель TF-IDF', uz: 'Matn belgilari va TF-IDF' },
    description: { ru: 'Векторизация документов', uz: 'Hujjatlarni vektorlash' },
    testsCount: 10,
    icon: '📊',
    questions: [
      {
        text: { ru: 'Что отражает IDF?', uz: 'IDF nima koʼrsatadi?' },
        options: [
          { ru: 'Обратную частоту документа (редкость слова)', uz: 'Hujjatdagi teskari chastota (soʼzning kamligi)' },
          { ru: 'Длину документа', uz: 'Hujjat uzunligi' },
          { ru: 'Цвет текста', uz: 'Matn rangi' },
          { ru: 'FPS', uz: 'FPS' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем нормировать TF-IDF вектор?', uz: 'TF-IDF vektorini nega normallashtiramiz?' },
        options: [
          { ru: 'Чтобы сравнивать косинусно без влияния длины', uz: 'Uzunlik taʼsirini olib tashlab, kosinusda solishtirish uchun' },
          { ru: 'Чтобы увеличить размер', uz: 'Hajmni oshirish uchun' },
          { ru: 'Чтобы сменить язык', uz: 'Tilni almashtirish uchun' },
          { ru: 'Для визуализации', uz: 'Vizualizatsiya uchun' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как влияет n-gram на размер признаков?', uz: 'N-gram belgi oʼlchamiga qanday taʼsir qiladi?' },
        options: [
          { ru: 'Чем выше n, тем больше признаков', uz: 'n oshsa, belgi soni oshadi' },
          { ru: 'Уменьшает признаки', uz: 'Belgilarni kamaytiradi' },
          { ru: 'Не меняет', uz: 'Oʼzgarmaydi' },
          { ru: 'Делает признаки отрицательными', uz: 'Belgilarni manfiy qiladi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что даёт sublinear tf?', uz: 'Sublinear tf nima beradi?' },
        options: [
          { ru: 'Смягчает влияние очень частых слов', uz: 'Juda koʼp uchraydigan soʼzlarning taʼsirini yumshatadi' },
          { ru: 'Ускоряет GPU', uz: 'GPU ni tezlatadi' },
          { ru: 'Удаляет редкие слова', uz: 'Kam soʼzlarni oʼchiradi' },
          { ru: 'Меняет язык', uz: 'Tilni oʼzgartiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какая метрика чаще с TF-IDF?', uz: 'TF-IDF bilan qaysi metrika koʼproq?' },
        options: [
          { ru: 'Cosine similarity', uz: 'Kosinus oʼxshashlik' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'WER', uz: 'WER' },
          { ru: 'ROUGE-L', uz: 'ROUGE-L' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как хранить TF-IDF эффективно?', uz: 'TF-IDF ni samarali qanday saqlash?' },
        options: [
          { ru: 'Разреженные матрицы (CSR/COO)', uz: 'Siyrak matritsalar (CSR/COO)' },
          { ru: 'JPEG', uz: 'JPEG' },
          { ru: 'CSV с дубликатами', uz: 'CSV dublikatlar bilan' },
          { ru: 'Видео файл', uz: 'Video fayl' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что делать со стоп-словами перед TF-IDF?', uz: 'TF-IDF dan oldin stop-soʼzlar bilan nima qilish kerak?' },
        options: [
          { ru: 'Удалить или понизить', uz: 'Oʼchirish yoki pasaytirish' },
          { ru: 'Удвоить', uz: 'Ikki baravar qilish' },
          { ru: 'Игнорировать', uz: 'Eʼtibor bermaslik' },
          { ru: 'Заменить на числа', uz: 'Sonlarga almashtirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что означает высокий IDF?', uz: 'Yuqori IDF nimani anglatadi?' },
        options: [
          { ru: 'Слово редкое и более информативное', uz: 'Soʼz kam va informativ' },
          { ru: 'Слово очень частое', uz: 'Juda koʼp uchraydi' },
          { ru: 'Слово удалено', uz: 'Soʼz oʼchirilgan' },
          { ru: 'Слово — число', uz: 'Soʼz raqam' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как длина документа влияет на tf?', uz: 'Hujjat uzunligi tf ga qanday taʼsir qiladi?' },
        options: [
          { ru: 'Длинные тексты дают больше счётчиков tf', uz: 'Uzun matn koʼproq tf hisoblaydi' },
          { ru: 'Не влияет', uz: 'Taʼsir qilmaydi' },
          { ru: 'tf становится отрицательным', uz: 'tf manfiy boʼladi' },
          { ru: 'tf делится на длину всегда', uz: 'tf doim uzunlikka boʼlinadi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что даёт биграммы в TF-IDF?', uz: 'TF-IDF da bigrammalar nima beradi?' },
        options: [
          { ru: 'Учитывают порядок соседних слов', uz: 'Qoʼshni soʼzlar tartibini hisobga oladi' },
          { ru: 'Уменьшают память', uz: 'Xotirani kamaytiradi' },
          { ru: 'Убирают редкие слова', uz: 'Kam soʼzlarni olib tashlaydi' },
          { ru: 'Меняют кодировку', uz: 'Kodlashni oʼzgartiradi' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Сходство текстов', uz: 'Matnlar oʻxshashligi' },
    description: { ru: 'Метрики расстояний и сходства', uz: 'Masofa va oʻxshashlik metrikalari' },
    testsCount: 10,
    icon: '🤝',
    questions: [
      {
        text: { ru: 'Почему косинус часто лучше евклидова для TF-IDF?', uz: 'Nega TF-IDF uchun koʼproq kosinus ishlatiladi?' },
        options: [
          { ru: 'Он не зависит от длины вектора', uz: 'Vektor uzunligiga kam bogʼliq' },
          { ru: 'Он всегда 0', uz: 'Doim 0 boʼladi' },
          { ru: 'Он быстрее любого', uz: 'U hammasidan tez' },
          { ru: 'Требует GPU', uz: 'GPU talab qiladi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Когда уместен Jaccard?', uz: 'Jaccard qachon mos?' },
        options: [
          { ru: 'Для множеств/шинглов без учёта частот', uz: 'Chastotasiz toʼplam/shingl uchun' },
          { ru: 'Для плотных векторов', uz: 'Zich vektorlar uchun' },
          { ru: 'Для аудио', uz: 'Audio uchun' },
          { ru: 'Для картинок', uz: 'Rasmlar uchun' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что лучше для эмбеддингов предложений?', uz: 'Gap embeddinglari uchun nimalar yaxshi?' },
        options: [
          { ru: 'Косинусное расстояние', uz: 'Kosinus masofa' },
          { ru: 'L0 норма', uz: 'L0 norma' },
          { ru: 'Hamming', uz: 'Hamming' },
          { ru: 'Jaccard', uz: 'Jaccard' }
        ],
        answer: 0
      },
      {
        text: { ru: 'BM25 применяется где?', uz: 'BM25 qayerda qoʼllanadi?' },
        options: [
          { ru: 'Поисковое ранжирование документов', uz: 'Hujjatlarni qidiruvda reytinglash' },
          { ru: 'Сегментация изображений', uz: 'Rasm segmentatsiyasi' },
          { ru: 'Speech-to-text', uz: 'Nutqdan matnga' },
          { ru: 'ASR', uz: 'ASR' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему надо нормировать векторы перед сравнениями?', uz: 'Taqqoslashdan oldin vektorlarni nega normallashtirish kerak?' },
        options: [
          { ru: 'Чтобы убрать влияние длины', uz: 'Uzunlik taʼsirini olib tashlash' },
          { ru: 'Чтобы увеличить размер', uz: 'Hajmni oshirish' },
          { ru: 'Для смены языка', uz: 'Tilni almashtirish uchun' },
          { ru: 'Всегда делает хуже', uz: 'Har doim yomonlashtiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Минус усреднения эмбеддингов слов?', uz: 'Soʼz embeddinglarini oʼrtacha olishning kamchiligi?' },
        options: [
          { ru: 'Теряется порядок и синтаксис', uz: 'Tartib va sintaksis yoʼqoladi' },
          { ru: 'Становится плотным', uz: 'Zich boʼlib qoladi' },
          { ru: 'Увеличивает шум', uz: 'Shovqin oshadi' },
          { ru: 'Нельзя считать косинус', uz: 'Kosinus hisoblab boʼlmaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Чем лучше sentence-transformers?', uz: 'Sentence-transformerlar nimasi bilan yaxshi?' },
        options: [
          { ru: 'Дают контекстные эмбеддинги предложений', uz: 'Gap uchun kontekstli embeddinglar beradi' },
          { ru: 'Меньше параметров всегда', uz: 'Doim kam parametr' },
          { ru: 'Не требуют данных', uz: 'Maʼlumot talab qilmaydi' },
          { ru: 'Работают только на числах', uz: 'Faqat sonlarda ishlaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Чем плох WMD (Word Mover’s Distance)?', uz: 'WMD ning kamchiligi?' },
        options: [
          { ru: 'Очень медленный/дорогой вычислительно', uz: 'Juda sekin/kompyuter jihatdan qimmat' },
          { ru: 'Только для аудио', uz: 'Faqat audio' },
          { ru: 'Нельзя применить к embedding', uz: 'Embeddingga qoʼllab boʼlmaydi' },
          { ru: 'Не симметричен', uz: 'Simmetrik emas' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как получить разметку для оценки similarity?', uz: 'Oʼxshashlikni baholash uchun qanday belgilash kerak?' },
        options: [
          { ru: 'Пары с меткой «парафраз/не парафраз»', uz: 'Parafraz/emas yorliqli juftliklar' },
          { ru: 'Частоты слов', uz: 'Soʼz chastotalari' },
          { ru: 'Счётчики символов', uz: 'Belgi sanogʼi' },
          { ru: 'Длина предложений', uz: 'Gap uzunligi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как оценить качество кластеров похожих текстов?', uz: 'Oʼxshash matn klasterlari sifatini qanday baholash?' },
        options: [
          { ru: 'Silhouette / NMI / ARI', uz: 'Silhouette / NMI / ARI' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' },
          { ru: 'FPS', uz: 'FPS' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'NER и анализ тональности', uz: 'NER va sentiment tahlili' },
    description: { ru: 'Извлечение сущностей и тональность', uz: 'Obyektlarni ajratish va ohang' },
    testsCount: 10,
    icon: '🧠',
    questions: [
      {
        text: { ru: 'Пример тегов NER?', uz: 'NER teglari misoli?' },
        options: [
          { ru: 'PER, ORG, LOC', uz: 'PER, ORG, LOC' },
          { ru: 'HTML, CSS, JS', uz: 'HTML, CSS, JS' },
          { ru: 'CPU, GPU', uz: 'CPU, GPU' },
          { ru: 'RGB, CMYK', uz: 'RGB, CMYK' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какие классы у тональности базово?', uz: 'Sentimentning asosiy sinflari?' },
        options: [
          { ru: 'Позитив, негатив, нейтрально', uz: 'Ijobiy, salbiy, neytral' },
          { ru: 'Только позитив', uz: 'Faqat ijobiy' },
          { ru: 'Только негатив', uz: 'Faqat salbiy' },
          { ru: 'Цвета', uz: 'Ranglar' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое BIO схема?', uz: 'BIO sxema nima?' },
        options: [
          { ru: 'Разметка начала/внутри/вне сущности', uz: 'Obyekt bosh/ichida/tashqarisida belgisi' },
          { ru: 'Баланс классов', uz: 'Sinflarni balanslash' },
          { ru: 'Метод обучения', uz: 'Oʼqitish usuli' },
          { ru: 'Метрика', uz: 'Metrika' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как дообучить трансформер под NER?', uz: 'NER uchun transformerini qanday moslashtirish?' },
        options: [
          { ru: 'Добавить выходной слой токен-классификации и fine-tune', uz: 'Token klassifikatsiya chiqish qatlamini qoʼshib fine-tune qilish' },
          { ru: 'Поменять токенайзер на BPE', uz: 'Tokenizerni BPE ga almashtirish' },
          { ru: 'Убрать все слои', uz: 'Barcha qatlamlarni olib tashlash' },
          { ru: 'Только использовать CLS', uz: 'Faqat CLS ishlatish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как бороться с дисбалансом в тональности?', uz: 'Sentimentdagi disbalansga qanday kurashiladi?' },
        options: [
          { ru: 'Взвешивание классов/oversampling', uz: 'Sinf ogʼirliklari/oversampling' },
          { ru: 'Игнорировать', uz: 'Eʼtibor bermaslik' },
          { ru: 'Удалить большинство данных', uz: 'Maʼlumotlarning koʼpini oʼchirish' },
          { ru: 'Убрать стоп-слова', uz: 'Stop-soʼzlarni olib tashlash' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какая метрика важна для NER?', uz: 'NER uchun qaysi metrika muhim?' },
        options: [
          { ru: 'F1 по сущностям (entity-level)', uz: 'Entity-level F1' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE-1', uz: 'ROUGE-1' },
          { ru: 'Cosine', uz: 'Kosinus' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему сарказм сложен для тональности?', uz: 'Nima uchun kinoya sentimentga qiyin?' },
        options: [
          { ru: 'Лингвистические сигналы противоположны буквальному смыслу', uz: 'Til signallari literal maʼnoga teskari' },
          { ru: 'Слишком короткие тексты', uz: 'Juda qisqa matnlar' },
          { ru: 'Нет слов', uz: 'Soʼz yoʼq' },
          { ru: 'Длины одинаковы', uz: 'Uzunlik bir xil' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что усложняет NER?', uz: 'NER ni nimalar qiyinlashtiradi?' },
        options: [
          { ru: 'Вложенные/редкие сущности, доменный сдвиг', uz: 'Ichki/kam obyektlar, domen siljishi' },
          { ru: 'Короткий словарь', uz: 'Kichik lugʼat' },
          { ru: 'Большой шрифт', uz: 'Katta shrift' },
          { ru: 'Много цифр', uz: 'Koʼp raqam' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как адаптировать NER к новому домену?', uz: 'NERni yangi domenga qanday moslash?' },
        options: [
          { ru: 'Дообучение на целевом домене', uz: 'Maqsad domenida fine-tune qilish' },
          { ru: 'Удалить обучение', uz: 'Oʼqitishni oʼchirish' },
          { ru: 'Увеличить batch size', uz: 'Batch size oshirish' },
          { ru: 'Менять токенайзер', uz: 'Tokenizerni almashtirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой подход к тональности без разметки?', uz: 'Belgisiz sentiment uchun yondashuv?' },
        options: [
          { ru: 'Лексиконный (словарь тональных слов)', uz: 'Leksikon (ohang soʼzlar lugʼati)' },
          { ru: 'CRF', uz: 'CRF' },
          { ru: 'HMM', uz: 'HMM' },
          { ru: 'BLEU', uz: 'BLEU' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Классификация текстов и ML/нейросети', uz: 'Matn klassifikatsiyasi, ML va neyrotarmoqlar' },
    description: { ru: 'Классические и нейросетевые подходы', uz: 'Klassik va neyro yondashuvlar' },
    testsCount: 10,
    icon: '🛰️',
    questions: [
      {
        text: { ru: 'Простой бейзлайн для классификации?', uz: 'Klassifikatsiya uchun oddiy baseline?' },
        options: [
          { ru: 'Bag-of-words + логистическая регрессия', uz: 'Bag-of-words + logistika regressiya' },
          { ru: 'GAN', uz: 'GAN' },
          { ru: 'VAE', uz: 'VAE' },
          { ru: 'DBSCAN', uz: 'DBSCAN' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем регуляризация?', uz: 'Regulyarizatsiya nima uchun?' },
        options: [
          { ru: 'Снижать переобучение', uz: 'Overfittingni kamaytirish' },
          { ru: 'Ускорять GPU', uz: 'GPU ni tezlatish' },
          { ru: 'Увеличивать размер словаря', uz: 'Lugʼatni oshirish' },
          { ru: 'Менять кодировку', uz: 'Kodlashni oʼzgartirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как разделить данные для обучения?', uz: 'Maʼlumotni oʼqitish uchun qanday boʼlish?' },
        options: [
          { ru: 'Train/val/test', uz: 'Train/val/test' },
          { ru: 'Только train', uz: 'Faqat train' },
          { ru: 'Только test', uz: 'Faqат test' },
          { ru: 'Перемешать без разделения', uz: 'Boʼlmasdan aralashtirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что используют нейросети вместо one-hot?', uz: 'Neyron tarmoqlar one-hot oʼrniga nimani ishlatadi?' },
        options: [
          { ru: 'Эмбеддинги', uz: 'Embeddinglar' },
          { ru: 'TF-IDF', uz: 'TF-IDF' },
          { ru: 'JPEG', uz: 'JPEG' },
          { ru: 'CSV', uz: 'CSV' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое softmax?', uz: 'Softmax nima?' },
        options: [
          { ru: 'Функция, превращающая логиты в вероятности класса', uz: 'Logitlarni klass ehtimoliga aylantiruvchi funksiya' },
          { ru: 'Метод токенизации', uz: 'Tokenizatsiya usuli' },
          { ru: 'Метрика', uz: 'Metrika' },
          { ru: 'Оптимизатор', uz: 'Optimiza tor' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какая метрика при дисбалансе?', uz: 'Disbalansda qaysi metrika?' },
        options: [
          { ru: 'Macro-F1', uz: 'Macro-F1' },
          { ru: 'Accuracy', uz: 'Accuracy' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое early stopping?', uz: 'Early stopping nima?' },
        options: [
          { ru: 'Остановка по валидационным метрикам для предотвращения overfit', uz: 'Val metrikasiga qarab toʼxtatish (overfittingni toʼxtatish)' },
          { ru: 'Прерывание обучения случайно', uz: 'Tasodifiy toʼxtatish' },
          { ru: 'Сброс модели', uz: 'Modelni reset qilish' },
          { ru: 'Фиксация LR', uz: 'LR ni muzlatish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем dropout?', uz: 'Dropout nima uchun?' },
        options: [
          { ru: 'Регуляризация, отключение нейронов во время обучения', uz: 'Regulyarizatsiya, oʼqitishda neyronlarni oʼchirib turish' },
          { ru: 'Ускорить инференс', uz: 'Inference tezlatish' },
          { ru: 'Изменить данные', uz: 'Maʼlumotni oʼzgartirish' },
          { ru: 'Увеличить batch size', uz: 'Batch size oshirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем нужен confusion matrix?', uz: 'Confusion matrix nima uchun?' },
        options: [
          { ru: 'Видеть распределение ошибок по классам', uz: 'Xatolarni sinflar boʼyicha koʼrish' },
          { ru: 'Считать perplexity', uz: 'Perplexity hisoblash' },
          { ru: 'Подсчитать длину текста', uz: 'Matn uzunligini sanash' },
          { ru: 'Измерить скорость', uz: 'Tezlikni oʼlchash' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что значит fine-tuning предобученной модели?', uz: 'Oldindan oʼqitilgan modelni fine-tune qilish nimani anglatadi?' },
        options: [
          { ru: 'Дообучить на задаче/домене', uz: 'Vazifa/domen boʼyicha qoʼshimcha oʼqitish' },
          { ru: 'Заново обучить с нуля', uz: 'Noldan qayta oʼqitish' },
          { ru: 'Заморозить все слои', uz: 'Barcha qatlamlarni muzlatish' },
          { ru: 'Удалить словарь', uz: 'Lugʼatni oʼchirish' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Основы тематического моделирования', uz: 'Mavzuli modellashtirish asoslari' },
    description: { ru: 'LDA и другие модели тем', uz: 'LDA va boshqa mavzu modellari' },
    testsCount: 10,
    icon: '🗃️',
    questions: [
      {
        text: { ru: 'Что моделирует LDA?', uz: 'LDA nima modellashtiradi?' },
        options: [
          { ru: 'Смесь тем в каждом документе и распределение слов в темах', uz: 'Hujjatdagi mavzular aralashmasi va mavzudagi soʼz taqsimoti' },
          { ru: 'Порядок слов', uz: 'Soʼz tartibi' },
          { ru: 'Синтаксис дерева', uz: 'Daraxt sintaksisi' },
          { ru: 'Аудио сигнал', uz: 'Audio signal' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Главный гиперпараметр LDA?', uz: 'LDA ning asosiy giparparametri?' },
        options: [
          { ru: 'Число тем', uz: 'Mavzular soni' },
          { ru: 'FPS', uz: 'FPS' },
          { ru: 'Глубина сети', uz: 'Tarmoq chuqurligi' },
          { ru: 'Число эпох', uz: 'Epoch soni' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое coherence?', uz: 'Coherence nima?' },
        options: [
          { ru: 'Мера связности тем по словам', uz: 'Mavzu soʼzlari bir-biriga qanchalik bogʼliq' },
          { ru: 'Перплексия', uz: 'Perplexity' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему важно удалить стоп-слова перед LDA?', uz: 'Nega LDA dan oldin stop-soʼzlarni olib tashlash muhim?' },
        options: [
          { ru: 'Они доминируют и портят темы', uz: 'Ular ustunlik qilib mavzuni buzadi' },
          { ru: 'Ускоряют GPU', uz: 'GPU ni tezlatadi' },
          { ru: 'Уменьшают тем', uz: 'Mavzuni kamaytiradi' },
          { ru: 'Нужны для визуализации', uz: 'Vizualizatsiya uchun' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как LDA относится к порядку слов?', uz: 'LDA soʼz tartibiga qanday qaraydi?' },
        options: [
          { ru: 'Игнорирует (мешок слов)', uz: 'Eʼtibor bermaydi (bag-of-words)' },
          { ru: 'Сохраняет порядок', uz: 'Tartibni saqlaydi' },
          { ru: 'Меняет порядок', uz: 'Tartibni oʼzgartiradi' },
          { ru: 'Сортирует алфавиту', uz: 'Alifbo boʼyicha saralaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой метод вывода популярен в LDA?', uz: 'LDAda mashhur inference usuli?' },
        options: [
          { ru: 'Gibbs sampling/Variational Bayes', uz: 'Gibbs sampling/Variational Bayes' },
          { ru: 'Beam search', uz: 'Beam search' },
          { ru: 'A*', uz: 'A*' },
          { ru: 'Viterbi', uz: 'Viterbi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему короткие тексты сложны для LDA?', uz: 'Qisqa matnlar LDAga nega qiyin?' },
        options: [
          { ru: 'Мало сигналов для оценки тем', uz: 'Mavzuni baholash uchun signal kam' },
          { ru: 'Слишком большой словарь', uz: 'Juda katta lugʼat' },
          { ru: 'Нужно GPU', uz: 'GPU kerak' },
          { ru: 'Нельзя удалить стоп-слова', uz: 'Stop-soʼzlarni olib tashlab boʼlmaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как интерпретировать тему?', uz: 'Mavzuni qanday talqin qilish?' },
        options: [
          { ru: 'Смотреть топ-слова темы', uz: 'Mavzuning eng koʼp soʼzlarini koʼrish' },
          { ru: 'Цвет шрифта', uz: 'Shrift rangi' },
          { ru: 'FPS', uz: 'FPS' },
          { ru: 'Порядок предложений', uz: 'Gap tartibi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как бороться с дрейфом тем по доменам?', uz: 'Domen boʼyicha mavzu driftiga qanday kurashiladi?' },
        options: [
          { ru: 'Перетренировать/дообучить на новом домене', uz: 'Yangi domenda qayta oʼqitish' },
          { ru: 'Игнорировать', uz: 'Eʼtibor bermaslik' },
          { ru: 'Убрать все темы', uz: 'Barcha mavzuni olib tashlash' },
          { ru: 'Менять токенайзер', uz: 'Tokenizerni oʼzgartirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Есть ли контекстные альтернативы LDA?', uz: 'LDA ga kontekstli alternativlar bormi?' },
        options: [
          { ru: 'CTM/Top2Vec/BERTopic', uz: 'CTM/Top2Vec/BERTopic' },
          { ru: 'FFT', uz: 'FFT' },
          { ru: 'PCA', uz: 'PCA' },
          { ru: 'KNN', uz: 'KNN' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Стилистометрия и стиль текста', uz: 'Stilistometriya va matn uslubi' },
    description: { ru: 'Метрики стиля и авторства', uz: 'Uslub va mualliflik metrikalari' },
    testsCount: 10,
    icon: '✒️',
    questions: [
      {
        text: { ru: 'Какие признаки часто в стилометрии?', uz: 'Stilometriyada qaysi belgilar koʼp ishlatiladi?' },
        options: [
          { ru: 'Символьные n-граммы, функция слова, пунктуация', uz: 'Belgi n-gramlari, funksional soʼzlar, tinish belgilari' },
          { ru: 'Пиксели', uz: 'Piksellar' },
          { ru: 'Аудио спектры', uz: 'Audio spektri' },
          { ru: 'GPS координаты', uz: 'GPS koordinatalar' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем нужны функциональные слова?', uz: 'Funksional soʼzlar nima uchun kerak?' },
        options: [
          { ru: 'Стабильны для авторов и стилей', uz: 'Muallif va uslub uchun barqaror' },
          { ru: 'Добавляют смысл', uz: 'Maʼno qoʼshadi' },
          { ru: 'Меняют кодировку', uz: 'Kodlashni oʼzgartiradi' },
          { ru: 'Уменьшают длину', uz: 'Uzunlikni kamaytiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое авторская атрибуция?', uz: 'Muallifni aniqlash nima?' },
        options: [
          { ru: 'Определение автора по стилевым признакам', uz: 'Uslubiy belgilar asosida muallifni topish' },
          { ru: 'Перевод текста', uz: 'Matn tarjimasi' },
          { ru: 'Изменение регистра', uz: 'Registrni oʼzgartirish' },
          { ru: 'Суммаризация', uz: 'Summarizatsiya' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Метрика богатства словаря?', uz: 'Lugʼat boyligi metri kasi?' },
        options: [
          { ru: 'Type-Token Ratio', uz: 'Type-Token Ratio' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' },
          { ru: 'Accuracy', uz: 'Accuracy' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое writeprint?', uz: 'Writeprint nima?' },
        options: [
          { ru: 'Устойчивый набор стилевых признаков автора', uz: 'Muallifning barqaror uslubiy belgilari toʼplami' },
          { ru: 'Шрифт', uz: 'Shrift' },
          { ru: 'Плагиат', uz: 'Plagiat' },
          { ru: 'Метрика BLEU', uz: 'BLEU metrikasi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как скрытие стиля влияет на атрибуцию?', uz: 'Uslubni yashirish attribuziyaga qanday taʼsir qiladi?' },
        options: [
          { ru: 'Обфускация/парафраз снижает точность', uz: 'Obfuskatsiya/parafraz aniqlikni kamaytiradi' },
          { ru: 'Повышает точность', uz: 'Aniqlikni oshiradi' },
          { ru: 'Не влияет', uz: 'Taʼsir qilmaydi' },
          { ru: 'Делает тексты короче', uz: 'Matnlarni qisqartiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему cross-domain сложен для стилометрии?', uz: 'Cross-domain stilometriya uchun nega qiyin?' },
        options: [
          { ru: 'Стиль меняется с жанром/темой', uz: 'Janr/mavzu bilan uslub oʼzgaradi' },
          { ru: 'Мало данных', uz: 'Maʼlumot kam' },
          { ru: 'GPU kerak', uz: 'GPU kerak' },
          { ru: 'Koʼp punktuatsiya', uz: 'Koʼp tinish belgilari' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой признак связан с длиной предложений?', uz: 'Gap uzunligi bilan bogʼliq belgi?' },
        options: [
          { ru: 'Средняя/дисперсия длины предложений', uz: 'Gap uzunligi oʼrtacha/dispersion' },
          { ru: 'Цвет текста', uz: 'Matn rangi' },
          { ru: 'FPS', uz: 'FPS' },
          { ru: 'Количество URL', uz: 'URL soni' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Могут ли POS-последовательности быть стилистическими?', uz: 'POS ketma-ketliklari stilistik boʼlishi mumkinmi?' },
        options: [
          { ru: 'Да, последовательности POS отражают стиль', uz: 'Ha, POS ketma-ketligi uslubni koʼrsatadi' },
          { ru: 'Нет, только слова', uz: 'Yoʼq, faqat soʼzlar' },
          { ru: 'Только эмодзи', uz: 'Faqat emodzi' },
          { ru: 'Только цифры', uz: 'Faqat raqamlar' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что нужно для устойчивой оценки автора?', uz: 'Muallifni barqaror baholash uchun nima kerak?' },
        options: [
          { ru: 'Достаточно много текстов автора', uz: 'Muallifdan yetarli matn' },
          { ru: 'Один твит', uz: 'Bitta tvit' },
          { ru: 'Только заголовки', uz: 'Faqat sarlavhalar' },
          { ru: 'Только числа', uz: 'Faqat sonlar' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Векторные представления слов и кластеризация', uz: 'Vektor tasvirlar va klasterlash' },
    description: { ru: 'Word embeddings и кластеризация', uz: 'Embeddinglar va klasterlash' },
    testsCount: 10,
    icon: '🧊',
    questions: [
      {
        text: { ru: 'Чем skip-gram отличается от CBOW?', uz: 'Skip-gram CBOW dan nimasi bilan farq qiladi?' },
        options: [
          { ru: 'Skip-gram предсказывает контекст по слову; CBOW — слово по контексту', uz: 'Skip-gram soʼzdan kontekstni, CBOW kontekstdan soʼzni bashorat qiladi' },
          { ru: 'Skip-gram медленнее всегда', uz: 'Skip-gram doim sekinroq' },
          { ru: 'CBOW не обучается', uz: 'CBOW oʼqitilmaydi' },
          { ru: 'Они одинаковы', uz: 'Bir xil' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как выбрать размерность эмбеддингов?', uz: 'Embedding oʼlchamini qanday tanlash?' },
        options: [
          { ru: 'Компромисс: слишком мала — недовыражает, слишком велика — переобучает', uz: 'Muvozanat: kichik — ifoda kam, katta — overfitting' },
          { ru: 'Всегда 10', uz: 'Har doim 10' },
          { ru: 'Всегда 10000', uz: 'Har doim 10000' },
          { ru: 'Не влияет', uz: 'Taʼsir qilmaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой алгоритм популярен для кластеризации эмбеддингов?', uz: 'Embedding klasterlash uchun mashhur algoritm?' },
        options: [
          { ru: 'K-means', uz: 'K-means' },
          { ru: 'Dijkstra', uz: 'Dijkstra' },
          { ru: 'Bellman-Ford', uz: 'Bellman-Ford' },
          { ru: 'Huffman', uz: 'Huffman' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Нужно ли нормировать эмбеддинги перед кластеризацией?', uz: 'Klasterlashdan oldin embeddinglarni normallashtirish kerakmi?' },
        options: [
          { ru: 'Часто да, чтобы расстояния были сопоставимы', uz: 'Koʼpincha ha, masofalar solishtirish uchun' },
          { ru: 'Никогда', uz: 'Hech qachon' },
          { ru: 'Только для картинок', uz: 'Faqat rasmlar uchun' },
          { ru: 'Только для аудио', uz: 'Faqat audio uchun' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как оценить качество кластеров?', uz: 'Klaster sifatini qanday baholash?' },
        options: [
          { ru: 'Silhouette / Davies-Bouldin', uz: 'Silhouette / Davies-Bouldin' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' },
          { ru: 'Accuracy', uz: 'Accuracy' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему редкие слова обучаются хуже?', uz: 'Kam uchraydigan soʼzlar nega yomon oʼqitiladi?' },
        options: [
          { ru: 'Мало примеров контекста', uz: 'Kontekst namunasi kam' },
          { ru: 'Слишком длинные слова', uz: 'Juda uzun soʼzlar' },
          { ru: 'GPU sekin', uz: 'GPU sekin' },
          { ru: 'Неверная кодировка', uz: 'Notoʼgʼri kodlash' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Чем полезен fastText для OOV?', uz: 'fastText OOV uchun nimasi bilan foydali?' },
        options: [
          { ru: 'Использует субслова/символьные n-граммы', uz: 'Subsoʼz/harf n-gram ishlatadi' },
          { ru: 'Не обучается', uz: 'Oʼqitilmaydi' },
          { ru: 'Удаляет редкие слова', uz: 'Kam soʼzlarni oʼchiradi' },
          { ru: 'Меняет язык', uz: 'Tilni oʼzgartiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем t-SNE для эмбеддингов?', uz: 'Embeddinglar uchun t-SNE nima uchun?' },
        options: [
          { ru: 'Визуализация в 2D/3D', uz: '2D/3D vizualizatsiya' },
          { ru: 'Обучение модели', uz: 'Model oʼqitish' },
          { ru: 'Уменьшение perplexity', uz: 'Perplexityni kamaytirish' },
          { ru: 'Смена кодировки', uz: 'Kodlashni oʼzgartirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое центроид кластера?', uz: 'Klaster centroidi nima?' },
        options: [
          { ru: 'Средний вектор точек кластера', uz: 'Klaster nuqtalari oʼrtacha vektori' },
          { ru: 'Самая длинная точка', uz: 'Eng uzun nuqta' },
          { ru: 'Случайная точка', uz: 'Tasodifiy nuqta' },
          { ru: 'Максимальная perplexity', uz: 'Maks perplexity' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Можно ли оценить аналогии для эмбеддингов?', uz: 'Embeddinglarda analogiyani baholash mumkinmi?' },
        options: [
          { ru: 'Да, классический тест “king - man + woman = queen”', uz: 'Ha, “king - man + woman = queen” testi' },
          { ru: 'Нет, нельзя', uz: 'Yoʼq' },
          { ru: 'Только BLEU', uz: 'Faqat BLEU' },
          { ru: 'Только ROUGE', uz: 'Faqat ROUGE' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Векторный анализ и семантика', uz: 'Vektor tahlil va semantika' },
    description: { ru: 'Семантические операции над векторами', uz: 'Vektorlarda semantik amallar' },
    testsCount: 10,
    icon: '🧭',
    questions: [
      {
        text: { ru: 'Что измеряет косинусная близость?', uz: 'Kosinus yaqinlik nima oʼlchaydi?' },
        options: [
          { ru: 'Угол между векторами', uz: 'Vektorlar orasidagi burchak' },
          { ru: 'Длину вектора', uz: 'Vektor uzunligi' },
          { ru: 'Количество токенов', uz: 'Tokenlar soni' },
          { ru: 'Перплексию', uz: 'Perplexity' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Пример векторной аналогии?', uz: 'Vektor analogiyasi misoli?' },
        options: [
          { ru: 'king - man + woman ≈ queen', uz: 'king - man + woman ≈ queen' },
          { ru: 'dog - cat + car', uz: 'dog - cat + car' },
          { ru: 'sun - moon + pizza', uz: 'sun - moon + pizza' },
          { ru: 'A+B=0', uz: 'A+B=0' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как проявляется социальный bias в эмбеддингах?', uz: 'Embeddinglarda ijtimoiy bias qanday koʼrinadi?' },
        options: [
          { ru: 'Стереотипные связи между словами', uz: 'Soʼzlar orasida stereotipik bogʼlanishlar' },
          { ru: 'Ускорение инференса', uz: 'Inference tezlashadi' },
          { ru: 'Рост словаря', uz: 'Lugʼat oʼsadi' },
          { ru: 'Снижение потерь', uz: 'Loss kamayadi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое ретрофиттинг эмбеддингов?', uz: 'Embeddinglarni retrofitting nima?' },
        options: [
          { ru: 'Корректировка векторов по внешнему лексикону/графу', uz: 'Vektorlarni tashqi leksikon/graf boʼyicha tuzatish' },
          { ru: 'Сжатие до 1D', uz: '1D ga siqish' },
          { ru: 'Удаление OOV', uz: 'OOV ni oʼchirish' },
          { ru: 'Изменение алфавита', uz: 'Alifboni oʼzgartirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Чем контекстные эмбеддинги отличаются от статических?', uz: 'Kontekstli embeddinglar statiklardan nimasi bilan farq qiladi?' },
        options: [
          { ru: 'Зависят от окружения слова', uz: 'Soʼz kontekstiga bogʼliq' },
          { ru: 'Всегда одинаковые', uz: 'Har doim bir xil' },
          { ru: 'Не требуют токенизации', uz: 'Tokenizatsiya talab qilmaydi' },
          { ru: 'Только для цифр', uz: 'Faqat raqamlar uchun' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как получить эмбеддинг предложения из трансформера?', uz: 'Transformerda gap embeddingini qanday olish?' },
        options: [
          { ru: 'Пулингом токенов (CLS/mean/max)', uz: 'Tokenlarni pooling qilish (CLS/mean/max)' },
          { ru: 'Использовать длину', uz: 'Uzunlikni ishlatish' },
          { ru: 'Сортировать токены', uz: 'Tokenlarni saralash' },
          { ru: 'Удалить все токены', uz: 'Tokenlarni oʼchirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Нужно ли нормировать векторы для сравнения?', uz: 'Solishtirish uchun vektorlarni normallashtirish kerakmi?' },
        options: [
          { ru: 'Да, для корректной косинусной близости', uz: 'Ha, toʼgʼri kosinus yaqinlik uchun' },
          { ru: 'Никогда', uz: 'Hech qachon' },
          { ru: 'Только для картинок', uz: 'Faqat rasm' },
          { ru: 'Только для аудио', uz: 'Faqat audio' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Можно ли векторами моделировать семантические сдвиги во времени?', uz: 'Vektorlar vaqt boʼyicha semantik siljishni koʼrsatishi mumkinmi?' },
        options: [
          { ru: 'Да, сравнивая модели по периодам', uz: 'Ha, davrlar boʼyicha modellani solishtirib' },
          { ru: 'Нет', uz: 'Yoʼq' },
          { ru: 'Только BLEU', uz: 'Faqat BLEU' },
          { ru: 'Только ROUGE', uz: 'Faqat ROUGE' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем выравнивать векторные пространства разных языков?', uz: 'Turli tillar vektor makonini nega tekislash kerak?' },
        options: [
          { ru: 'Для двуязычного поиска/перевода', uz: 'Ikki tilli qidiruv/tarjima uchun' },
          { ru: 'Чтобы уменьшить perplexity', uz: 'Perplexityni kamaytirish uchun' },
          { ru: 'Чтобы увеличить длину предложений', uz: 'Gap uzunligini oshirish' },
          { ru: 'Для смены шрифта', uz: 'Shriftni oʼzgartirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как бороться с смещением в эмбеддингах?', uz: 'Embeddingdagi biasga qanday kurashiladi?' },
        options: [
          { ru: 'Дебайсинг, контроль данных, регуляризация', uz: 'Debiasing, data nazorati, regulyarizatsiya' },
          { ru: 'Увеличить batch size', uz: 'Batch size oshirish' },
          { ru: 'Сменить шрифт', uz: 'Shriftni almashtirish' },
          { ru: 'Добавить шум', uz: 'Shovqin qoʼshish' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Синтаксические зависимости и анализ', uz: 'Sintaktik bogʻlanishlar va tahlil' },
    description: { ru: 'Деревья зависимостей и парсинг', uz: 'Bogʻliqlik daraxtlari va parsing' },
    testsCount: 10,
    icon: '🌿',
    questions: [
      {
        text: { ru: 'Что выдаёт dependency parsing?', uz: 'Dependency parsing nima beradi?' },
        options: [
          { ru: 'Дерево связей «голова-зависимое»', uz: 'Boshlovchi-qaram bogʼlanish daraxti' },
          { ru: 'Перевод текста', uz: 'Matn tarjimasi' },
          { ru: 'Тональность', uz: 'Sentiment' },
          { ru: 'Токенизацию', uz: 'Tokenizatsiya' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое projective дерево?', uz: 'Proektiv daraxt nima?' },
        options: [
          { ru: 'Дуги не пересекаются на плоскости', uz: 'Yoylar tekislikda kesishmaydi' },
          { ru: 'Дуги пересекаются', uz: 'Yoylar kesishadi' },
          { ru: 'Только один узел', uz: 'Faqat bitta tugun' },
          { ru: 'Всегда бинарное', uz: 'Har doim binar' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Пример метки UD?', uz: 'UD yorligʼi misoli?' },
        options: [
          { ru: 'nsubj, obj, obl', uz: 'nsubj, obj, obl' },
          { ru: 'RGB', uz: 'RGB' },
          { ru: 'HTTP', uz: 'HTTP' },
          { ru: 'BLEU', uz: 'BLEU' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой класс алгоритмов для зависимого парсинга?', uz: 'Qaysi algoritm sinfi dependency parsing uchun?' },
        options: [
          { ru: 'Переходные/transition-based', uz: 'Transition-based' },
          { ru: 'Сортировка', uz: 'Saralash' },
          { ru: 'Кодирование Хаффмана', uz: 'Huffman' },
          { ru: 'FFT', uz: 'FFT' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какая метрика для парсинга?', uz: 'Parsing uchun metrika?' },
        options: [
          { ru: 'UAS/LAS', uz: 'UAS/LAS' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' },
          { ru: 'Accuracy', uz: 'Accuracy' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как POS-теги помогают парсингу?', uz: 'POS teglari parsingga qanday yordam beradi?' },
        options: [
          { ru: 'Дают морфо-синтаксические подсказки', uz: 'Morfo-sintaktik signal beradi' },
          { ru: 'Ускоряют GPU', uz: 'GPU ni tezlatadi' },
          { ru: 'Уменьшают длину', uz: 'Uzunlikni kamaytiradi' },
          { ru: 'Не помогают', uz: 'Yordam bermaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему длинные предложения сложнее?', uz: 'Uzun gaplar nega qiyinroq?' },
        options: [
          { ru: 'Больше вариантов структур и ошибок', uz: 'Koʼproq tuzilma va xato variantlari' },
          { ru: 'Меньше слов', uz: 'Kam soʼz' },
          { ru: 'Нет знаков препинания', uz: 'Tinish belgisi yoʼq' },
          { ru: 'Всегда проще', uz: 'Har doim oson' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как парсер обращается с пунктуацией?', uz: 'Parser tinish belgilari bilan qanday ishlaydi?' },
        options: [
          { ru: 'Прикрепляет к головам или игнорирует по схеме', uz: 'Boshga biriktiradi yoki sxemaga koʼra eʼtibor bermaydi' },
          { ru: 'Удаляет текст', uz: 'Matnni oʼchiradi' },
          { ru: 'Меняет язык', uz: 'Tilni oʼzgartiradi' },
          { ru: 'Сортирует слова', uz: 'Soʼzlarni saralaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как влияет доменный сдвиг на парсер?', uz: 'Domen siljishi parserga qanday taʼsir qiladi?' },
        options: [
          { ru: 'Снижает точность на новом стиле', uz: 'Yangi uslubda aniqlik tushadi' },
          { ru: 'Ускоряет', uz: 'Tezlashtiradi' },
          { ru: 'Не влияет', uz: 'Taʼsir qilmaydi' },
          { ru: 'Увеличивает LAS', uz: 'LAS oshadi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Где применяют зависимости?', uz: 'Bogʼlanishlar qayerda qoʼllanadi?' },
        options: [
          { ru: 'Relation extraction, QA, текст в граф', uz: 'Relation extraction, QA, matnni grafga aylantirish' },
          { ru: 'Сжатие файлов', uz: 'Fayl siqish' },
          { ru: 'Рендеринг', uz: 'Render' },
          { ru: 'OCR', uz: 'OCR' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Автоматическое реферирование и Transformer', uz: 'Avtomatik referat va Transformerlar' },
    description: { ru: 'Суммаризация и ввод в Transformer', uz: 'Summarizatsiya va Transformer kirish' },
    testsCount: 10,
    icon: '⚡',
    questions: [
      {
        text: { ru: 'Чем отличается экстрактивная суммаризация?', uz: 'Ekstraktiv summarizatsiya nimasi bilan farq qiladi?' },
        options: [
          { ru: 'Выбирает предложения из исходного текста', uz: 'Asl matndan gaplarni tanlaydi' },
          { ru: 'Генерирует новые слова', uz: 'Yangi soʼzlar yaratadi' },
          { ru: 'Не требует текста', uz: 'Matn talab qilmaydi' },
          { ru: 'Всегда хуже', uz: 'Har doim yomon' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какая метрика для суммаризации?', uz: 'Summarizatsiya uchun metrika?' },
        options: [
          { ru: 'ROUGE', uz: 'ROUGE' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'UAS', uz: 'UAS' },
          { ru: 'COS', uz: 'COS' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой тип Transformer для абстрактивной суммаризации?', uz: 'Abstraktiv summarizatsiya uchun qaysi transformer?' },
        options: [
          { ru: 'Encoder-decoder (T5/BART)', uz: 'Encoder-decoder (T5/BART)' },
          { ru: 'Только энкодер', uz: 'Faqat encoder' },
          { ru: 'Только декодер без внимания', uz: 'Eʼtiborsiz faqat decoder' },
          { ru: 'CNN', uz: 'CNN' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что делает beam search?', uz: 'Beam search nima qiladi?' },
        options: [
          { ru: 'Держит несколько гипотез при декодировании', uz: 'Dekodlashda bir nechta gipotezani ushlab turadi' },
          { ru: 'Сортирует датасет', uz: 'Datasetni saralaydi' },
          { ru: 'Меняет токены', uz: 'Tokenlarni oʼzgartiradi' },
          { ru: 'Убирает внимание', uz: 'Eʼtiborni olib tashlaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Риск абстрактивной суммаризации?', uz: 'Abstraktiv summarizatsiya xavfi?' },
        options: [
          { ru: 'Галлюцинации (несуществующие факты)', uz: 'Gal’yutsinatsiya (yoʼq faktlar)' },
          { ru: 'Короткие тексты', uz: 'Qisqa matnlar' },
          { ru: 'Нет внимания', uz: 'Eʼtibor yoʼq' },
          { ru: 'Всегда точна', uz: 'Har doim aniq' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Для чего coverage/penalty?', uz: 'Coverage/penalty nima uchun?' },
        options: [
          { ru: 'Снизить повторы/улучшить покрытие', uz: 'Takrorni kamaytirish/pokritiyani yaxshilash' },
          { ru: 'Ускорить GPU', uz: 'GPU ni tezlatish' },
          { ru: 'Сократить словарь', uz: 'Lugʼatni qisqartirish' },
          { ru: 'Менять кодировку', uz: 'Kodlashni oʼzgartirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое lead bias?', uz: 'Lead bias nima?' },
        options: [
          { ru: 'Модель копирует первые предложения новости', uz: 'Model yangilikning birinchi gaplarini koʼchiradi' },
          { ru: 'Смещение векторной длины', uz: 'Vektor uzunligi ogʼishi' },
          { ru: 'Ошибка перплексии', uz: 'Perplexity xatosi' },
          { ru: 'Дрейф тем', uz: 'Mavzu drift' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как собрать данные для обучения суммаризации?', uz: 'Summarizatsiya uchun maʼlumotni qanday yigʼish?' },
        options: [
          { ru: 'Пары (документ, человеческое резюме)', uz: '(Hujjat, inson xulosasi) juftliklari' },
          { ru: 'Только документа', uz: 'Faqat hujjatlar' },
          { ru: 'Только заголовки', uz: 'Faqat sarlavha' },
          { ru: 'Перемешанные предложения', uz: 'Aralash gaplar' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как уменьшить повторение в выводе?', uz: 'Chiqishda takrorni qanday kamaytirish?' },
        options: [
          { ru: 'Coverage penalty, no-repeat ngram size', uz: 'Coverage penalty, no-repeat ngram size' },
          { ru: 'Увеличить batch', uz: 'Batchni oshirish' },
          { ru: 'Сменить токенизатор', uz: 'Tokenizatorni almashtirish' },
          { ru: 'Убрать attention', uz: 'Eʼtiborni olib tashlash' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Можно ли делать zero-shot суммаризацию?', uz: 'Zero-shot summarizatsiya mumkinmi?' },
        options: [
          { ru: 'Да, с LLM/инструкционными моделями', uz: 'Ha, LLM/instruction model bilan' },
          { ru: 'Нет', uz: 'Yoʼq' },
          { ru: 'Только со статистикой', uz: 'Faqat statistika bilan' },
          { ru: 'Только с CNN', uz: 'Faqat CNN bilan' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Техники исправления текста', uz: 'Matnni tuzatish texnikalari' },
    description: { ru: 'Орфография и перефраз', uz: 'Imlo va parafraz' },
    testsCount: 10,
    icon: '🩹',
    questions: [
      {
        text: { ru: 'Что использует классическая spell-checker?', uz: 'Klassik spell-checker nima ishlatadi?' },
        options: [
          { ru: 'Расстояние Левенштейна и словарь', uz: 'Levenshtein masofa va lugʼat' },
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' },
          { ru: 'FFT', uz: 'FFT' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое confusion set?', uz: 'Confusion set nima?' },
        options: [
          { ru: 'Группа похожих слов (their/there)', uz: 'Oʼxshash soʼzlar guruhi (their/there)' },
          { ru: 'Набор тем', uz: 'Mavzular toʼplami' },
          { ru: 'Набор эмодзи', uz: 'Emodzi toʼplami' },
          { ru: 'Метрика', uz: 'Metrika' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Ноisy channel в исправлении делает что?', uz: 'Noisy channel tuzatishda nima qiladi?' },
        options: [
          { ru: 'Выбирает наиболее вероятное исправление по модели ошибок и языка', uz: 'Xato modeli va til modeli bilan eng ehtimoliy tuzatishni tanlaydi' },
          { ru: 'Сортирует слова', uz: 'Soʼzlarni saralaydi' },
          { ru: 'Меняет кодировку', uz: 'Kodlashni oʼzgartiradi' },
          { ru: 'Удаляет пробелы', uz: 'Boʼshliqlarni oʼchiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему контекст важен для исправления?', uz: 'Tuzatishda kontekst nega muhim?' },
        options: [
          { ru: 'Помогает выбрать правильное слово из омонимов', uz: 'Omonimlardan toʼgʼri soʼzni tanlashga yordam beradi' },
          { ru: 'Ускоряет GPU', uz: 'GPU ni tezlatadi' },
          { ru: 'Сокращает текст', uz: 'Matnni qisqartiradi' },
          { ru: 'Меняет регистр', uz: 'Registrni oʼzgartiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Какой подход для грамматики?', uz: 'Grammatika uchun qaysi yondashuv?' },
        options: [
          { ru: 'Seq2seq / encoder-decoder', uz: 'Seq2seq / encoder-decoder' },
          { ru: 'TF-IDF', uz: 'TF-IDF' },
          { ru: 'K-means', uz: 'K-means' },
          { ru: 'BLEU', uz: 'BLEU' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Риск излишних исправлений?', uz: 'Ortiqcha tuzatish xavfi?' },
        options: [
          { ru: 'Ложные срабатывания (false positives)', uz: 'False positive' },
          { ru: 'Снижение скорости GPU', uz: 'GPU sekinlashadi' },
          { ru: 'Рост словаря', uz: 'Lugʼat oʼsadi' },
          { ru: 'Увеличение perplexity', uz: 'Perplexity oshadi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как оценивать грамматическую коррекцию?', uz: 'Grammatik tuzatishni qanday baholash?' },
        options: [
          { ru: 'ERRANT/M^2/GLEU', uz: 'ERRANT/M^2/GLEU' },
          { ru: 'BLEU только', uz: 'Faqat BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' },
          { ru: 'Accuracy', uz: 'Accuracy' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем кастомный словарь?', uz: 'Nega maxsus lugʼat kerak?' },
        options: [
          { ru: 'Сохранить доменные термины от исправления', uz: 'Domen terminlarini notoʼgʼri tuzatishdan saqlash' },
          { ru: 'Ускорить GPU', uz: 'GPU ni tezlatish' },
          { ru: 'Сократить текст', uz: 'Matnni qisqartirish' },
          { ru: 'Добавить пунктуацию', uz: 'Tinish belgilari qoʼshish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему real-word ошибки сложнее?', uz: 'Real-word xatolar nega qiyin?' },
        options: [
          { ru: 'Слово корректно написано, нужна семантика контекста', uz: 'Soʼz toʼgʼri yozilgan, semantik kontekst kerak' },
          { ru: 'Они всегда односимвольные', uz: 'Har doim bitta belgi' },
          { ru: 'В них нет букв', uz: 'Harflar yoʼq' },
          { ru: 'Только цифры', uz: 'Faqat raqam' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как ранжировать кандидаты исправления?', uz: 'Tuzatish nomzodlarini qanday reytinglash?' },
        options: [
          { ru: 'По вероятности LM/скорингу', uz: 'LM ehtimoli/score boʼyicha' },
          { ru: 'По длине', uz: 'Uzunlik boʼyicha' },
          { ru: 'По алфавиту', uz: 'Alifbo boʼyicha' },
          { ru: 'По цвету', uz: 'Rang boʼyicha' }
        ],
        answer: 0
      }
    ]
  },
  {
    title: { ru: 'Алгоритмы машинного перевода', uz: 'Mashina tarjimasi algoritmlari' },
    description: { ru: 'Классика и нейросетевые MT', uz: 'Klassik va neyro MT' },
    testsCount: 10,
    icon: '🌐',
    questions: [
      {
        text: { ru: 'Какая метрика классическая для MT?', uz: 'MT uchun klassik metrika?' },
        options: [
          { ru: 'BLEU', uz: 'BLEU' },
          { ru: 'ROUGE', uz: 'ROUGE' },
          { ru: 'UAS', uz: 'UAS' },
          { ru: 'Accuracy', uz: 'Accuracy' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что делает alignment в MT?', uz: 'MT da alignment nima qiladi?' },
        options: [
          { ru: 'Сопоставляет слова/фразы между языками', uz: 'Tillarda soʼz/iboralami moslashtiradi' },
          { ru: 'Сжимает текст', uz: 'Matnni siqadi' },
          { ru: 'Изменяет шрифт', uz: 'Shriftni oʼzgartiradi' },
          { ru: 'Ускоряет GPU', uz: 'GPU ni tezlatadi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что хранила фразовая SMT?', uz: 'Fraza SMT nima saqlardi?' },
        options: [
          { ru: 'Таблицу фраз и вероятностей', uz: 'Fraza jadvali va ehtimollar' },
          { ru: 'CNN веса', uz: 'CNN vaznlari' },
          { ru: 'TF-IDF', uz: 'TF-IDF' },
          { ru: 'POS-теги', uz: 'POS teglari' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Почему Transformer важен для NMT?', uz: 'Transformer NMT uchun nega muhim?' },
        options: [
          { ru: 'Self-attention хорошо моделирует дальние зависимости', uz: 'Self-attention uzoq bogʼlanishlarni yaxshi modellaydi' },
          { ru: 'Он без данных', uz: 'Maʼlumotsiz' },
          { ru: 'Использует только CNN', uz: 'Faqat CNN ishlatadi' },
          { ru: 'Не обучаем', uz: 'Oʼqitilmaydi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как бороться с OOV в MT?', uz: 'MT da OOV ga qanday kurashiladi?' },
        options: [
          { ru: 'BPE/WordPiece', uz: 'BPE/WordPiece' },
          { ru: 'Удалить слова', uz: 'Soʼzlarni oʼchirish' },
          { ru: 'Сменить язык', uz: 'Tilni oʼzgartirish' },
          { ru: 'Понизить LR', uz: 'LR ni tushirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что даёт beam size в декодере?', uz: 'Dekoderda beam size nima beradi?' },
        options: [
          { ru: 'Компромисс качество/скорость', uz: 'Sifat/tezlik muvozanati' },
          { ru: 'Меняет словарь', uz: 'Lugʼatni oʼzgartiradi' },
          { ru: 'Изменяет язык', uz: 'Tilni oʼzgartiradi' },
          { ru: 'Удаляет токены', uz: 'Tokenlarni oʼchiradi' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Зачем length penalty?', uz: 'Length penalty nima uchun?' },
        options: [
          { ru: 'Избежать слишком коротких/длинных переводов', uz: 'Juda qisqa/uzun tarjimalardan qochish' },
          { ru: 'Ускорить GPU', uz: 'GPU ni tezlatish' },
          { ru: 'Сменить кодировку', uz: 'Kodlashni oʼzgartirish' },
          { ru: 'Уменьшить словарь', uz: 'Lugʼatni kamaytirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Как адаптировать MT под домен?', uz: 'MT ni domen uchun qanday moslash?' },
        options: [
          { ru: 'Fine-tune на доменных параллельных данных', uz: 'Domen parallel maʼlumotida fine-tune' },
          { ru: 'Удалить слои', uz: 'Qatlamlarni oʼchirish' },
          { ru: 'Отключить attention', uz: 'Attentionni oʼchirish' },
          { ru: 'Понизить batch', uz: 'Batchni kamaytirish' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Что такое back-translation?', uz: 'Back-translation nima?' },
        options: [
          { ru: 'Генерация синтетики перевода в обратную сторону', uz: 'Qayta yoʼnalishda sintetik tarjima yaratish' },
          { ru: 'Перевод только заголовков', uz: 'Faqat sarlavha tarjimasi' },
          { ru: 'Увеличение vocab', uz: 'Vocab oshirish' },
          { ru: 'Перевод без модели', uz: 'Modelsiz tarjima' }
        ],
        answer: 0
      },
      {
        text: { ru: 'Роль пост-редактирования?', uz: 'Post-editing roli?' },
        options: [
          { ru: 'Человек исправляет вывод MT для качества', uz: 'Inson MT chiqishini sifat uchun tuzatadi' },
          { ru: 'Удалить метаданные', uz: 'Metadatalarni oʼchirish' },
          { ru: 'Перевод без модели', uz: 'Modelsiz tarjima' },
          { ru: 'Сократить датасет', uz: 'Datasetni qisqartirish' }
        ],
        answer: 0
      }
    ]
  }
];
