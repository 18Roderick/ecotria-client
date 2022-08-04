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
export const signUp = (bodyDto) => {
  return {
    data: bodyDto,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  }; //api.post("/user-create", bodyDto);
};
