import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useQuery } from "@tanstack/react-query";
import ProgressLoader from "../components/Loading/ProgressLoader";

import { useAuth } from "../context/ContextAuth";

import api from "../services";
import ProductsCard from "../components/Products/ProductsCard";
import { ProductDetail } from "../models/Product";

const Productos = () => {
  const [animateParent] = useAutoAnimate<HTMLDivElement>();
  const { token } = useAuth();
  const { data, isLoading, isFetching } = useQuery(
    ["productos"],
    ({ signal }) => api.productos.getProductsByPage({ signal, token }),
    {
      onError: () => {},
      initialData: { data: [] },
    }
  );
  return (
    <>
      <ProgressLoader show={isLoading || isFetching} progress={100} />
      <div className="container  mt-5">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0" style={{ maxWidth: "100%" }}>
            <div className="row">
              <div className="col-xl-12 chat-left scroll-bar">
                <div className="row ps-2 pe-2" ref={animateParent}>
                  {data?.data.map((producto: ProductDetail) => {
                    return <ProductsCard product={producto} key={producto._id} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productos;
