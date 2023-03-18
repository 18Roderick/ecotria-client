import React from "react";
import { Link } from "react-router-dom";

import { FaUserAlt, FaHome, FaBox, FaShoppingBag, FaRegComment } from "react-icons/fa";

const Appfooter = () => (
  <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
    <Link to="/home" className="nav-content-bttn nav-center">
      <FaHome color="#fff" title="home" size={20} />
    </Link>
    <Link to="/defaultvideo" className="nav-content-bttn">
      <FaBox color="#fff" title="home" size={20} />
    </Link>
    <Link to="/defaultlive" className="nav-content-bttn" data-tab="chats">
      <FaRegComment color="#fff" title="home" size={20} />
    </Link>
    <Link to="/shop2" className="nav-content-bttn">
      <FaShoppingBag color="#fff" title="home" size={20} />
    </Link>
    <Link to="/user/perfil" className="nav-content-bttn">
      <FaUserAlt color="#fff" title="user" size={20} />
    </Link>
  </div>
);

export default Appfooter;
