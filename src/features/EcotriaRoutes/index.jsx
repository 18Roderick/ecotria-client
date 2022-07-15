import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import App from "../../App";

const EcotriaRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="auth" element={<div>Auth</div>}>
          <Route path="login" element={<div>Login</div>} />
          <Route path="register" element={<div>Register</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default EcotriaRoutes;
