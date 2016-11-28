import * as domConstructors from './dom-constructors';
import mainResult from './main--result';

const genreAnswer = new Set([
  {player: '<div class="player-wrapper"></div>'},
  {player: '<div class="player-wrapper"></div>'},
  {player: '<div class="player-wrapper"></div>'},
  {player: '<div class="player-wrapper"></div>'}
]);

const levelGenre = {
  title: 'Выберите инди-рок треки',
  genreAnswer: genreAnswer,
  button: 'Ответить'
};

const title = `<h2 class="title">${levelGenre.title}</h2>`;

const button = `<button class="genre-answer-send" type="submit">${levelGenre.button}</button>`;

const getGenreAnswerList = (obj) => {
  let genreAnswerHtml = '';
  let index = 0;

  for (let it of obj) {
    index++;
    genreAnswerHtml += `<div class="genre-answer">
        ${it.player}
        <input type="checkbox" name="answer" value="answer-1" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`;
  }

  return genreAnswerHtml;
};

const genreForm = `<form class="genre">
      ${getGenreAnswerList(levelGenre.genreAnswer)}
      ${button}
    </form>`;

const moduleString = `<section class="main main--level main--level-genre">
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
checkboxList.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    answerSendBtn.disabled = !mainLevelGenre.querySelectorAll('input[type="checkbox"]:checked').length;
  });
});

answerSendBtn.addEventListener('click', nextScreen);

export default mainLevelGenre;
