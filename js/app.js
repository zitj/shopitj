import { products } from '../data/products.js';
import { renderProducts } from './renderProducts.js';
import { renderCart } from './renderCart.js';

const shoppingCartButton = document.getElementById('shoppingCartButton');

renderProducts(products);

document.addEventListener('click', (e) => {
	if (e.path[0].nodeName == 'BUTTON' && e.path[1].className == 'product') {
		const productClicked = e.path[1];
		products.forEach((product) => {
			if (product.name.toLowerCase() == productClicked.children[1].innerText.toLowerCase()) {
				let newProduct = { ...product, quantity: 1 };
			}
		});
	}
});

shoppingCartButton.addEventListener('click', () => {
	renderCart();
});
