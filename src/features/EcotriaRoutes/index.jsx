import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home.page";
//import App from "../../App";
import Auth from "../../pages/Auth.page";
import SignUpPage from "../../pages/SignUp.page";

import UserProducts from "../../pages/user/Products";

import { AuthProvider, PrivateRoute } from "../../context/ContextAuth";

const EcotriaRoutes = () => {
  return (
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
    </BrowserRouter>
  );
};

export default EcotriaRoutes;
