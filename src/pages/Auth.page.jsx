import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SignIn from "../features/auth/SignIn";

import logo from "../assets/images/Ecotria.png";

const Login = () => {
  return (
    <Fragment>
      <div className="main-wrap container">
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
      </div>
    </Fragment>
  );
};

export default Login;
