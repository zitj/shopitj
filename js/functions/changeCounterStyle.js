export const changeCounterStyle = (counter, counterElement) => {
	if (counter >= 10) {
		counterElement.style.paddingLeft = '5px';
		counterElement.style.paddingRight = '1px';
	}
	if (counter >= 20) {
		counterElement.style.paddingLeft = '5px';
		counterElement.style.paddingRight = '3px';
	}
};
