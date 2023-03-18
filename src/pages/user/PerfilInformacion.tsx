import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

import FormularioUsuario from "../../components/Settings/FormularioUsuario";
import { useAuth } from "../../context/ContextAuth";

import api from "../../services";
import { useCallback } from "react";
import { User } from "../../types";
import Layout from "../../components/Layouts/Layout";

//TODO add api call to user information
const PerfilInformacion = () => {
  const { token } = useAuth();
  // console.log("PerfilInformacion", token);
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(!edit);

  const { data, isLoading } = useQuery<User>({
    queryKey: ["userInfo"],
    queryFn: ({ signal }) => api.user.getUserInfo({ signal, token: String(token) }),
  });
  return (
    <Layout>
      <div className="  theme-dark-bg right-chat-active my-5">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="middle-wrap">
              <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3 justify-content-between">
                  <Link to="/user/perfil" className="d-inline-block mt-2">
                    <i className="ti-arrow-left font-sm "></i>
                  </Link>
                  <h4 className="font-xs  fw-600 ms-4 mb-0 mt-2">Detalles de usuario</h4>
                  <button
                    className="float-right btn btn-primary"
                    onClick={() => {
                      setEdit((edit) => !edit);
                    }}
                  >
                    Edit
                  </button>
                </div>
                <div className="card-body p-lg-5 p-4 w-100 border-0 shadow-md ">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 text-center">
                      <figure className="avatar ms-auto me-auto mb-0 mt-2 w100">
                        {isLoading ? (
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        ) : data?.photoProfile ? (
                          <img src={data?.photoProfile} alt="perfil" className="shadow-sm rounded-3 w-100" />
                        ) : (
                          <FaUser />
                        )}
                      </figure>
                      <h2 className="fw-700 font-sm text-grey-900 mt-3">{`${data?.nombre} ${data?.apellido}`}</h2>
                      <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4"></h4>
                    </div>
                  </div>
                  {data?.nombre && !isLoading ? (
                    <FormularioUsuario
                      edit={edit}
                      user={{
                        nombre: data.nombre,
                        apellido: data.apellido,
                        photoProfile: data.photoProfile,
                        correo: data.correo,
                        id: data._id,
                      }}
                      toggleEdit={toggleEdit}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PerfilInformacion;
