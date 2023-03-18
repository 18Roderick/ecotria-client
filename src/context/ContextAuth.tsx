import React, { FC, useCallback, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { removeSessionToken, getSessionToken, setSessionToken, isTokenExpired } from "../utils";

interface AuthContextType {
  token: string | null;
  isAuth: boolean;
  user: unknown;
  setAuth(tk: string): void;
  logOut(): void;
}

const defaultValues: AuthContextType = {
  token: "",
  isAuth: false,
  user: null,
  setAuth: (tk: string) => {},
  logOut() {},
};

const AuthContext = React.createContext<AuthContextType>(defaultValues);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState(getSessionToken() ?? null);
  const [isAuth, setAuth] = useState(!!token ?? false);
  const [user, setUser] = useState(token ? jwtDecode(token) : null);
  const login = (tk: string) => {
    if (tk) {
      setSessionToken(tk);
      setToken(tk);
      setUser(jwtDecode(tk));
      setAuth(true);
    }
  };

  const logOut = useCallback(() => {
    removeSessionToken();
    setUser(null);
    setToken(null);
    setAuth(false);
  }, []);

  const value = {
    token: token,
    isAuth: isAuth,
    user,
    setAuth: login,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = React.useContext<AuthContextType>(AuthContext);
  if (context.token && isTokenExpired(context.token)) {
    context.logOut();
  }
  return context;
};

export const PrivateRoute: FC<{ children: React.ReactNode }> = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.isAuth) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthContext;
