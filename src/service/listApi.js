import axiosClient from "../api/axios";
const listNewsTopicApi = {
  getList: () => {
    const url = "/news/list";

    return axiosClient.get(url);
  },
  getListByTopic: (data) => {
    const url = `/news/listNewByTopic/${data.id}`;
    const params ={page: data.page,}
    return axiosClient.get(url, { params });
  },
};
export default listNewsTopicApi;
