import axiosClient from "./axiosClient";

const userApi = {
  register(params) {
    const url = "/users/add";
    return axiosClient.post(url, params); // params truyền vào dưới dạng 1 object có key là params: nhưng key và value đều là params nên viết tắt là {params}
  },
  login(params) {
    const url = "/auth/login";
    return axiosClient.post(url, params); // params truyền vào dưới dạng 1 object có key là params: nhưng key và value đều là params nên viết tắt là {params}
  },
};
export default userApi;
