import AbstractView from './abstract-view';
import GamePresenter from '../game-presenter';

class ArtistView extends AbstractView {

  constructor(inputData) {
    super(inputData);
  }

  renderOption(index, data) {
    return `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="${index}" />
          <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${data.image}">
            ${data.name}
          </label>
        </div>`;
  }

  getMarkup() {
    return `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">${this.inputData.text}</h2>
      <div class="player-wrapper" data-audio="${this.inputData.data.audio}"></div>
      <form class="main-list">
        ${this.inputData.answers
            .map((item, idx) => this.renderOption(idx, item.data))
            .join('')}
      </form>
      </div>
    </section>`;
  }


  bindHandlers() {
    const answerList = this.element.querySelector('.main-list');

    answerList.addEventListener('change', (evt) => {
      const choice = evt.target;
      if (!choice.classList.contains('main-answer-r')) {
        return;
      }
      const qResult = this.inputData.answers[choice.value].isCorrect;
      GamePresenter.questionRouter(qResult);
    });
  }
}

export default (data) => new ArtistView(data);
