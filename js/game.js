import * as domConstructors from './dom-constructors';
import createResultElement from './result';
import createArtistElement from './level-artist';
import createGenreElement from './level-genre';

const TYPES = {
  ARTIST: {
    name: 'artist',
    renderer: createArtistElement
  },
  GENRE: {
    name: 'genre',
    renderer: createGenreElement
  }
};

const data = {
  rules: {
    title: 'Правила игры',
    content: `Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
      Удачи!`
  },
  timer: {
    minutes: 2,
    seconds: 0
  },
  questions: [
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
  ],
  result: {
    status: 'Вы настоящий меломан!',
    time: 2,
    quantum: 4,
    comparison: 80
  }
};

let currentQuestionNum = 0;

export default () => {

  const questionsCount = data.questions.length;

  if (currentQuestionNum === questionsCount) {

    domConstructors.renderElement(createResultElement(data.result));

  } else {

    const currentQuestion = data.questions[currentQuestionNum++];
    domConstructors.renderElement(currentQuestion.type.renderer(currentQuestion));

  }
};

export {data};
