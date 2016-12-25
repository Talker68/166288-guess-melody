import view from './view';
import GameModel from './data/game-model';
import timer from './timer/timer';
import {getStats, setStats, formatTime} from './stats-service';
import {result} from './data/game-data';
import Application from './application';

class GamePresenter {

  constructor(model = GameModel) {
    this.model = model;
    this.timer = document.querySelector('.timer-wrapper');

    this.goToResults = this.goToResults.bind(this);
    this.tick = this.tick.bind(this);
  }

  setQuestions(questions) {
    this.questions = questions;
    this.questionsCount = questions.length;
  }

  switchToNext(questionNum, questionsArr) {
    const currentQ = questionsArr[questionNum];
    view(currentQ.type, currentQ);
  }

  tick() {
    this.model.time++;
  }

  gameStart() {
    this.model.resetState();
    result.stats.percent = false;

    this.stopFn = timer(this.model.maxTime, this.goToResults);
    document.body.addEventListener('timer-tick', this.tick, false);

    this.timer.classList.remove('invisible');
    this.switchToNext(0, this.questions);
  }

  goToResults() {
    const formattedTime = formatTime(this.model.time);
    getStats(this.model.correctQuestions, this.model.time, formattedTime)
        .then((resultStats) => {
          result.stats = resultStats;
          Application.showStats();
        })
        .catch((res) => {
          result.stats.time = formattedTime;
          Application.showStats();
        });
    setStats({time: this.model.time, answers: this.model.correctQuestions});
    this.stopFn();
    document.body.removeEventListener('timer-tick', this.tick);
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
    } else {
      this.model.correctQuestions++;
    }

    if (this.model.currentQuestion === this.questionsCount) {
      this.goToResults();

    } else {
      this.switchToNext(this.model.currentQuestion, this.questions);
    }
  }
}

export default new GamePresenter();
