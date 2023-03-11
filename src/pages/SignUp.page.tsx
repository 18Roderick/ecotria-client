import { Fragment } from "react";
import { Link } from "react-router-dom";
import SignUp from "../features/auth/SignUp";

import logo from "../assets/images/Ecotria.png";

const SignUpPage = () => {
  return (
    <Fragment>
      <div className="main-wrap">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            <a href="/">
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                <img
                  src={logo}
                  width="70"
                  height="70"
                  className="d-inline-block align-center"
                  alt="Ecotria Logo"
                />
              </span>{" "}
            </a>
            <button className="nav-menu me-0 ms-auto"></button>

            <Link
              to="/auth/login"
              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{ backgroundImage: "url('https://picsum.photos/800/950')" }}
          ></div>
          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <SignUp />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUpPage;
