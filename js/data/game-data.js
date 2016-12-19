
export const TYPES = {
  WELCOME: 'WELCOME',
  ARTIST: 'ARTIST',
  GENRE: 'GENRE',
  RESULT: 'RESULT'
};

export const rules = {
  title: 'Правила игры',
  content: `Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
      Удачи!`
};

export const timer = {
  minutes: 2,
  seconds: 0
};

const questions = [
  {
    type: TYPES.ARTIST,
    title: 'Кто исполняет эту песню?',
    data: {
      audio: '1'
    },
    answers: [
      {src: '', value: 'Пелагея'},
      {src: '', value: 'Краснознаменная дивизия имени моей бабушки'},
      {src: '', value: 'Lorde'}
    ]
  },
  {
    type: TYPES.GENRE,
    title: 'Выберите инди-рок треки',
    answers: [
      {
        isCorrect: true,
        data: {
          audio: 'audio-1'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: 'audio-2'
        }
      },
      {
        isCorrect: true,
        data: {
          audio: 'audio-3'
        }
      },
      {
        isCorrect: false,
        data: {
          audio: 'audio-4'
        }
      }
    ]
  },
  {
    type: TYPES.ARTIST,
    title: 'Кто исполняет эту песню?',
    data: {
      audio: '2'
    },
    answers: [
      {src: '', value: 'Son Pascal'},
      {src: '', value: 'Акан Сери'},
      {src: '', value: 'Бритни Спирс'}
    ]
  }
];

export const result = {
  status: 'Вы настоящий меломан!',
  time: 2,
  quantum: 4,
  comparison: 80
};

export const statistics = [
  {answers: 5, time: 120},
  {answers: 9, time: 110},
  {answers: 7, time: 850},
  {answers: 6, time: 80},
  {answers: 9, time: 10},
  {answers: 2, time: 100}
];
