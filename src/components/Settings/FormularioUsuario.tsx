import React, { useCallback } from "react";
import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useAuth } from "../../context/ContextAuth";
import api from "../../services";
import DragDropFile from "../DragDropFile";

interface UserProps {
  id: string;
  nombre: string;
  apellido: string;
  photoProfile?: string;
  correo: string;
}

interface FormularioProps {
  user: UserProps;
  edit: boolean;
  toggleEdit: () => void;
}

const FormularioUsuario: React.FC<FormularioProps> = ({
  edit = false,
  toggleEdit = () => {},
  user: { nombre, apellido, photoProfile, correo, id },
}) => {
  const query = useQueryClient();
  const { token, user } = useAuth();
  const { mutate, reset, isLoading } = useMutation(api.user.updateUserInfo, {
    onSuccess: (data) => {
      toggleEdit();
    },
  });

  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  const [cacheInfo, setCache] = useState<UserProps>({ nombre, apellido, photoProfile, correo, id });

  const handleSubmit = (e: React.SyntheticEvent) => {
    mutate({ token: String(token), data: cacheInfo });
    e.preventDefault();
  };

  const handleChange = (key: string) => (e: React.SyntheticEvent) => {
    const { target } = e;
    setCache({ ...cacheInfo, [key]: (target as HTMLInputElement).value });
  };

  const resetForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCache({ nombre, apellido, photoProfile, correo, id });
    query.invalidateQueries(["userInfo"]);
    toggleEdit();
    reset();
  };

  const onDropMain = useCallback((files: File[]) => {
    const asyncWrapper = async () => {
      try {
        console.log(files);
      } catch (error) {
        console.log(error);
      }
    };

    asyncWrapper();
  }, []);

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
        {edit ? <DragDropFile onDropEvent={onDropMain} /> : null}

        <div className="col-lg-12 justify-content-between">
          <div className="d-flex justify-content-between">
            {edit ? (
              <>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  Guardar
                </button>
                <button className="btn btn-primary" onClick={resetForm} disabled={isLoading}>
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
