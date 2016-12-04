import * as domConstructors from './dom-constructors';
import getSvgTimer from './get-svg-timer';
import mainLevelGenre from './main--level-genre';
import mainResult from './main--result';
import data from './data'

const answer = new Set([
  {src: '', value: 'Пелагея'},
  {src: '', value: 'Краснознаменная дивизия имени моей бабушки'},
  {src: '', value: 'Lorde'}
]);

const levelArtist = {
  timer: {
    minutes: 2,
    seconds: 0
  },
  title: 'Кто исполняет эту песню?',
  answer: answer
};

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

const getLevelArtist = (data) => {

  const answerList = `<form class="main-list">
        ${getAnswerList(data.answer)}
      </form>`;

  const moduleString = `<section class="main main--level main--level-artist">
    ${getSvgTimer(data.timer)}
    <div class="main-wrap">
      <div class="main-timer"></div>
      <h2 class="title main-title">${data.title}</h2>
      <div class="player-wrapper"></div>
      ${answerList}
    </div>
  </section>`;

  const mainLevelArtist = domConstructors.getElementFromTemplate(moduleString);
  const answerBtnList = mainLevelArtist.querySelectorAll('.main-answer');
  const nextScreen = () => domConstructors.renderElement(mainResult);

  for (let it of answerBtnList) {
    it.addEventListener('click', () => nextScreen());
  }

  return mainLevelArtist;
};

export default getLevelArtist(levelArtist);
