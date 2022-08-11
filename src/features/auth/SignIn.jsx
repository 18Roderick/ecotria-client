import { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

import Alert from "react-bootstrap/Alert";

import { useAuth } from "../../context/ContextAuth";

import * as api from "../../services";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useAuth();

  const { mutate, isError, reset, error } = useMutation(api.auth.signIn, {
    onSuccess: (response) => {
      const data = response.data;
      if (data?.token) {
        setAuth(data.token);
      }
      console.log(data);
    },
  });

  const handleSubmit = (e) => {
    mutate({ correo: email, contrasena: password });
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      {isError ? (
        <Alert variant="warning" onClose={() => reset()} dismissible>
          {error?.message}
        </Alert>
      ) : null}
      <div className="form-group icon-input mb-3">
        <i className="font-sm ti-email text-grey-500 pe-0"></i>

        <input
          type="text"
          className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
          placeholder="Tu correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group icon-input mb-1">
        <input
          type="Password"
          className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
      </div>
      <div className="form-check text-left mb-3">
        <label className="form-check-label font-xsss text-grey-500" htmlFor="rememberme">
          <input type="checkbox" className="form-check-input mt-2" id="rememberme" />
          Recordarme
        </label>
        <a href="/forgot" className="fw-600 font-xsss text-grey-700 mt-1 float-right">
          Olvidaste tu contraseña?
        </a>
      </div>
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
          <Link to="/auth/register" className="fw-700 ms-1">
            Registrarme
          </Link>
        </h6>
      </div>
    </form>
  );
};

export default SignIn;
