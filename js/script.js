import { proizvodi } from '../data/proizvodi.js';

const containerOfProducts = document.getElementById('containerOfProducts');

console.log(containerOfProducts);

const renderProducts = () => {
	let template = '';
	proizvodi.forEach((proizvod) => {
		template += `
        <div class="product">
            <img src="./img/${proizvod.ime_proizvoda}.jpg" alt="${proizvod.ime_proizvoda}" />
            <h3>${proizvod.ime_proizvoda}</h3>
            <p>${proizvod.opis_proizvoda}</p>
            <p>${proizvod.cena_proizvoda}.00 RSD</p>
            <button>Dodaj u korpu</button>
        </div>
        `;
	});
	containerOfProducts.innerHTML = template;
};

renderProducts();
