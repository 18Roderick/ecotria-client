import axios from "./axios";

interface DefaultTypes {
  token: string;
  signal?: AbortSignal;
}

export const getUserInfo = async ({ token, signal }: DefaultTypes) => {
  try {
    const response = await axios.get("/user-view-info", {
      signal,
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (e: any) {
    throw new Error(e.response?.data?.error || e.message);
  }
};

interface UpdateUserInfoType {
  nombre: string;
  apellido: string;
  photoProfile: string;
  correo: string;
}

export const updateUserInfo = async ({
  data,
  token,
  signal,
}: {
  data: UpdateUserInfoType;
  token: string;
  signal?: AbortSignal;
}) => {
  try {
    const response = await axios.put("/user-view-info", data, {
      signal,
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (e: any) {
    throw new Error(e.response?.data?.error || e.message);
  }
};
