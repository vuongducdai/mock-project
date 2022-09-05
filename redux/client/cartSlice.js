import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	// products: [
	// 	{
	// 		name: 'Fantastic Wooden Tuna',
	// 		img: 'http://loremflickr.com/640/480/nightlife',
	// 		price: 8456,
	// 		color: 'fuchsia',
	// 		size: 24,
	// 		createdAt: 1661493902558,
	// 		material: 'material 1',
	// 		quantity: 21,
	// 		id: '1',
	// 	},
	// 	{
	// 		name: 'Practical Cotton Tuna',
	// 		img: 'http://loremflickr.com/640/480/cats',
	// 		price: 46241,
	// 		color: 'indigo',
	// 		size: 24,
	// 		createdAt: 1661493902558,
	// 		material: 'material 2',
	// 		quantity: 8,
	// 		id: '2',
	// 	},
	// 	{
	// 		name: 'Recycled Concrete Pizza',
	// 		img: 'http://loremflickr.com/640/480/business',
	// 		price: 8818,
	// 		color: 'lavender',
	// 		size: 11,
	// 		createdAt: 1661493902558,
	// 		material: 'material 3',
	// 		quantity: 13,
	// 		id: '3',
	// 	},
	// 	{
	// 		name: 'Incredible Cotton Pizza',
	// 		img: 'http://loremflickr.com/640/480/fashion',
	// 		price: 8719,
	// 		color: 'mint green',
	// 		size: 48,
	// 		createdAt: 1661493902559,
	// 		material: 'material 4',
	// 		quantity: 12,
	// 		id: '4',
	// 	},
	// 	{
	// 		name: 'Bespoke Steel Soap',
	// 		img: 'http://loremflickr.com/640/480/animals',
	// 		price: 96263,
	// 		color: 'azure',
	// 		size: 72,
	// 		createdAt: 1661493902559,
	// 		material: 'material 5',
	// 		quantity: 6,
	// 		id: '5',
	// 	},
	// ],
	products: [],
};

// export const getCartListThunk = createAsyncThunk(
// 	'client/getCartListThunk',
// 	async () => {
// 		const res = await getUsers();
// 		return res.data;
// 	},
// );

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.products.push(action.payload);
		},
		removeFromCart: (state, action) => {
			state.products = state.products.filter(
				cart => cart.id !== action.payload,
			);
		},
		updateCart: (state, action) => {
			state.products.forEach(cart => {
				if (cart.id === action.payload.id) {
					return {
						...cart,
						...action.payload,
					};
				}
				return cart;
			});
		},
	},
});

export const getCartList = state => state.cartSlice.products;
export const getCartQuantity = state => state.cartSlice.products.length;
export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
