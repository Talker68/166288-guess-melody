import * as domConstructors from './dom-constructors';
import mainResult from './main--result';

const moduleString = `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
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
