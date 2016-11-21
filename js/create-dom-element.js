export const getElementFromTemplate = (htmlString) => {

	let div = document.createElement('div');
	div.innerHTML = htmlString;


	return div.firstChild;
};
