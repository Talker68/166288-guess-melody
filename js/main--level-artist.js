import * as domConstructors from './dom-constructors';
import mainLevelGenre from './main--level-genre';

const answer = new Set([
  {src: '', value: 'Пелагея'},
  {src: '', value: 'Краснознаменная дивизия имени моей бабушки'},
  {src: '', value: 'Lorde'}
]);

const levelArtist = {
  timer: {
    mins: '02',
    secs: '00'
  },
  title: 'Кто исполняет эту песню?',
  answer: answer
};

const svgTimer = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${levelArtist.timer.mins}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${levelArtist.timer.secs}</span>
      </div>
    </svg>`;

const getAnswerList = (obj) => {

  let answerListContent = '';
  let index = 0;

  for (let it of obj) {
    index++;
    answerListContent += `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}" />
          <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${it.src}">
            ${it.value}
          </label>
        </div>`;
  }
  return answerListContent;
};

const answerList = `<form class="main-list">
        ${getAnswerList(levelArtist.answer)}
      </form>`;


const moduleString = `<section class="main main--level main--level-artist">
    ${svgTimer}
    <div class="main-wrap">
      <div class="main-timer"></div>
      <h2 class="title main-title">${levelArtist.title}</h2>
      <div class="player-wrapper"></div>
      ${answerList}
    </div>
  </section>`;

const mainLevelArtist = domConstructors.getElementFromTemplate(moduleString);
const answerBtnList = mainLevelArtist.querySelectorAll('.main-answer');
const nextScreen = () => domConstructors.renderElement(mainLevelGenre);

answerBtnList.forEach((btn) => btn.addEventListener('click', nextScreen));

export default mainLevelArtist;
