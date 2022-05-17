import axiosClient from "../api/axios";
const detailApi = {
  getDetail: (data) => {
    const url = `/news/detail/${data}`;
    return axiosClient.get(url);
  },
};
export default detailApi;
