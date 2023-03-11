const SESSION_KEY = "SESSION_KEY_f95f8378-73a6-4562-9547-c5c7a52d6a21";

export const setStorage = (key: string, value: unknown) => {
  if (typeof value !== "string") value = JSON.stringify(value);
  localStorage.setItem(key, value as string);
};

export const getStorage = (key: string) => localStorage.getItem(key);

export const setSessionToken = (token: string) => setStorage(SESSION_KEY, token);

export const getSessionToken = () => getStorage(SESSION_KEY);

export const removeSessionToken = () => localStorage.removeItem(SESSION_KEY);

export const deleteItem = (key: string) => localStorage.removeItem(key);
