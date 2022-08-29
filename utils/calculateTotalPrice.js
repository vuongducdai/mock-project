export default function calculateTotalPrice(cart) {
	if (!Array.isArray(cart)) return 0;
	return cart.reduce((acc, item) => {
		return acc + +item.quantity * +item.price;
	}, 0);
}
