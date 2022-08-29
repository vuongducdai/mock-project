export default function calculateQuantityCart(cart) {
	if (!Array.isArray(cart)) return 0;
	return cart.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);
}
