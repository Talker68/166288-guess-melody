export default class AbstractView {

	constructor(inputData) {
		this.inputData = inputData;
	}

  get element() {
    if (!this._element) {
      this._element = document.createElement('div');
      this._element.innerHTML = this.getMarkUp();
      this.bindHandlers();
    }
    return this._element.firstChild;
  }

  getMarkUp() {
    throw new Error('Abstract method should be implemented');
  }

	renderView(){
		const mainElement = document.querySelector('.main');
		mainElement.parentNode.replaceChild(this.element, mainElement);
	}

  bindHandlers() {
    // By default threre is nothing to bind
  }

  clearHandlers() {
    // By default nothing to clear
  }
}
