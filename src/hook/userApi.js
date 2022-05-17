// import StorageKeys from "../constants/storage-keys";
import axiosClient from "../api/axios";

const userApi = {
  register(data) {
    const url = "/register";
    const params = {
      username: data?.email,
      password: data?.password,
      name: data?.username,
    };
    return axiosClient.post(url, params);
  },
  login(data) {
    const url = `/login`;
    const params = {
      username: data?.email,
      password: data?.password,
    };
    return axiosClient.post(url, params);
  },
  list() {
    const url = "/news/list";
    return axiosClient.get(url);
  },
  // async getUser(params) {
  //     const newParams = { ...params }
  //     const accessToken = localStorage.getItem(StorageKeys.access)
  //     const url = `users/`;
  //     const response = await axiosClient.get(url, {
  //         params: { ...newParams },
  //         headers: {
  //             Authorization: `Bearer ${accessToken}`
  //         }
  //     });
  //     return response
  // },
  // async getProfile(params) {
  //     const newParams = { ...params }
  //     const accessToken = localStorage.getItem(StorageKeys.access)
  //     const response = await axiosClient.get(`/detail/`, {
  //         params: { ...newParams },
  //         headers: {
  //             Authorization: `Bearer ${accessToken}`
  //         }
  //     })
  //     return response
  // },
};

export default userApi;
