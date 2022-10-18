import React from "react";
import { Link } from "react-router-dom";

//formular para convertir el resultado a una base de 5
const calcularPorcentaje = (parcial, total) => {
  const resultado = ((((parcial * 100) / total) * 5) / 100).toFixed(2);
  return isNaN(resultado) ? null : resultado;
};

const ProductsCard = ({ producto }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 mb-3 pe-2 ps-2">
      <div className="card w-100 p-0 hover-card shadow-xss border-0 rounded-3 overflow-hidden me-1">
        {producto.feature ? (
          <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white position-absolute mt-3 ms-3 z-index-1">
            Featured
          </span>
        ) : (
          ""
        )}
        <div className="card-image w-100 mb-3">
          <Link to={`/productos/${producto._id}`} className="position-relative d-block">
            <img
              loading="lazy"
              src={producto?.Images?.length ? producto?.Images[0] : "https://picsum.photos/385/300"}
              alt={producto.titlePost}
              className="w-100"
            />
          </Link>
        </div>
        <div className="card-body pt-0">
          <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
          <h4 className="fw-700 font-xss mt-0 lh-28 mb-0">
            <a href="default-hotel-details.html" className="text-dark text-grey-900">
              {producto.titlePost}
            </a>
          </h4>
          <h6 className="font-xsssss text-grey-500 fw-600 mt-0 mb-1"> {producto?.descriptionPost}</h6>
          <div className="star d-block w-100 text-left mt-0">
            <i className="fa-solid fa-star text-bg-danger"></i>
            <i className="fa-solid fa-star-half"></i>
            {calcularPorcentaje(producto.claps, producto.no_claps) ?? ""}
          </div>
          <div className="mt-4 w-100"></div>
          <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2">
            <i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i> 200 sq
          </h5>
          <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500 me-2">
            <i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i> WiFi
          </h5>
          <h5 className="mt-3 d-inline-block font-xssss fw-600 text-grey-500">
            <i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i> Card
          </h5>
          <div className="clearfix"></div>
          <span className="font-lg fw-700 mt-0 pe-3 ls-2 lh-32 d-inline-block text-success float-left">
            <span className="font-xs">$</span> {producto.price}
          </span>
          <Link to={`/productos/${producto._id}`} className="position-absolute bottom-15 mb-2 right-15">
            <i className="btn-round-sm bg-primary text-white font-sm fa-solid fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
