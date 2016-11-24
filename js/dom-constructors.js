/**
  *Отрисовка DOM элемента из строки
  *@param {string} htmlString
  *@return {Node} DOM element
  */
export const getElementFromTemplate = (htmlString) => {

  let div = document.createElement('div');
  div.innerHTML = htmlString;

  return div.firstChild;
};
/**
 * Отрисовка DOM элемента, заменой шаблонов
 * @param {Node} domElement
 */
export const renderElement = (domElement) => {

  const mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(domElement, mainElement);
};
