import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
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
  );
};

export default SideBar;
