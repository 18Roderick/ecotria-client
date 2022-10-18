import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//TODO Mejorar pagina no encontrada
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="main-content pt-0 bg-white ps-0 pe-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 text-center default-page vh-100 align-items-center d-flex">
            <div className="card border-0 text-center d-block p-0">
              <img
                src="https://via.placeholder.com/300x300.png"
                alt="icon"
                className="w200 mb-4 ms-auto me-auto pt-md-5"
              />
              <h1 className="fw-700 text-grey-900 display3-size display4-md-size">
                Parece que te has perdido
              </h1>
              <p className="text-grey-500 font-xsss">La Pagina que buscas no esta disponible</p>
              <Button
                onClick={() => {
                  navigate(-1);
                }}
              >
                Regresar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
