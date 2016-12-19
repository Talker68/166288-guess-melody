import AbstractView from './abstract-view';
import GamePresenter from '../game-presenter';

class GenreView extends AbstractView {

  constructor(inputData) {
    super(inputData);
  }

  renderOption(index, data) {
    return `<div class="genre-answer">
        <div class="player-wrapper" data-audio="${data.audio}"></div>
        <input type="checkbox" name="answer" value="${index}" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`;
  }

  getMarkup() {
    return `<section class="main main--level main--level-genre">
    <h2 class="title">${this.inputData.text}</h2>
    <form class="genre">
      ${this.inputData.answers
          .map((item, idx) => this.renderOption(idx, item.data))
          .join('')}
      <button class="genre-answer-send" type="submitButton">Ответить</button>
    </form>
  </section>`;
  }


  bindHandlers() {

    const answerButton = this.element.querySelector('.genre-answer-send');
    answerButton.disabled = true;

    let checkedAnswerOptions = [];

    const checkAnswered = () => {
      checkedAnswerOptions = this.element.querySelectorAll('.genre-answer input:checked');
      if ( checkedAnswerOptions.length === 0) {
        answerButton.disabled = true;
      } else {
        answerButton.disabled = false;
      }
    };

    const answerBlock = this.element.querySelector('.genre');

    answerBlock.addEventListener('change', (evt) => {
      if (evt.target.getAttribute('name') === 'answer') {
        checkAnswered();
      }
    });

    answerButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      let allAnswersAreCorrect = true;
      const allOptions = this.element.querySelectorAll('.genre-answer input');

      for (const item of allOptions) {
        if ( (item.checked && !this.inputData.answers[item.value].isCorrect) ||
          (!item.checked && this.inputData.answers[item.value].isCorrect) ) {
          allAnswersAreCorrect = false;
        }
        item.checked = false;
      }
      answerButton.disabled = true;
      GamePresenter.questionRouter(allAnswersAreCorrect);
    });
  }
}

export default (data) => new GenreView(data);
