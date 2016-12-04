import * as domConstructors from './dom-constructors';
import getSvgTimer from './get-svg-timer';
import mainResult from './main--result';

const levelGenre = {
  title: 'Выберите инди-рок треки',
  numberOfOptions: 4,
  timer: {
    minutes: '02',
    seconds: '00'
  },
  button: 'Ответить'
};

const title = `<h2 class="title">${levelGenre.title}</h2>`;

const button = `<button class="genre-answer-send" type="submit">${levelGenre.button}</button>`;

const getGenreAnswerList = (num) => {
  let genreAnswerHtml = '';

  for (let i = 0; i < num; i++) {
    genreAnswerHtml += `<div class="genre-answer">
        <div class="player-wrapper"></div>'
        <input type="checkbox" name="answer" value="answer-1" id="a-${i}">
        <label class="genre-answer-check" for="a-${i}"></label>
      </div>`;
  }

  return genreAnswerHtml;
};

const genreForm = `<form class="genre">
      ${getGenreAnswerList(levelGenre.numberOfOptions)}
      ${button}
    </form>`;

const moduleString = `<section class="main main--level main--level-genre">
    ${getSvgTimer(levelGenre.timer)}
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
  domConstructors.renderElement(mainResult);
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

export default mainLevelGenre;
