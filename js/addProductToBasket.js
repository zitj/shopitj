export const addProductToBasket = (array, product) => {
	if (array.length > 0) {
		array.forEach((item) => {
			if (item.id === product.id) {
				item.quantity++;
			}
		});
	}
	array.push(product);

	array = array.filter((item, index, self) => index === self.findIndex((t) => t.id === item.id));

	console.log(array);
};
