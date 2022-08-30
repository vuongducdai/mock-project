import axios from "axios";

export const BASE_URL = "https://ecommercevoyager.herokuapp.com/";
// const BASE_URL = 'https://63030a4dc6dda4f287c1d8d4.mockapi.io';
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// Products
export const getProducts = () => publicRequest.get('/product')
export const getProduct = (id) => publicRequest.get(`/product/${id}`)

export const postProduct = (form) => publicRequest.post('/product', form)
export const patchProduct = (data) => publicRequest.patch(`/product/${data.id}`, data.form)
export const deleteProduct = (id) => publicRequest.delete(`/product/${id}`)

// Users
export const getUsers = () => publicRequest.get('/user')
export const postUser = (form) => publicRequest.post('/user', form)
export const patchUser = (data) => publicRequest.patch(`/user/${data.id}`, data.form)
export const deleteUser = (id) => publicRequest.delete(`/user/${id}`)





