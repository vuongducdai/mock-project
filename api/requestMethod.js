import axios from "axios";

// export const BASE_URL = 'https://ecommercevoyager.herokuapp.com/api';
const BASE_URL = "https://ecommercevoyager.herokuapp.com/api/";
// const BASE_URL = 'http://localhost:8000/api';

export const fetcher = url => publicRequest.get(url).then(res => res.data);

const publicRequest = axios.create({
      baseURL: BASE_URL,
});

// Products
export const getProducts = () => publicRequest.get('/product');
export const getProduct = id => publicRequest.get(`/product/${id}`);

export const postProduct = form => publicRequest.post('/product', form);
export const patchProduct = data => publicRequest.patch(`/product/${data.id}`, data.form);
export const deleteProduct = id => publicRequest.delete(`/product/${id}`);

// Cart
export const getCarts = () => publicRequest.get('/cart');
export const createCart = data => publicRequest.post('/cart', data);
export const updateCart = (data, cartId) =>
      publicRequest.patch(`/cart/${cartId}`, data);
export const updateExistProductCart = async (
      data,
      cartId,
      productId,
      quantityObject,
) => {
      let filterProduct;

      if (quantityObject) {
            await publicRequest.patch(`/cart/${cartId}/${productId}`, {
                  quantityOrder: quantityObject.quantityOrder,
            });
            filterProduct = data.products.map(item => {
                  if (item._id === productId) {
                        return { ...item, quantityOrder: quantityObject.quantityOrder };
                  }
                  return item;
            });
      } else {
            await publicRequest.patch(`/cart/${cartId}/${productId}`);
            filterProduct = data.products.map(item => {
                  if (item._id === productId) {
                        return { ...item, quantityOrder: ++item.quantityOrder };
                  }
                  return item;
            });
      }

      return { ...data, products: filterProduct };
};
export const getCartById = cartId => publicRequest.get(`/cart/${cartId}`);
export const deleteExistProductCart = async (data, cartId, productId) => {
      await publicRequest.post(`/cart/${cartId}/${productId}`);
      const filterData = data.products.filter(item => item._id !== productId);
      return { ...data, products: filterData };
};

// Auth
export const postRegister = form => publicRequest.post('/auth/register', form);
export const postLogin = form => publicRequest.post(`api/auth/login`, form)


// Users
export const getUsers = () => publicRequest.get('/user');
export const patchUser = data => publicRequest.patch(`/user/${data.id}`, data.form);
export const deleteUser = id => publicRequest.delete(`/user/${id}`);
