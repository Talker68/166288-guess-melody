import * as domConstructors from './dom-constructors';
import getSvgTimer from './get-svg-timer';
import {data, nextQuestion} from './game';

export default (inputData) => {

  const title = `<h2 class="title">${inputData.title}</h2>`;

  const button = '<button class="genre-answer-send" type="submit">Ответить</button>';

  const getGenreAnswerList = (arr) => {
    let genreAnswerHtml = '';
    let index = 0;

    for (let it of arr) {
      index++;
      genreAnswerHtml += `<div class="genre-answer">
        <div class="player-wrapper" data-audio="${it.data.audio}"></div>'
        <input type="checkbox" name="answer" value="answer-1" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`;
    }

    return genreAnswerHtml;
  };

  const genreForm = `<form class="genre">
      ${getGenreAnswerList(inputData.answers)}
      ${button}
    </form>`;

  const moduleString = `<section class="main main--level main--level-genre">
    ${getSvgTimer(data.timer)}
    ${title}
    ${genreForm}
  </section>`;

  const mainLevelGenre = domConstructors.getElementFromTemplate(moduleString);
  const answerSendBtn = mainLevelGenre.querySelector('.genre-answer-send');

  /**
   * Поумолчанию задизаблена кнопка "Ответить"
   */
  answerSendBtn.disabled = true;

  const checkboxList = mainLevelGenre.querySelectorAll('input[type="checkbox"]');

  /**
   * Отменить отправку формы, отрисовать дом-элемент
   * @param{Node} event
   */
  const nextScreen = (event) => {
    event.preventDefault();
    nextQuestion();
  };
  /**
   * Если выбран ответ, отменить answerSendBtn.disabled
   * @param{Node} checkbox
   */
  for (let it of checkboxList) {
    it.addEventListener('change', () => {
      answerSendBtn.disabled = !mainLevelGenre.querySelectorAll('input[type="checkbox"]:checked').length;
    });
  }
  answerSendBtn.addEventListener('click', nextScreen);

  return mainLevelGenre;

};
