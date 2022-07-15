import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
	baseURL: config.URL_API,
});
export default axiosInstance;
