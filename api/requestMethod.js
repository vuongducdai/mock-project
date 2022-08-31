import axios from "axios";
import Cookies from "cookies";
import { resolveHref } from "next/dist/shared/lib/router/router";
import { useState } from "react";

export const BASE_URL = "https://ecommercevoyager.herokuapp.com/api";
// const BASE_URL = "https://ecommercevoyager.herokuapp.com/api/";
// const BASE_URL = 'http://localhost:8000/api';

const publicRequest = axios.create({
      baseURL: BASE_URL,
});

// Products
export const getProducts = () => publicRequest.get("/product");
export const getProduct = (id) => publicRequest.get(`/product/${id}`);

export const postProduct = (form) => publicRequest.post("/product", form);
export const patchProduct = (data) => publicRequest.patch(`/product/${data.id}`, data.form);
export const deleteProduct = (id) => publicRequest.delete(`/product/${id}`);

// Auth
export const postRegister = (form) => publicRequest.post("/auth/register", form);
export const postLogin = (form) => publicRequest.post(`api/auth/login`, form)

// Users
export const getUsers = () => publicRequest.get("/user")
export const patchUser = (data) => publicRequest.patch(`/user/${data.id}`, data.form);
export const deleteUser = (id) => publicRequest.delete(`/user/${id}`);

// Cart
export const getCarts = () => publicRequest.get("/cart");
export const deleteCart = (id) => publicRequest.delete(`/cart/${id}`);
