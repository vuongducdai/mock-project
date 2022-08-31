import { useDispatch, useSelector } from "react-redux";
import { updateUserFromLogin } from "../redux/admin/userSlice";
import axiosClient from "./axios-client";

export const authAPI = {
  login(payload) {
    return axiosClient.post("/login", payload).then((res) => {
      // const dispatch = useDispatch();
      // dispatch(updateUserFromLogin(res.data));

      console.log(res.data);
    });
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
