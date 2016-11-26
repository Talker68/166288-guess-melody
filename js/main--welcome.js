import * as domConstructors from './dom-constructors';
import mainLevelArtist from './main--level-artist';

const moduleString = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
      Удачи!
    </p>
  </section>`;

const mainWelcome = domConstructors.getElementFromTemplate(moduleString);
const mainPlayBtn = mainWelcome.querySelector('.main-play');

mainPlayBtn.addEventListener('click', () => domConstructors.renderElement(mainLevelArtist));

export default mainWelcome;
