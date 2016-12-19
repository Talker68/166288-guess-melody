import {questions, result, statistics} from './data/game-data';
import view from './view';
import GameModel from './data/game-model';
import Application from './application';

class GamePresenter {

  constructor(model = GameModel) {
    this.model = model;
    this.initialLives = GameModel.lives;
    this.timer = document.querySelector('.timer-wrapper');
    this.questionsCount = questions.length;
    this.goToResults = this.goToResults.bind(this);
  }

  switchToNext(questionNum, questionsArr) {
    const currentQ = questionsArr[questionNum];
    view(currentQ.type, currentQ);
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return {minutes, seconds};
  }

  calcStats(stats, questionsPassed, initialLivesNum, currentLives, time) {
    let newStats = JSON.parse(JSON.stringify(stats));
    const currentResult = {
      time: time,
      answers: questionsPassed - initialLivesNum + currentLives - 1,
      recent: true
    };
    newStats.push(currentResult);
    const totalResultsNum = newStats.length;
    let currentGamePlace = totalResultsNum;

    newStats.sort((a, b) => {
      if (a.answers === b.answers) {
        return a.time - b.time;
      }
      return b.answers - a.answers;
    });

    newStats.find((el, idx) => {
      if (el.recent === true) {
        currentGamePlace = idx + 1;
        return true;
      }
      return false;
    });

    const successPercent = Math.round((totalResultsNum - currentGamePlace) / totalResultsNum * 100);

    return {time: this.formatTime(time), correctAnswers: currentResult.answers, percents: successPercent};
  }

  gameStart() {

    if (this.model.currentQuestion !== 0) {
      this.model.resetState();
    }

    this.timer.classList.remove('invisible');
    // window.stopFn = window.initializeCountdown(this.model.maxTime);

    document.body.addEventListener('timer-end', this.goToResults, false);
    document.body.addEventListener('timer-tick', () => {
      this.model.time++;
    }, false);

    this.switchToNext(0, questions);
  }

  goToResults() {
    result.stats = this.calcStats(statistics, this.model.currentQuestion, this.initialLives, this.model.lives, this.model.time);
    // window.stopFn();
    Application.showStats();
  }

  questionRouter(prevResult = true) {

    this.model.currentQuestion++;

    if (prevResult === false) {
      if (this.model.lives === 0) {
        this.goToResults();
        return;
      } else {
        this.model.lives--;
      }
    }

    if (this.model.currentQuestion === this.questionsCount) {
      this.goToResults();

    } else {
      this.switchToNext(this.model.currentQuestion, questions);
    }
  }
}

export default new GamePresenter();
