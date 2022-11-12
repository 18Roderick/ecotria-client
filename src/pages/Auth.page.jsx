import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SignIn from "../features/auth/SignIn";

import logo from "../assets/images/Ecotria.png";

const Login = () => {
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

            <a
              href="/auth/login"
              className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
            >
              Login
            </a>
            <a
              href="/auth/register"
              className="header-btn d-none d-lg-block bg-primary fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
            >
              Registrarse
            </a>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{ backgroundImage: "url('https://picsum.photos/800/950')" }}
          ></div>
          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-3 text-center">Iniciar Sesión</h2>
                <SignIn />

                <div className="col-sm-12 p-0 text-left">
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    Ya tienes cuenta?
                    <Link to="/auth/register" className="fw-700 ms-1">
                      Registrarme
                    </Link>
                  </h6>
                </div>
                {/* <div className="col-sm-12 p-0 text-center mt-2">
                  <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">
                    Or, Sign in with your social account{" "}
                  </h6>
                  <div className="form-group mb-1">
                    <a
                      href="/register"
                      className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
                    >
                      <img src="assets/images/icon-1.png" alt="icon" className="ms-2 w40 mb-1 me-5" /> Sign in
                      with Google
                    </a>
                  </div>
                  <div className="form-group mb-1">
                    <a
                      href="/register"
                      className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "
                    >
                      <img src="assets/images/icon-3.png" alt="icon" className="ms-2 w40 mb-1 me-5" /> Sign in
                      with Facebook
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="main-wrap container">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top mt-3 w-100 d-flex justify-content-center">
            <div className="    ">
              <Link to="/" className="d-flex justify-content-center">
                <img src={logo} width="100" height="100" alt="Ecotria Logo" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-3 text-center">Iniciar Sesión</h2>
                <SignIn />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Login;
