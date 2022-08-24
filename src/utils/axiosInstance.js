import axios from "axios";
import config from "../config";
import { removeSessionToken } from "./localStorageManager";

const axiosInstance = axios.create({
  baseURL: config.URL_API,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //todo: Manejar error de autenticación de manera global
    if (error && error.response && error.response.status === 401) {
      removeSessionToken();
      location.reaload();
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
