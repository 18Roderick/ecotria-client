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
    <div className="nav-header bg-white shadow-xs border-0">
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

      <nav className={`navigation scroll-bar ${navClass}`}>
        <div className="container ps-0 pe-0">
          <div className="nav-content">
            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
              <div className="nav-caption fw-600 font-xssss text-grey-500">
                <span>New </span>Feeds
              </div>
              <ul className="mb-1 top-content">
                <li className="logo d-none d-xl-block d-lg-block"></li>
                <li>
                  <Link to="/" className="nav-content-bttn open-font">
                    <i className="feather-tv btn-round-md bg-blue-gradiant me-3"></i>
                    <span>Newsfeed</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-content-bttn open-font">
                    <i className="feather-award btn-round-md bg-red-gradiant me-3"></i>
                    <span>Badges</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-content-bttn open-font">
                    <i className="feather-globe btn-round-md bg-gold-gradiant me-3"></i>
                    <span>Explore Stories</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-content-bttn open-font">
                    <i className="feather-zap btn-round-md bg-mini-gradiant me-3"></i>
                    <span>Popular Groups</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-content-bttn open-font">
                    <i className="feather-user btn-round-md bg-primary-gradiant me-3"></i>
                    <span>Author Profile </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
              <div className="nav-caption fw-600 font-xssss text-grey-500">
                <span>More </span>Pages
              </div>
              <ul className="mb-3">
                <li>
                  <Link to="/" className="nav-content-bttn open-font">
                    <i className="font-xl text-current feather-inbox me-3"></i>
                    <span>Email Box</span>
                    <span className="circle-count bg-warning mt-1">584</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-content-bttn open-font">
                    <i className="font-xl text-current feather-home me-3"></i>
                    <span>Near Hotel</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-content-bttn open-font">
                    <i className="font-xl text-current feather-map-pin me-3"></i>
                    <span>Latest Event</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-content-bttn open-font">
                    <i className="font-xl text-current feather-youtube me-3"></i>
                    <span>Live Stream</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
              <div className="nav-caption fw-600 font-xssss text-grey-500">
                <span></span> Account
              </div>
              <ul className="mb-1">
                <li className="logo d-none d-xl-block d-lg-block"></li>
                <li>
                  <Link to="/user/perfil" className="nav-content-bttn open-font h-auto pt-2 pb-2">
                    <i className="font-sm feather-settings me-3 text-grey-500"></i>
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link to="/defaultanalytics" className="nav-content-bttn open-font h-auto pt-2 pb-2">
                    <i className="font-sm feather-pie-chart me-3 text-grey-500"></i>
                    <span>Analytics</span>
                  </Link>
                </li>
                <li>
                  <Link to="/defaultmessage" className="nav-content-bttn open-font h-auto pt-2 pb-2">
                    <i className="font-sm feather-message-square me-3 text-grey-500"></i>
                    <span>Chat</span>
                    <span className="circle-count bg-warning mt-0">23</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

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
