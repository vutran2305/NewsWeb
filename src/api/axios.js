import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "content-type": "application/json",
  },
});
axiosClient.interceptors.request.use((config) => {
  //Handle Token here
  return config;
});
// response: when request got response and get response.data
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
