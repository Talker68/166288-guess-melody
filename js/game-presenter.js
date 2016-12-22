import {questions, result, statistics} from './data/game-data';
import view from './view';
import GameModel from './data/game-model';
import Application from './application';
import timer from './timer/timer'

let stopFn;

class GamePresenter {

  constructor(model = GameModel) {
    this.model = model;
    this.timer = document.querySelector('.timer-wrapper');
    this.questionsCount = questions.length;
    this.goToResults = this.goToResults.bind(this);
    this.tick = this.tick.bind(this);
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

  tick() {
    this.model.time++;
  }

  gameStart() {
    this.model.resetState();

    stopFn = timer(this.model.maxTime, this.goToResults);
    document.body.addEventListener('timer-tick', this.tick,  false);

    this.timer.classList.remove('invisible');
    this.switchToNext(0, questions);
  }

  goToResults() {
    result.stats = this.calcStats(statistics, this.model.currentQuestion, this.initialLives, this.model.lives, this.model.time);
    stopFn();
    document.body.removeEventListener('timer-tick', this.tick);
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
