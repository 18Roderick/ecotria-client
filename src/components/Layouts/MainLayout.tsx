import { FC } from "react";
import Header from "../Header/Header";
import Leftnav from "../Leftnav";
import Rightchat from "../Rightchat";
import Popupchat from "../Popupchat";
import Appfooter from "../Appfooter";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Leftnav />
      <Rightchat />
      {children}
      <Popupchat />
      <Appfooter />
    </>
  );
};

export default MainLayout;
