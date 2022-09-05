import { authAPI } from "../api/auth-api";

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

  async function login({ name, password }) {
    const res = await authAPI.login({
      name,
      password,
    });
    return res;

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
    logout,
  };
}
