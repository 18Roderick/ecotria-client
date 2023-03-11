import { ProductDetail } from "../../models/Product";

//TODO: cambiar imagen de prueba por imagen proveniente de la bd
//TODO: REMOVER estrellas si el producto no cuenta con calificación

import ProductsCard from "./ProductsCard";

const ProductsList = ({ products }: { products: ProductDetail[] }) => {
  return (
    <>
      {products.map((producto: ProductDetail) => {
        return <ProductsCard product={producto} key={producto._id} />;
      })}
    </>
  );
};

export default ProductsList;
