import { useRouter } from 'next/router';
import React from 'react';
import { serverRequest } from '../../api/requestMethod';
import LoadingProduct from '../../components/client/LoadingProduct';
import MainLayout from '../../components/layout/main';
import ProductDetail from '../../components/product/ProductDetail';

const Product = props => {
	const router = useRouter();

	if (router.isFallback) {
		return <LoadingProduct />;
	}

	return (
		<>
			<ProductDetail productProps={props.data} />
		</>
	);
};

export const getStaticPaths = async () => {
	const { data } = await serverRequest.get('/product');
	const paths = data.map(productItem => ({
		params: { productId: productItem._id },
	}));
	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params }) => {
	const { data } = await serverRequest.get(`/product/${params.productId}`);

	return {
		props: { data },
	};
};

Product.Layout = MainLayout;

export default Product;
