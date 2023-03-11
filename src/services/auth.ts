import axios from "./axios";


interface SignInType {
  correo: string;
  contrasena: string;
}

export const signIn = async ({ correo, contrasena }: SignInType) => {
  try {
    const response = await axios.post("/user-login", { correo, contrasena });

    if (response.data?.error) {
      throw new Error(response.data.error);
    }

    return response.data;
  } catch (e: any) {
    throw new Error(e.response?.data?.error || e.message);
  }
};


interface SignUpType {
  correo: string;
  contrasena: string;
  nombre: string;
  apellido: string;
}

export const signUp = async (bodyDto: SignUpType) => {
  try {
    const response = await axios.post("/user-create", bodyDto);
    const data = response.data;

    //if promise return and key error then return the message
    if (data.error) {
      throw new Error(data.error);
    }
    return response.data;
  } catch (e: any) {
    throw new Error(e.response?.data?.error || e.message);
  }
};
