import * as domConstructors from './dom-constructors';
import getLevelArtist from './main--level-artist';
import logoHtml from './logo';
import data from './data';

const getMainWelcome = (data) => {
  const rulesHtml = `<h2 class="title main-title">${data.title}</h2>
    <p class="text main-text">${data.content}</p>`;

  const moduleString = `<section class="main main--welcome">
    ${logoHtml}
    <button class="main-play">Начать игру</button>
    ${rulesHtml}
  </section>`;

  const mainWelcome = domConstructors.getElementFromTemplate(moduleString);
  const mainPlayBtn = mainWelcome.querySelector('.main-play');

  mainPlayBtn.addEventListener('click', () => domConstructors.renderElement(getLevelArtist));

  return mainWelcome;
};

export default getMainWelcome(data.rules);
