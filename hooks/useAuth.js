import useSWR from "swr";
import { authAPI } from "../api/auth-api";
import axiosClient from "../api/axios-client";

export function useAuth(option) {
  // const { data, error, mutate } = useSWR(
  //   "cart/find/7",
  //   (url) => axiosClient.get(url),
  //   {
  //     dedupingInterval: 2000,
  //     revalidateOnFocus: false,
  //     ...option,
  //   }
  // );

  async function login(name, password) {
    await authAPI.login({
      name: name,
      password: password,
    });

    //re-trigger request
    // await mutate();
  }

  async function logout() {
    await authAPI.logout();
    await mutate({}, false);
  }

  async function getUser() {
    await authAPI.getUser();
  }

  async function getCart() {
    await authAPI.getCart();
  }

  return {
    // profile,
    // data,
    // error,
    login,
    getUser,
    getCart,
    // logout,
  };
}
