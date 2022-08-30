import useSWR from 'swr';
import publicRequest, {
	fetcher,
	serverRequest,
	SERVER_URL,
} from '../requestMethod';

const getCartList = userId => {
	return publicRequest.get(`cart/find/${userId}`);
};

export function useCart(id) {
	const { data, error, isValidating } = useSWR(
		`${SERVER_URL}/cart/find/${id}`,
		fetcher,
	);

	return {
		data,
		isLoading: !error && !data,
		isError: error,
		isValidating,
	};
}
export async function removeItemCart(data, products, cartId) {
	await serverRequest.patch(`/cart/${cartId}`, products);

	return { ...data, products };
}

export async function deleteCart(cartId) {
	await serverRequest.delete(`/cart/${cartId}`);
	return undefined;
}

export default { getCartList };
