import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextAuth";

const PerfilSettingsPage = () => {
  const { logOut } = useAuth();
  const cerrarSesion = (e) => {
    e.preventDefault();
    logOut();
  };
  return (
    <div className="p-5 bg-lightblue theme-dark-bg right-chat-active justify-content-center">
      <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left">
          <div className="middle-wrap">
            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
              <div className="card-body p-lg-5 p-4 w-100 border-0">
                <div className="row">
                  <div className="col-lg-12">
                    <h4 className="mb-4 font-xxl fw-700 mont-font mb-lg-5 mb-4 font-md-xs">Configuración</h4>
                    <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">General</div>
                    <ul className="list-inline mb-4">
                      <li className="list-inline-item d-block border-bottom me-0">
                        <Link to="/user/informacion" className="pt-2 pb-2 d-flex align-items-center">
                          <i className="fa-solid fa-user btn-round-md bg-primary text-white font-md me-3"></i>
                          {/* <i className="btn-round-md bg-primary-gradiant text-white feather-home font-md me-3"></i> */}
                          <h4 className="fw-600 font-xsss mb-0 mt-0">Datos de usuario</h4>
                          <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item d-block border-bottom me-0">
                        <Link to="/user/direcciones" className="pt-2 pb-2 d-flex align-items-center">
                          <i className="btn-round-md bg-gold-gradiant text-white feather-map-pin font-md me-3"></i>{" "}
                          <h4 className="fw-600 font-xsss mb-0 mt-0">Direcciones</h4>
                          <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </Link>
                      </li>
                    </ul>

                    <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">Cuenta</div>
                    <ul className="list-inline mb-4">
                      <li className="list-inline-item d-block border-bottom me-0">
                        <Link to="/user/tarjetas" className="pt-2 pb-2 d-flex align-items-center">
                          <i className="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md me-3"></i>{" "}
                          <h4 className="fw-600 font-xsss mb-0 mt-0">Mis Tarjetas</h4>
                          <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item d-block  me-0">
                        <Link to="/user/password-reset" className="pt-2 pb-2 d-flex align-items-center">
                          <i className="btn-round-md bg-blue-gradiant text-white feather-inbox font-md me-3"></i>{" "}
                          <h4 className="fw-600 font-xsss mb-0 mt-0">Contraseña</h4>
                          <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </Link>
                      </li>
                    </ul>

                    <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">Otros</div>
                    <ul className="list-inline">
                      <li className="list-inline-item d-block border-bottom me-0">
                        <Link to="/defaultnoti" className="pt-2 pb-2 d-flex align-items-center">
                          <i className="btn-round-md bg-gold-gradiant text-white feather-bell font-md me-3"></i>{" "}
                          <h4 className="fw-600 font-xsss mb-0 mt-0">Notificaciones</h4>
                          <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item d-block border-bottom me-0">
                        <a href="/helpbox" className="pt-2 pb-2 d-flex align-items-center">
                          <i className="btn-round-md bg-primary-gradiant text-white feather-help-circle font-md me-3"></i>{" "}
                          <h4 className="fw-600 font-xsss mb-0 mt-0">Ayuda</h4>
                          <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </a>
                      </li>
                      <li className="list-inline-item d-block me-0">
                        <Link to="#" onClick={cerrarSesion} className="pt-2 pb-2 d-flex align-items-center">
                          <i className="btn-round-md bg-red-gradiant text-white feather-lock font-md me-3"></i>{" "}
                          <h4 className="fw-600 font-xsss mb-0 mt-0">Cerrar Sesión</h4>
                          <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilSettingsPage;
