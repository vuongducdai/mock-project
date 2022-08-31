import axios from "axios";
import { useState } from "react";

export const BASE_URL = "https://ecommercevoyager.herokuapp.com/api";
// const BASE_URL = 'http://localhost:8000';

let user;
if (typeof window !== 'undefined') {
      user = JSON.parse(localStorage.getItem("persist:root"))?.user;
}
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


const publicRequest = axios.create({
      baseURL: BASE_URL,
});

export const userRequest = axios.create({
      baseURL: BASE_URL,
      header: { token: `Bearer ${TOKEN}` },
});

// Products
export const getProducts = () => publicRequest.get('/product')
export const getProductsPage = (page) => publicRequest.get(`/product/pages?page=${page}`)
export const getProduct = (id) => publicRequest.get(`/product/${id}`)

export const postProduct = (form) => publicRequest.post('/product', form)
export const patchProduct = (data) => publicRequest.patch(`/product/${data.id}`, data.form)
export const deleteProduct = (id) => publicRequest.delete(`/product/${id}`)

// Auth
export const postRegister = (form) => publicRequest.post('/auth/register', form);
export const postLogin = (form) => publicRequest.post(`/auth/login`, form);

// Users
export const getUsers = () => publicRequest.get('/user')
export const patchUser = (data) => publicRequest.patch(`/user/${data.id}`, data.form)
export const deleteUser = (id) => publicRequest.delete(`/user/${id}`)

// Cart
export const getCarts = () => publicRequest.get('/cart');
export const deleteCart = (id) => publicRequest.delete(`/cart/${id}`);





