import AX from "axios";

const axios = AX.create({
  baseURL: "https://api.shelfup.ir/api/v1/"
});

axios.interceptors.request.use(request => {
  let token = localStorage.getItem("access_token");
  if (token) request.headers["Authorization"] = "Bearer " + token;
  return request;
});

const dataProvider = {
  getList: (resource, params) => {
    const { pagination } = params;
    return axios({
      method: "get",
      url: resource,
      params: { page: pagination.page, per_page: pagination.perPage }
    }).then(res => {
      return {
        data: res.data.data.items,
        total: res.data.data.pagination.total_count
      };
    });
  },
  getOne: (resource, params) => Promise,
  getMany: (resource, params) => Promise,
  getManyReference: (resource, params) => Promise,
  create: (resource, params) => Promise,
  update: (resource, params) => Promise,
  updateMany: (resource, params) => Promise,
  delete: (resource, params) => Promise,
  deleteMany: (resource, params) => Promise
};

export default dataProvider;
