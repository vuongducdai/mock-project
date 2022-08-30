import axios from 'axios';

export const fetcher = url => axios.get(url).then(res => res.data);

const BASE_URL = 'https://63030a4dc6dda4f287c1d8d4.mockapi.io/';
export const SERVER_URL = 'http://localhost:8000';
// const BASE_URL = 'https://ecommercevoyager.herokuapp.com/';

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

const publicRequest = axios.create({
	baseURL: BASE_URL,
});
export const serverRequest = axios.create({
	baseURL: SERVER_URL,
});

export default publicRequest;
