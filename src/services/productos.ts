import { ProductInsert } from "../types";
import axios from "./axios";

interface ProductsByPageType {
  token: string;
  page?: number;
  postsLimit?: number;
  signal?: AbortSignal;
}

export const getProductsByPage = async ({ token, page = 0, postsLimit = 10, signal }: ProductsByPageType) => {
  const response = await axios.post(
    "/post_pagination",
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

interface Create extends ProductInsert {
  signal?: AbortSignal;
  token: string;
}

export const createProduct = async ({ signal, token, ...body }: Create) => {
  const response = await axios.post("/post_create", body, {
    signal,
    headers: {
      Authorization: token,
    },
  });

  return response.data;
};
