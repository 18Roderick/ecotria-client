import { PrivateRoute } from "../../context/ContextAuth";

import Header from "../Header/Header";

const ProtectedLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <Header />
      {children}
    </PrivateRoute>
  );
};

export default ProtectedLayout;
