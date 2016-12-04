import * as domConstructors from './dom-constructors';
import logoHtml from './logo';
import nextQuestion from './game';

export default (dataInput) => {
  const rulesHtml = `<h2 class="title main-title">${dataInput.title}</h2>
    <p class="text main-text">${dataInput.content}</p>`;

  const moduleString = `<section class="main main--welcome">
    ${logoHtml}
    <button class="main-play">Начать игру</button>
    ${rulesHtml}
  </section>`;

  const mainWelcome = domConstructors.getElementFromTemplate(moduleString);
  const mainPlayBtn = mainWelcome.querySelector('.main-play');

  mainPlayBtn.addEventListener('click', () => {
    nextQuestion();
  });

  return mainWelcome;
};
