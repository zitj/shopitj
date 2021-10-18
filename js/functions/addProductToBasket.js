export const addProductToBasket = (array, product, basketNetWorth, counter) => {
	if (array.length > 0) {
		array.forEach((item) => {
			if (item.id === product.id) {
				item.quantity++;
				item.totalPrice = item.quantity * item.price;
			}
		});
	}
	array.push(product);

	array = array.filter((item, index, self) => index === self.findIndex((t) => t.id === item.id));

	array.forEach((item) => {
		basketNetWorth += item.totalPrice;
		counter += item.quantity;
	});

	localStorage.setItem('basket', JSON.stringify(array));
	localStorage.setItem('basketNetWorth', basketNetWorth);
	localStorage.setItem('counter', counter);
};
