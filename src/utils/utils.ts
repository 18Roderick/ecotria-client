import jwtDecode from "jwt-decode";
export const isTokenExpired = (token: string) => {
  if (!token) return false;
  const decoded = jwtDecode(token);
  return decoded.exp * 1000 < Date.now();
};

export const objectToUrlQuery = (params: unknown) => {
  if (!(params instanceof Object)) return "";
  const urlParams = Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");

  return `?${urlParams}`;
};
