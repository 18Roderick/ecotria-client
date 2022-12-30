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
    <Suspense fallback={<Load />}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="products" element={<div> Products </div>} />
            <Route path="auth">
              <Route path="login" element={<Auth />} />
              <Route path="register" element={<SignUpPage />} />
            </Route>
            <Route path="user" element={<Home />}>
              <Route path="productos" element={<UserProducts />} />
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
        </AuthProvider>
        <Outlet></Outlet>
      </BrowserRouter>
    </Suspense>
  );
};

export default EcotriaRoutes;
