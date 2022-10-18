import { PrivateRoute } from "../../context/ContextAuth";
import MainLayout from "./MainLayout";

const ProtectedLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <MainLayout>{children}</MainLayout>
    </PrivateRoute>
  );
};

export default ProtectedLayout;
