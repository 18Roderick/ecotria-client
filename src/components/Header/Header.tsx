import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Darkbutton from "../Darkbutton";
import Notification from "../Notification";

import logo from "../../assets/images/Ecotria.png";
import { useAuth } from "../../context/ContextAuth";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isNoti, setNoti] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleActive = () => setIsActive(!isActive);
  const toggleisNoti = () => setNoti(!isNoti);

  const navClass = `${isOpen ? " nav-active" : ""}`;
  const buttonClass = `${isOpen ? " active" : ""}`;
  const searchClass = `${isActive ? " show" : ""}`;
  const notiClass = `${isNoti ? " show" : ""}`;

  const auth = useAuth();

  return (
    <div className="nav-header bg-white shadow-xs border-0" style={{ position: "sticky" }}>
      <div className="nav-top">
        <Link to="/">
          {/* <i className="feather-zap text-success display2-size me-3 ms-0"></i> */}
          <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-center"
              alt="Ecotria Logo"
            />
          </span>{" "}
        </Link>
        <Link to="/" className="mob-menu ms-auto me-2 chat-active-btn">
          <i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i>
        </Link>
        <Link to="/" className="mob-menu me-2">
          <i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i>
        </Link>
        <span onClick={toggleActive} className="me-2 menu-search-icon mob-menu">
          <i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i>
        </span>
        <button onClick={toggleOpen} className={`nav-menu me-0 ms-2 ${buttonClass}`}></button>
      </div>

      <NavLink to="/" className="p-2 text-center ms-3 menu-icon center-menu-icon">
        <i className="feather-home font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
      </NavLink>
      <NavLink to="/" className="p-2 text-center ms-0 menu-icon center-menu-icon">
        <i className="feather-zap font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
      </NavLink>
      <NavLink to="/" className="p-2 text-center ms-0 menu-icon center-menu-icon">
        <i className="feather-video font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
      </NavLink>
      <NavLink to="/" className="p-2 text-center ms-0 menu-icon center-menu-icon">
        <i className="feather-user font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
      </NavLink>
      <NavLink to="/" className="p-2 text-center ms-0 menu-icon center-menu-icon">
        <i className="feather-shopping-bag font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i>
      </NavLink>

      <span
        className={`p-2 pointer text-center ms-auto menu-icon ${notiClass}`}
        id="dropdownMenu3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={toggleisNoti}
      >
        <span className="dot-count bg-warning"></span>
        <i className="feather-bell font-xl text-current"></i>
      </span>
      <Notification isOpen={isNoti} />
      <Link to="/defaultmessage" className="p-2 text-center ms-3 menu-icon chat-active-btn">
        <i className="feather-message-square font-xl text-current"></i>
      </Link>
      <Darkbutton />
      <Link to="/user/perfil" className="p-0 ms-3 menu-icon">
        <img
          src={`https://avatars.dicebear.com/api/initials/${
            auth?.user?.name ? auth?.user?.name : "ECOTRIA"
          }.svg?background=green`}
          alt="user"
          className="w40 mt--1"
        />
      </Link>

      {/* navbar escritorio */}

      <div className={`app-header-search ${searchClass}`}>
        <form className="search-form">
          <div className="form-group searchbox mb-0 border-0 p-1">
            <input type="text" className="form-control border-0" placeholder="Search..." />
            <i className="input-icon"></i>
            <span className="ms-1 mt-1 d-inline-block close searchbox-close">
              <i className="ti-close font-xs" onClick={toggleActive}></i>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
