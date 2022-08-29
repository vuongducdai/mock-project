import axios from 'axios';

// const BASE_URL = "https://63030a4dc6dda4f287c1d8d4.mockapi.io/";
const BASE_URL = 'https://ecommercevoyager.herokuapp.com/';
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export default publicRequest;
