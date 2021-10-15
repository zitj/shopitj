import { products } from '../data/products.js';
import { renderProducts } from './renderProducts.js';
import { renderCart } from './renderCart.js';
import { addProductToBasket } from './addProductToBasket.js';
import { changeCounterStyle } from './changeCounterStyle.js';

const shoppingCartButton = document.getElementById('shoppingCartButton');
const shoppingCartCounter = document.getElementById('shoppingCartCounter');

let newProduct;
let basket = [];
let basketNetWorth = 0;
let counter = 0;

// renderProducts(products);

document.addEventListener('click', (e) => {
	if (e.path[0].nodeName == 'BUTTON' && e.path[1].className == 'product') {
		const productClicked = e.path[1];

		products.forEach((product) => {
			if (product.name.toLowerCase() == productClicked.children[1].innerText.toLowerCase()) {
				newProduct = { ...product, quantity: 1, totalPrice: product.price };
			}
		});

		addProductToBasket(basket, newProduct, basketNetWorth, counter);

		shoppingCartCounter.innerText = localStorage.getItem('counter');

		changeCounterStyle(localStorage.getItem('counter'), shoppingCartCounter);
	}
});

shoppingCartButton.addEventListener('click', () => {
	renderCart();
});
