import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home.page";
import App from "../../App";
import Auth from "../../pages/Auth.page";
import SignUpPage from "../../pages/SignUp.page";

import { AuthProvider } from "../../context/ContextAuth";

const EcotriaRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="auth">
            <Route path="login" element={<Auth />} />
            <Route path="register" element={<SignUpPage />} />
          </Route>
          <Route path="admin" element={<div>Admin </div>}></Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default EcotriaRoutes;
