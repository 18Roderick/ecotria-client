import React from "react";
import { Link } from "react-router-dom";

const Appfooter = () => (
  <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
    <Link to="/home" className="nav-content-bttn nav-center">
      <i className="feather-home"></i>
    </Link>
    <Link to="/defaultvideo" className="nav-content-bttn">
      <i className="feather-package"></i>
    </Link>
    <Link to="/defaultlive" className="nav-content-bttn" data-tab="chats">
      <i className="feather-layout"></i>
    </Link>
    <Link to="/shop2" className="nav-content-bttn">
      <i className="feather-layers"></i>
    </Link>
    <Link to="/defaultsettings" className="nav-content-bttn">
      <img src="assets/images/female-profile.png" alt="user" className="w30 shadow-xss" />
    </Link>
  </div>
);

export default Appfooter;
