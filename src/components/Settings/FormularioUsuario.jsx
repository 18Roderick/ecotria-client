import React from "react";
import { useRef, useState } from "react";

const FormularioUsuario = ({ edit = false, user: { nombre, apellido, photoProfile, ...data } = {} }) => {
  const [cacheInfo, setCache] = useState({ nombre, apellido, photoProfile });
  const formRef = useRef();

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
  };

  const handleChange = (key) => (e) => setCache({ ...cacheInfo, [key]: e.target.value });

  const resetForm = () => {
    setCache({ nombre, apellido, photoProfile });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
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
            <input type="text" className="form-control" disabled={!edit} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Email</label>
            <input type="text" className="form-control" disabled />
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Phone</label>
            <input type="text" className="form-control" disabled={!edit} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Country</label>
            <input type="text" className="form-control" disabled={!edit} />
          </div>
        </div>

        <div className="col-lg-12 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Address</label>
            <input type="text" className="form-control" disabled={!edit} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Twon / City</label>
            <input type="text" className="form-control" disabled={!edit} />
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Postcode</label>
            <input type="text" className="form-control" disabled={!edit} />
          </div>
        </div>

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

        <div className="col-lg-12 mb-3">
          <label className="mont-font fw-600 font-xsss mb-2 text-dark">Description</label>
          <textarea
            className="form-control mb-0 p-3 h100 bg-greylight lh-16"
            rows="5"
            placeholder="Write your message..."
            disabled={!edit}
          ></textarea>
        </div>

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
