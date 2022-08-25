import React from 'react';
import Cart from '../../components/cart/Cart.jsx';
import MainLayout from '../../components/layout/main';
const CartPage = () => {
	return (
		<>
			<Cart />
		</>
	);
};

CartPage.Layout = MainLayout;

export default CartPage;
