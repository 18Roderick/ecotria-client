import axios from "./axios";

export const getProductsByPage = async ({ token, page = 0, postsLimit = 10, signal }) => {
  const response = await axios.post(
    "/post_list_all",
    {
      currentPage: page,
      postsLimit,
    },
    {
      signal,
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};
