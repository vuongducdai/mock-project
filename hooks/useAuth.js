import useSWR from "swr";
import { authAPI } from "../api/auth-api";
import axiosClient from "../api/axios-client";

export function useAuth(option) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", (url) => axiosClient.get(url), {
    dedupingInterval: 60 * 1000,
    revalidateOnFocus: false,
    ...option,
  });

  async function login() {
    await authAPI.login({
      username: "vuongducdai",
      password: "123456",
    });

    //re-trigger request
    await mutate();
  }

  async function logout() {
    await authAPI.logout();
    await mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
  };
}
