import { products } from '../data/products.js';
import { renderProducts } from './renderProducts.js';
import { renderCart } from './renderCart.js';
import { addProductToBasket } from './addProductToBasket.js';

const shoppingCartButton = document.getElementById('shoppingCartButton');
let newProduct;
let basket = [];

renderProducts(products);

document.addEventListener('click', (e) => {
	if (e.path[0].nodeName == 'BUTTON' && e.path[1].className == 'product') {
		const productClicked = e.path[1];
		products.forEach((product) => {
			if (product.name.toLowerCase() == productClicked.children[1].innerText.toLowerCase()) {
				newProduct = { ...product, quantity: 1 };
			}
		});
		addProductToBasket(basket, newProduct);
	}
});

shoppingCartButton.addEventListener('click', () => {
	renderCart();
});
