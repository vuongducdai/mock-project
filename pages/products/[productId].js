import { useRouter } from 'next/router';
import React from 'react';
import { getProduct, getProducts } from '../../api/requestMethod';
import LoadingProduct from '../../components/client/LoadingProduct';
import MainLayout from '../../components/layout/main';
import ProductDetail from '../../components/product/ProductDetail';

const Product = ({ data }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <LoadingProduct />;
	}

	return (
		<>
			<ProductDetail productProps={data} />
		</>
	);
};

export const getStaticPaths = async () => {
	const { data } = await getProducts();
	const paths = data.map(productItem => ({
		params: { productId: productItem._id },
	}));

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params }) => {
	const { data } = await getProduct(params.productId);
	return {
		props: { data },
	};
};

Product.Layout = MainLayout;

export default Product;
