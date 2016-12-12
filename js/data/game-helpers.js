export const game = {
  maxQuestionNum: 10,
  currentQuestion: 0,
  maxTime: 120,
  timer: 0,
  lives: 3
};

export const setCurrentQuestion = (gameObj, questionNum) => {
  if (questionNum < 0 || questionNum > game.maxQuestionNum) {
    throw new RangeError('Вопрос не может быть отрицательным числом или > 9');
  }

  return Object.assign({}, gameObj, {
    currentQuestion: questionNum
  });
};

export const setTime = (gameObj, time) => {
  if (time < 0) {
    throw new RangeError('Время не может быть отрицательным');
  }

  return Object.assign({}, gameObj, {
    timer: time
  });
};

export const setLives = (gameObj, lives) => {
  if (lives < 0 || lives > game.lives) {
    throw new RangeError('Количество жизней не может быть отрицательным числом или  > 3');
  }

  return Object.assign({}, gameObj, {
    lives: lives
  });
};
