import { axiosInstance } from "../utils";

const api = axiosInstance.default;

/**
 *
 * @param {Object} bodyDto
 * @param {string} bodyDto.correo
 * @param {string} bodyDto.contrasena
 * @returns {Promise<AxiosResponse<any>>}
 */
export const signIn = ({ correo, contrasena }) => {
  return api.post("/user-login", { correo, contrasena });
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
export const signUp = async (bodyDto) => {
  try {
    const response = await api.post("/user-create", bodyDto);
    const data = response.data;

    //if promise return and key error then return the message
    if (data.error) {
      throw new Error(data.error);
    }
    return response.data;
  } catch (e) {
    throw new Error(e.message);
  }
};
