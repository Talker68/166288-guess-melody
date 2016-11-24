//Отрисовка DOM элемента из строки
export const getElementFromTemplate = (htmlString) => {

  let div = document.createElement('div');
  div.innerHTML = htmlString;

  return div.firstChild;
};
//Отрисовка DOM элемента, заменой шаблонов
export const renderElement = (domElement) => {

  const mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(domElement, mainElement);
};
