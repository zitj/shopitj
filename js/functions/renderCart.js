import { cartHeading } from '../components/cartHeading.js';
const containerOfProducts = document.getElementById('containerOfProducts');
const shoppingList = document.getElementById('shoppingList');
const shoppingCart = document.getElementById('shoppingCart');

export const renderCart = (array) => {
	containerOfProducts.style.display = 'none';
	shoppingCart.style.display = 'block';
	shoppingCart.innerHTML = cartHeading;
	let template = '';
	array.forEach((product) => {
		template += `
				<div class="product">
					<img src="../img/${product.name}.jpg" alt="${product.name}" />
					<div class="text">
						<h3>${product.name}</h3>
						<p>${product.description}</p>
					</div>
					<div class="buttons">
						<p>${product.quantity}</p>
						<button>+</button>
						<button>-</button>
					</div>
				</div>
		`;
	});
	shoppingList.innerHTML = template;
	shoppingCart.append(shoppingList);
};
