import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.URL_API,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //todo: Manejar error de autenticación de manera global
    return Promise.reject(error);
  }
);

export default axiosInstance;
