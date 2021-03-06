import { products } from '../data/products.js';
import { renderProducts } from './functions/renderProducts.js';
import { renderCart } from './functions/renderCart.js';
import { addProductToBasket } from './functions/addProductToBasket.js';
import { changeCounterStyle } from './functions/changeCounterStyle.js';

const homepageButton = document.getElementById('homepageButton');
const shoppingCartButton = document.getElementById('shoppingCartButton');
const shoppingCartCounter = document.getElementById('shoppingCartCounter');

let newProduct;
let basket = [];
let basketNetWorth = 0;
let counter = 0;

renderProducts(products);

if (localStorage.getItem('basket')) basket = JSON.parse(localStorage.getItem('basket'));
if (localStorage.getItem('counter')) shoppingCartCounter.innerHTML = localStorage.getItem('counter');

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
	renderCart(JSON.parse(localStorage.getItem('basket')), JSON.parse(localStorage.getItem('basketNetWorth')));
});

homepageButton.addEventListener('click', () => {
	renderProducts(products);
});
