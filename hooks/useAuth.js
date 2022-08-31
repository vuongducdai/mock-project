import useSWR from "swr";
import { authAPI } from "../api/auth-api";
import axiosClient from "../api/axios-client";
import { postLogin } from "../api/requestMethod";

export function useAuth(option) {
  // const { data, error, mutate } = useSWR(
  //   "/profile",
  //   (url) => axiosClient.get(url),
  //   {
  //     dedupingInterval: 60 * 1000,
  //     revalidateOnFocus: false,
  //     ...option,
  //   }
  // );

  async function login(name, password) {
    await postLogin({
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

  return {
    // profile,
    // error,
    login,
    // logout,
  };
}
