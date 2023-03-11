import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedLayout from "../Layouts/ProtectedLayout";

import PerfilPageSettings from "../../pages/user/PerfilSettings";

import { AuthProvider, PrivateRoute } from "../../context/ContextAuth";
import PageNotFound from "../../pages/PageNotFound";
import PerfilInformacion from "../../pages/user/PerfilInformacion";
import Productos from "../../pages/Productos";
import Load from "../Load";

const Home = lazy(() => import("../../pages/Home.page"));
const Auth = lazy(() => import("../../pages/Auth.page"));
const SignUpPage = lazy(() => import("../../pages/SignUp.page"));
const UserProducts = lazy(() => import("../../pages/user/UserProducts"));

const EcotriaRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedLayout>
                <Suspense fallback={<Load />}>
                  <Home />
                </Suspense>
              </ProtectedLayout>
            }
          >
            <Route index element={<Home />} />
          </Route>
          <Route path="productos">
            <Route
              index
              element={
                <ProtectedLayout>
                  <Suspense fallback={<Load />}>
                    <Productos />
                  </Suspense>
                </ProtectedLayout>
              }
            />
          </Route>
          <Route path="user">
            <Route
              index
              path="perfil"
              element={
                <ProtectedLayout>
                  <Suspense fallback={<Load />}>
                    <PerfilPageSettings />
                  </Suspense>
                </ProtectedLayout>
              }
            />
            <Route
              path="informacion"
              element={
                <ProtectedLayout>
                  <Suspense fallback={<Load />}>
                    <PerfilInformacion />
                  </Suspense>
                </ProtectedLayout>
              }
            />
            <Route
              path="productos"
              element={
                <ProtectedLayout>
                  <Suspense fallback={<Load />}>
                    <UserProducts />
                  </Suspense>
                </ProtectedLayout>
              }
            />
          </Route>
          <Route path="auth">
            <Route path="login" element={<Auth />} />
            <Route path="register" element={<SignUpPage />} />
          </Route>
          <Route
            path="admin"
            element={
              <PrivateRoute>
                <div>Admin </div>
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default EcotriaRoutes;
