import axios from "axios";
import Cookies from "cookies";
import { resolveHref } from "next/dist/shared/lib/router/router";
import { useState } from "react";

const BASE_URL = "https://ecommercevoyager.herokuapp.com/";
// const BASE_URL = 'http://localhost:8000';

let user;
if (typeof window !== "undefined") {
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
export const getProducts = () => publicRequest.get("/product");
export const getProduct = (id) => publicRequest.get(`/product/${id}`);

export const postProduct = (form) => publicRequest.post("/product", form);
export const patchProduct = (data) =>
  publicRequest.patch(`/product/${data.id}`, data.form);
export const deleteProduct = (id) => publicRequest.delete(`/product/${id}`);

// Auth
export const postRegister = (form) =>
  publicRequest.post("/auth/register", form);
export const postLogin = (form) =>
  publicRequest
    .post(`api/auth/login`, form)
    .then((res) => {
      // const cookies = new Cookies(res.request, res);
      // const access_token = cookies.get("access_token");
      // if (access_token) {
      //   console.log("successfully get access token", access_token);
      // }
      console.log(res);
    })
    .catch((error) => console.log(error));

// Users
export const getUsers = () =>
  userRequest.get("/user").then((res) => console.log(res));
export const patchUser = (data) =>
  publicRequest.patch(`/user/${data.id}`, data.form);
export const deleteUser = (id) => publicRequest.delete(`/user/${id}`);

// Cart
export const getCarts = () => publicRequest.get("/cart");
export const deleteCart = (id) => publicRequest.delete(`/cart/${id}`);
