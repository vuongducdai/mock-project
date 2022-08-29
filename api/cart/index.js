import publicRequest from '../requestMethod';

const getCartList = userId => {
	return publicRequest.get(`cart/find/${userId}`);
};

export default { getCartList };
