import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home.page";
//import App from "../../App";
import Auth from "../../pages/Auth.page";
import SignUpPage from "../../pages/SignUp.page";
import PerfilPageSettings from "../../pages/PerfilSettings";
import MainLayout from "../Layouts/MainLayout";

import { AuthProvider, PrivateRoute } from "../../context/ContextAuth";
import PageNotFound from "../../pages/PageNotFound";
import PerfilInformacion from "../../pages/PerfilInformacion";
import Productos from "../../pages/Productos";

const EcotriaRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="productos">
            <Route
              index
              element={
                <PrivateRoute>
                  <MainLayout>
                    <Productos />
                  </MainLayout>
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="user">
            <Route
              index
              path="perfil"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <PerfilPageSettings />
                  </MainLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="informacion"
              element={
                <PrivateRoute>
                  <MainLayout>
                    <PerfilInformacion />
                  </MainLayout>
                </PrivateRoute>
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
