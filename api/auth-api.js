import axiosClient from "./axios-client";

export const authAPI = {
  login(payload) {
    return axiosClient.post("/login", payload).then((res) => {
      console.log(res.data);
    });
  },

  getProfile() {
    return axiosClient.get("/profile");
  },

  getUser() {
    return axiosClient.get("/user").then((res) => console.log(res.data));
  },

  logout() {
    return axiosClient.post("/logout");
  },

  getCart() {
    return axiosClient.get("/cart/find/7").then((res) => console.log(res.data));
  },
};
