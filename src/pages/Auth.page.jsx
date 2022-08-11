import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SignIn from "../features/auth/SignIn";

const Login = () => {
  return (
    <Fragment>
      <div className="main-wrap container">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            <Link to="/">
              <i className="feather-zap text-success display1-size me-2 ms-0"></i>
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                Ecotria
              </span>
            </Link>

            <button className="nav-menu me-0 ms-auto"></button>
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
      </div>
    </Fragment>
  );
};

export default Login;
