import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import Alert from "react-bootstrap/Alert";
import { Spinner } from "../../components/Loading";
import { getStorage, deleteItem, setStorage } from "../../utils";

import { useAuth } from "../../context/ContextAuth";

import api from "../../services";

const USER_EMAIL = "USER_EMAIL";
const USER_PASS = "USER_PASS";

const getItems = () => {
  return {
    email: getStorage(USER_EMAIL) || "",
    password: getStorage(USER_PASS) || "",
    isSave: getStorage(USER_EMAIL) && getStorage(USER_PASS) ? true : false,
  };
};

const removeItems = () => {
  deleteItem(USER_EMAIL);
  deleteItem(USER_PASS);
};

const saveItems = (email, password) => {
  setStorage(USER_EMAIL, email);
  setStorage(USER_PASS, password);
};

const SignIn = () => {
  const [email, setEmail] = useState(getItems().email);
  const [password, setPassword] = useState(getItems().password);
  const [remember, setRememberMe] = useState(getItems().isSave);

  const navigation = useNavigate();
  const { setAuth } = useAuth();

  const { mutate, isError, reset, error, isLoading } = useMutation(api.auth.signIn, {
    onSuccess: (data) => {
      if (data?.token) {
        setAuth(data.token);
        if (remember) saveItems(email, password);
        if (!remember) removeItems();
        navigation("/");
      }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group icon-input mb-1">
        <input
          type="Password"
          className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
      </div>
      <div className="form-check text-left mb-3">
        <label className="form-check-label font-xsss text-grey-500" htmlFor="rememberme">
          <input
            type="checkbox"
            className="form-check-input mt-2"
            id="rememberme"
            checked={remember}
            onChange={() => setRememberMe(!remember)}
          />
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
            <Spinner show={isLoading} />
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
