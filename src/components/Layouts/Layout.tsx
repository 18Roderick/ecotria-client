import React from "react";
import Header from "../Header/Header";
import Leftnav from "../Leftnav";
import Rightchat from "../Rightchat";
import Popupchat from "../Popupchat";
import Appfooter from "../Appfooter";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Appfooter />
    </>
  );
};

export default Layout;
