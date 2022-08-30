import axiosClient from "./axios-client";

export const authAPI = {
  login(payload) {
    return axiosClient.post("/login", payload);
  },

  getProfile() {
    return axiosClient.get("/profile");
  },

  logout() {
    return axiosClient.post("/logout");
  },
};
