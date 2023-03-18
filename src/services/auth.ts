import { SignInType, SignUpType } from "../types/auth.types";
import axios from "./axios";

export interface SigninSucces {
  data: Data;
  message: string;
  token: string;
}

export interface Data {
  nombre: string;
  apellido: string;
  correo: string;
  _id: string;
}

export const signIn = async ({ correo, contrasena }: SignInType) => {
  try {
    const response = await axios.post("/user-login", { correo, contrasena });

    if (response.data?.error) {
      throw new Error(response.data.error);
    }

    return response.data as SigninSucces;
  } catch (e: any) {
    throw new Error(e.response?.data?.error || e.message);
  }
};

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
