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
