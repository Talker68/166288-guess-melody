import * as domConstructors from './dom-constructors';
import mainLevelArtist from './main--level-artist';
import logoHtml from './logo';

const rules = {
  title: 'Правила игры',
  content: `Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
      Удачи!`
};


const rulesHtml = `<h2 class="title main-title">${rules.title}</h2>
    <p class="text main-text">${rules.content}</p>`;

const moduleString = `<section class="main main--welcome">
    ${logoHtml}
    <button class="main-play">Начать игру</button>
    ${rulesHtml}
  </section>`;

const mainWelcome = domConstructors.getElementFromTemplate(moduleString);
const mainPlayBtn = mainWelcome.querySelector('.main-play');

mainPlayBtn.addEventListener('click', () => domConstructors.renderElement(mainLevelArtist));

export default mainWelcome;
