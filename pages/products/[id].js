import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../components/layout/main';
import ProductDetail from '../../components/product/ProductDetail';

const Product = () => {
	const router = useRouter();
	return (
		<>
			<ProductDetail />
		</>
	);
};

Product.Layout = MainLayout;

export default Product;
