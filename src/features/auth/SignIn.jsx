import React from "react";

const SignIn = () => {
  const rememberId = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
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
  );
};

export default SignIn;
