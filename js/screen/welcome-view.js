import logoHtml from './../logo';
import AbstractView from './../view';
import {data, nextQuestion} from './../game';

class WelcomeView extends AbstractView {

  constructor(dataInput) {
    super();
    this.data = dataInput;
  }

  getMarkUp() {

    const rulesHtml = `<h2 class="title main-title">${this.data.title}</h2>
      <p class="text main-text">${this.data.content}</p>`;

    const moduleString = `<section class="main main--welcome">
        ${logoHtml}
        <button class="main-play">Начать игру</button>
        ${rulesHtml}
      </section>`;

    return moduleString;

  }

  bindHandlers() {

    const mainPlayBtn = this.element.querySelector('.main-play');

    mainPlayBtn.addEventListener('click', () => {
      nextQuestion();
    });

  }
}

export default () => new WelcomeView(data.rules).element;
