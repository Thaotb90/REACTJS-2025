import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// add interceptor : thực hiện đồng loạt cho toàn bộ các request hoặc response
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosClient;

/**
- Data trả về dạng object với nhiều thuộc tính như: config, header, data, request, status... . Nhưng cái mình quan tâm khi lấy data về là mảng dữ liệu,. vì vậy trong response interceptor, mình return ra response.data
 */
