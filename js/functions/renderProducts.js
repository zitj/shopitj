const containerOfProducts = document.getElementById('containerOfProducts');
const shoppingCart = document.getElementById('shoppingCart');

export const renderProducts = (products) => {
	shoppingCart.style.display = 'none';
	containerOfProducts.style.display = 'flex';
	let template = '';
	products.forEach((product) => {
		template += `
            <div class="product">
                <img src="./img/${product.name}.jpg" alt="${product.name}" />
                <h3 class="title">${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="price">${product.price}.00 RSD</p>
                <button>Dodaj u korpu</button>
            </div>
            `;
	});
	containerOfProducts.innerHTML = template;
};
