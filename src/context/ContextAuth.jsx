import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { removeSessionToken, getSessionToken, setSessionToken, isTokenExpired } from "../utils";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getSessionToken() ?? null);
  const [isAuth, setAuth] = useState(!!token ?? false);
  const [user, setUser] = useState(token ? jwtDecode(token) : null);
  const login = (tk) => {
    if (tk) {
      setSessionToken(tk);
      setToken(tk);
      setUser(jwtDecode(tk));
      setAuth(true);
    }
  };

  const logOut = () => {
    removeSessionToken();
    setUser(null);
    setToken(null);
    setAuth(false);
  };

  const value = {
    token: token,
    isAuth: isAuth,
    user,
    setAuth: login,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context.token && isTokenExpired(context.token)) {
    context.logOut();
  }
  return context;
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
