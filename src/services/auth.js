import { axiosInstance } from "../utils";

const api = axiosInstance.default;

/**
 *
 * @param {Object} bodyDto
 * @param {string} bodyDto.email
 * @param {string} bodyDto.contrasena
 * @returns {Promise<AxiosResponse<any>>}
 */
export const signIn = ({ email, password }) => {
  return api.post("/user-login", { email, password });
};

/**
 *
 * @param {Object} bodyDto
 * @param {string} bodyDto.email
 * @param {string} bodyDto.contrasena
 * @param {string} bodyDto.nombre
 * @param {string} bodyDto.apellido
 * @returns {Promise<AxiosResponse<any>>}
 */
export const signUp = (bodyDto) => api.post("/user-create", bodyDto);
