import axiosClient from "./axiosClient";

const productsApi = {
  getAll(params) {
    const url = "/products";
    return axiosClient.get(url, { params }); // params truyền vào dưới dạng 1 object có key là params: nhưng key và value đều là params nên viết tắt là {params}
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/products";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `products/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `products/${id}`;
    return axiosClient.delete(url);
  },
};
export default productsApi;
