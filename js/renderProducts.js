const containerOfProducts = document.getElementById('containerOfProducts');

export const renderProducts = (products) => {
	let template = '';
	products.forEach((proizvod) => {
		template += `
            <div class="product">
                <img src="./img/${proizvod.ime_proizvoda}.jpg" alt="${proizvod.ime_proizvoda}" />
                <h3 class="title">${proizvod.ime_proizvoda}</h3>
                <p class="description">${proizvod.opis_proizvoda}</p>
                <p class="price">${proizvod.cena_proizvoda}.00 RSD</p>
                <button>Dodaj u korpu</button>
            </div>
            `;
	});
	containerOfProducts.innerHTML = template;
};
