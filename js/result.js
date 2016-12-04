import * as domConstructors from './dom-constructors';
import logoHtml from './logo';

export default (inputData) => {
  const playerResults = `<h2 class="title">${inputData.status}</h2>
    <div class="main-stat">За&nbsp;${inputData.time}&nbsp;минуты<br>вы&nbsp;отгадали ${inputData.quantum}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${inputData.comparison}%&nbsp;игроков</span>`;

  const moduleString = `<section class="main main--result">
    ${logoHtml}
    ${playerResults}
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const mainResult = domConstructors.getElementFromTemplate(moduleString);

  const replayButton = mainResult.querySelector('.main-replay');

  replayButton.addEventListener('click', (evt) => {
    window.location.reload(false);
  });

  return mainResult;
};
