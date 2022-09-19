import React from "react";
import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useAuth } from "../../context/ContextAuth";
import api from "../../services";

const defaultData = {
  nombre: "",
  apellido: "",
  photoProfile: "",
  correo: "",
};

const FormularioUsuario = ({
  edit = false,
  toggleEdit = () => {},
  user: { nombre, apellido, photoProfile, correo } = defaultData,
}) => {
  const query = useQueryClient();
  const { token } = useAuth();
  const { mutate, reset } = useMutation(api.user.updateUserInfo, {});

  const [animationParent] = useAutoAnimate();

  const [cacheInfo, setCache] = useState({ nombre, apellido, photoProfile });

  const handleSubmit = (e) => {
    mutate({ token, data: cacheInfo });
    e.preventDefault();
  };

  const handleChange = (key) => (e) => setCache({ ...cacheInfo, [key]: e.target.value });

  const resetForm = (e) => {
    e.preventDefault();
    setCache({ nombre, apellido, photoProfile });
    query.invalidateQueries(["userInfo"]);
    toggleEdit();
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Nombre</label>
            <input
              type="text"
              className="form-control"
              disabled={!edit}
              name="nombre"
              value={cacheInfo.nombre}
              autoComplete="off"
              onChange={handleChange("nombre")}
            />
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Last Name</label>
            <input
              type="text"
              className="form-control"
              disabled={!edit}
              name="apellido"
              value={cacheInfo.apellido}
              autoComplete="off"
              onChange={handleChange("apellido")}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Correo</label>
            <input type="text" className="form-control" disabled value={correo} />
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Celular</label>
            <input type="text" className="form-control" disabled={!edit} />
          </div>
        </div>
      </div>

      <div className="row" ref={animationParent}>
        {edit ? (
          <div className="col-lg-12 mb-3">
            <div className="card mt-3 border-0">
              <div className="card-body d-flex justify-content-between align-items-end p-0">
                <div className="form-group mb-0 w-100">
                  <input type="file" name="file" id="file" className="input-file" disabled={!edit} />
                  <label
                    htmlFor="file"
                    className="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
                  >
                    <i className="ti-cloud-down large-icon me-3 d-block"></i>
                    <span className="js-fileName">Drag and drop or click to replace</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="col-lg-12 justify-content-between">
          <div className="d-flex justify-content-between">
            {edit ? (
              <>
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
                <button className="btn btn-primary" onClick={resetForm}>
                  Cancelar
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormularioUsuario;
