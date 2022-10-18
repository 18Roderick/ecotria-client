import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/ContextAuth";

const listGenerales = [
  {
    href: "/user/informacion",
    bg: "bg-primary",
    icon: "fa-solid fa-user",
    title: "Datos de usuario",
  },
  {
    href: "/user/direcciones",
    bg: "bg-gold-gradiant",
    icon: "feather-map-pin",
    title: "Datos de usuario",
  },
];

const SectionItem = ({ title = "", items = [] }) => {
  return (
    <div>
      <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">{title}</div>
      <ul className="list-inline mb-4">
        {items.map((item, key) => (
          <li className="list-inline-item d-block border-bottom me-0" key={key}>
            <Link to={item?.href} className="pt-2 pb-2 d-flex align-items-center">
              <i className={`${item?.icon} btn-round-md ${item?.bg} text-white font-md me-3`}></i>
              <h4 className="fw-600 font-xsss mb-0 mt-0">{item?.title}</h4>
              <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
                    <SectionItem title="General" items={listGenerales} />

                    <div className="nav-caption fw-600 font-xsss text-grey-500 mb-2">Cuenta</div>
                    <ul className="list-inline mb-4">
                      <li className="list-inline-item d-block  me-0">
                        <Link to="/user/productos" className="pt-2 pb-2 d-flex align-items-center">
                          <i className="btn-round-md bg-blue-gradiant text-white feather-inbox font-md me-3"></i>{" "}
                          <h4 className="fw-600 font-xsss mb-0 mt-0">Mis Productos</h4>
                          <i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item d-block border-bottom me-0">
                        <Link to="/user/tarjetas" className="pt-2 pb-2 d-flex align-items-center">
                          <i className="btn-round-md bg-mini-gradiant text-white feather-credit-card font-md me-3"></i>
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
