import { FC } from "react";
import { PrivateRoute } from "../../context/ContextAuth";
import Layout from "./Layout";
import MainLayout from "./MainLayout";

interface ProtectedLayoutProps {
  children: React.ReactNode;
  type?: "main" | "default";
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({ children, type = "main" }) => {
  return (
    <PrivateRoute>
      {type == "default" ? <Layout>{children}</Layout> : <MainLayout>{children}</MainLayout>}
    </PrivateRoute>
  );
};

export default ProtectedLayout;
