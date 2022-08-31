export default function calculateTotalPrice(cart) {
	if (!Array.isArray(cart)) return 0;
	const totalPrice = cart.reduce((acc, item) => {
		return acc + Number(item.quantityOrder) * Number(item.price);
	}, 0);
	return totalPrice;
}
