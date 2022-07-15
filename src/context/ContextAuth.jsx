import React, { useState } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import {
  setStorage,
  removeSessionToken,
  getSessionToken,
  setSessionToken,
} from "../utils/localStorageManager";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(getSessionToken() ?? null);
  const [isAuth, setAuth] = useState(!!token ?? false);

  const login = (tk) => {
    if (tk) {
      setStorage(tk);
      setSessionToken(tk);
      setToken(tk);
      setAuth(true);
    }
  };

  const logOut = () => {
    removeSessionToken();
    setToken(null);
    setAuth(false);
  };

  const value = {
    token: token,
    isAuth: isAuth,
    login,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const PrivateRoute = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.isAuth) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthContext;
