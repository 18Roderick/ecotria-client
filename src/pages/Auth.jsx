import React, { Fragment, useId } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const rememberId = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <Fragment>
      <div className="main-wrap">
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
                <form onSubmit={handleSubmit}>
                  <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-grey-500 pe-0"></i>
                    <input
                      type="text"
                      className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                      placeholder="Tu correo electrónico"
                    />
                  </div>
                  <div className="form-group icon-input mb-1">
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Contraseña"
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                  </div>
                  <div className="form-check text-left mb-3">
                    <input type="checkbox" className="form-check-input mt-2" id={rememberId} />
                    <label className="form-check-label font-xsss text-grey-500" htmlFor={rememberId}>
                      Recordarme
                    </label>
                    <a href="/forgot" className="fw-600 font-xsss text-grey-700 mt-1 float-right">
                      Olvidaste tu contraseña?
                    </a>
                  </div>
                </form>

                <div className="col-sm-12 p-0 text-left">
                  <div className="form-group mb-1">
                    <button
                      href="/login"
                      type="submit"
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                    >
                      Login
                    </button>
                  </div>
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    Ya tienes cuenta?
                    <a href="/register" className="fw-700 ms-1">
                      Registrarme
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
