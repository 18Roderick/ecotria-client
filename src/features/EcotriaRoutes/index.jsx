import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import App from "../../App";
import { AuthProvider } from "../../context/ContextAuth";

const EcotriaRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="auth" element={<div>Auth</div>}>
            <Route path="login" element={<div>Login</div>} />
            <Route path="register" element={<div>Register</div>} />
          </Route>
          <Route path="admin" element={<div>Admin </div>}></Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default EcotriaRoutes;
