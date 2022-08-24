import axios from "axios";

export const BASE_URL = "https://63030a4dc6dda4f287c1d8d4.mockapi.io/";

export const fetcher = (url) => axios.get(url).then(res => res.data)


