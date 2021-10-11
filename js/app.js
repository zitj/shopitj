import { proizvodi } from '../data/proizvodi.js';
import { renderProducts } from './renderProducts.js';

renderProducts(proizvodi);

document.addEventListener('click', (e) => {
	if (e.path[0].nodeName == 'BUTTON' && e.path[1].className == 'product') {
		const productClicked = e.path[1];
		proizvodi.forEach((proizvod) => {
			if (proizvod.ime_proizvoda.toLowerCase() == productClicked.children[1].innerText.toLowerCase()) {
				console.log(proizvod);
			}
		});
	}
});
