import React from "react";
import Header from "../Header/Header";
import Leftnav from "../Leftnav";
import Rightchat from "../Rightchat";
import Popupchat from "../Popupchat";
import Appfooter from "../Appfooter";

const MainLayout = ({ children }) => {
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
