import { FC } from "react";
import { PrivateRoute } from "../../context/ContextAuth";
import MainLayout from "./MainLayout";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({ children }) => {
  return (
    <PrivateRoute>
      <MainLayout>{children}</MainLayout>
    </PrivateRoute>
  );
};

export default ProtectedLayout;
