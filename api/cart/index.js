import useSWR from 'swr';
import publicRequest, { BASE_URL, fetcher } from '../requestMethod';

export function useCart(id) {
	const { data, error, isValidating } = useSWR(
		id ? `${BASE_URL}/cart/find/${id}` : null,
		fetcher,
		{
			revalidateOnFocus: false,
		},
	);

	return {
		data,
		isLoading: !error && !data,
		isError: error,
		isValidating,
	};
}
const getCartList = userId => {
	return publicRequest.get(`cart/find/${userId}`);
};

// export async function createCart(data) {
// 	await serverRequest.post(`/cart`);

// 	return data;
// }
// export async function updateCart(data, products, cartId) {
// 	await serverRequest.patch(`/cart/${cartId}`, products);

// 	return { ...data, products };
// }

// export async function deleteCart(cartId) {
// 	await serverRequest.delete(`/cart/${cartId}`);
// 	return undefined;
// }

export default { getCartList };
