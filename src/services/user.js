import axios from "./axios";

export const getUserInfo = async ({ token, signal }) => {
  try {
    const response = await axios.get("/user-view-info", {
      signal,
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (e) {
    throw new Error(e.response?.data?.error || e.message);
  }
};

export const updateUserInfo = async ({ data, token, signal }) => {
  try {
    const response = await axios.put("/user-view-info", data, {
      signal,
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (e) {
    throw new Error(e.response?.data?.error || e.message);
  }
};
