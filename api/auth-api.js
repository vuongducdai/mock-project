import { useDispatch, useSelector } from "react-redux";
import { updateUserFromLogin } from "../redux/admin/userSlice";
import axiosClient from "./axios-client";

export const authAPI = {
  login(payload) {
    return axiosClient.post("/login", payload);
  },

  getProfile() {
    return axiosClient.get("/profile");
  },

  getUser() {
    return axiosClient
      .get("/user")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log("Error while login", error));
  },

  logout() {
    return axiosClient.post("/logout");
  },

  getCart() {
    return axiosClient.get("/cart/find/7").then((res) => console.log(res.data));
  },
};
