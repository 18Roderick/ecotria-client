import React, { useCallback } from "react";
import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useAuth } from "../../context/ContextAuth";
import api from "../../services";
import DragDropFile from "../DragDropFile";

interface UserProps {
  id: string;
  nombre: string;
  apellido: string;
  photoProfile?: string;
  correo: string;
  celular?: string;
}

interface FormularioProps {
  user: UserProps;
  edit: boolean;
  toggleEdit: () => void;
}

const UserSchema = z.object({
  nombre: z.string().max(15).min(2).trim(),
  apellido: z.string().max(15).min(2).trim(),
  celular: z.string().optional(),
  photoProfile: z.string().optional(),
});

type UserSchemaType = z.infer<typeof UserSchema>;

const FormularioUsuario: React.FC<FormularioProps> = ({
  edit = false,
  toggleEdit = () => {},
  user: { nombre, apellido, photoProfile, correo, id, celular },
}) => {
  const query = useQueryClient();
  const { token, user } = useAuth();
  const { mutate, reset, isLoading } = useMutation(api.user.updateUserInfo, {
    onSuccess: (data) => {
      toggleEdit();
    },
  });

  const { register, handleSubmit } = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
    defaultValues: { nombre, apellido, celular, photoProfile },
  });

  const [animationParent] = useAutoAnimate<HTMLDivElement>();

  const [cacheInfo, setCache] = useState<UserProps>({ nombre, apellido, photoProfile, correo, id });

  const onSubmit: SubmitHandler<UserSchemaType> = (data) => {
    console.log(data);
    //mutate({ token: String(token), data: cacheInfo });
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Nombre</label>
            <input type="text" className="form-control" disabled={!edit} {...register("nombre")} />
          </div>
        </div>

        <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Last Name</label>
            <input type="text" className="form-control" disabled={!edit} {...register("apellido")} />
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

        {/* <div className="col-lg-6 mb-3">
          <div className="form-group">
            <label className="mont-font fw-600 font-xsss mb-2">Celular</label>
            <input type="text" className="form-control" disabled={!edit} />
          </div>
        </div> */}
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
