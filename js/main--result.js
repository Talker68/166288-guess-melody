import * as domConstructors from './dom-constructors';
import logoHtml from './logo';

const result = {
  status: 'Вы настоящий меломан!',
  time: 2,
  quantum: 4,
  comparison: 80
};

const playerResults = `<h2 class="title">${result.status}</h2>
    <div class="main-stat">За&nbsp;${result.time}&nbsp;минуты<br>вы&nbsp;отгадали ${result.quantum}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${result.comparison}%&nbsp;игроков</span>`;

const moduleString = `<section class="main main--result">
    ${logoHtml}
    ${playerResults}
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const mainResult = domConstructors.getElementFromTemplate(moduleString);
export default mainResult;
