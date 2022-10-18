import React from "react";

//TODO: cambiar imagen de prueba por imagen proveniente de la bd
//TODO: REMOVER estrellas si el producto no cuenta con calificación

import ProductsCard from "./ProductsCard";

const ProductsList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => {
        return <ProductsCard producto={producto} key={producto._id} />;
      })}
    </>
  );
};

export default ProductsList;
