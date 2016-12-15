import * as domConstructors from './../dom-constructors';
import getSvgTimer from './../get-svg-timer';
import AbstractView from './../view';
import {data, nextQuestion} from './../game';

//export default (inputData) => {
//
//  const getAnswerList = (arr) => {
//
//    let answerListContent = '';
//    let index = 0;
//
//    for (let it of arr) {
//      index++;
//      answerListContent += `<div class="main-answer-wrapper">
//          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}" />
//          <label class="main-answer" for="answer-${index}">
//            <img class="main-answer-preview" src="${it.src}">
//            ${it.value}
//          </label>
//        </div>`;
//    }
//    return answerListContent;
//  };
//
//
//  const answerList = `<form class="main-list">
//      ${getAnswerList(inputData.answers)}
//    </form>`;
//
//  const moduleString = `<section class="main main--level main--level-artist">
//      ${getSvgTimer(data.timer)}
//      <div class="main-wrap">
//        <div class="main-timer"></div>
//        <h2 class="title main-title">${inputData.title}</h2>
//        <div class="player-wrapper" data-audio="${inputData.data.audio}"></div>
//        ${answerList}
//      </div>
//    </section>`;
//
//  const mainLevelArtist = domConstructors.getElementFromTemplate(moduleString);
//  const answerBtnList = mainLevelArtist.querySelectorAll('.main-list');
//
//  for (let it of answerBtnList) {
//    it.addEventListener('click', (e) => {
//      if (e.target.classList.contains('main-answer') || e.target.classList.contains('main-answer-preview')) {
//        nextQuestion();
//      }
//    });
//  }
//
//  return mainLevelArtist;
//
//};

class ArtistView extends AbstractView {

  constructor(dataInput) {
    super();
    this.inputData = dataInput;
  }

  getMarkUp() {

    const getAnswerList = (arr) => {

      let answerListContent = '';
      let index = 0;

      for (let it of arr) {
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
      ${getAnswerList(this.inputData.answers)}
    </form>`;

    const moduleString = `<section class="main main--level main--level-artist">
      ${getSvgTimer(data.timer)}
      <div class="main-wrap">
        <div class="main-timer"></div>
        <h2 class="title main-title">${this.inputData.title}</h2>
        <div class="player-wrapper" data-audio="${this.inputData.data.audio}"></div>
        ${answerList}
      </div>
    </section>`;

    return moduleString;

  }

  bindHandlers() {

    const answerBtnList = this.element.querySelectorAll('.main-list');

    for (let it of answerBtnList) {
      it.addEventListener('click', (e) => {
        if (e.target.classList.contains('main-answer') || e.target.classList.contains('main-answer-preview')) {
          nextQuestion();
        }
      });
    }

  }

}

export default () => new ArtistView().element;
