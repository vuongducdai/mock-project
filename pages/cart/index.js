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

// export async function getServerSideProps() {
// 	// const res = await cartApi.getCartList(1);
// 	const res = await axios.get('http://localhost:8000/cart/find/7');
// 	const data = res.data;

// 	return {
// 		props: {
// 			carts: data,
// 			revalidate: 5,
// 		},
// 	};
// }

CartPage.Layout = MainLayout;

export default CartPage;
