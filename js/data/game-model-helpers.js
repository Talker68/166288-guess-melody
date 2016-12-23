export const game = {
  currentQuestion: 0,
  lives: 3,
  timer: 0,
  correctQuestions: 0,
  maxTime: 120,
  maxQuestionNum: 10
};

export const setLives = (gameObj, lives) => {
  if (lives < 0 || lives > game.lives) {
    throw new RangeError('Number of lives can\'t be negative or > 3');
  }

  return Object.assign({}, gameObj, {
    lives: lives
  });
};

export const setTime = (gameObj, time) => {
  if (time < 0) {
    throw new RangeError('Time can\'t be negative');
  }

  return Object.assign({}, gameObj, {
    timer: time
  });
};

export const setCurrentQuestion = (gameObj, questionNum) => {
  if (questionNum < 0 || questionNum > game.maxQuestionNum) {
    throw new RangeError('Questions can\'t be negative or > 9');
  }

  return Object.assign({}, gameObj, {
    currentQuestion: questionNum
  });
};

export const setCorrectQuestions = (gameObj, number) => {
  if (number < 0 || number > game.maxQuestionNum) {
    throw new RangeError('Correct questions can\'t be negative or > 9');
  }

  return Object.assign({}, gameObj, {
    correctQuestions: number
  });
};
