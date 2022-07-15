const SESSION_KEY = "SESSION_KEY_4895445445";

export const setStorage = (key, value) => {
  if (typeof value !== "string") value = JSON.stringify(value);
  localStorage.setItem(key, value);
};

export const getStorage = (key) => localStorage.getItem(key);

export const setSessionToken = (token) => setStorage(SESSION_KEY, token);

export const getSessionToken = () => getStorage(SESSION_KEY);

export const removeSessionToken = () => localStorage.removeItem(SESSION_KEY);

export const deleteItem = (key) => localStorage.removeItem(key);
