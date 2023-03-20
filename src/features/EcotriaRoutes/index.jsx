import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { AuthProvider, PrivateRoute } from "../../context/ContextAuth";

import Load from "../../components/Load";

const Home = lazy(() => import("../../pages/Home.page"));
const Auth = lazy(() => import("../../pages/Auth.page"));
const SignUpPage = lazy(() => import("../../pages/SignUp.page"));
const UserProducts = lazy(() => import("../../pages/user/Products"));

const EcotriaRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Load />}>
          <Routes>
            <Route path="/">
              <PrivateRoute>
                <Route index element={<Home />} />
              </PrivateRoute>
            </Route>
            <Route path="products" element={<div> Products </div>} />
            <Route path="auth">
              <Route path="login" element={<Auth />} />
              <Route path="register" element={<SignUpPage />} />
            </Route>
            <Route path="user" element={<Home />}>
              <Route path="products" element={<UserProducts />} />
            </Route>
            <Route
              path="admin"
              element={
                <PrivateRoute>
                  <div>Admin </div>
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Suspense>
      </AuthProvider>
      <Outlet></Outlet>
    </BrowserRouter>
  );
};

export default EcotriaRoutes;
