import { useRouter } from 'next/router';
import React from 'react';
import ProductDetail from '../../components/product/ProductDetail';

const Product = () => {
	const router = useRouter();
	return (
		<>
			<ProductDetail />
		</>
	);
};

export default Product;
