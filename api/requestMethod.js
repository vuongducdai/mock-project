import axios from "axios";

const BASE_URL = "https://63030a4dc6dda4f287c1d8d4.mockapi.io/";
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

export const publicRequest = axios.create({
      baseURL: BASE_URL,
});








