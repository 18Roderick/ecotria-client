import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/ContextAuth";

import api from "../services";
import ProductsList from "../components/Products/ProductsList";

const Productos = () => {
  const { token } = useAuth();
  const { data, isLoading, isFetching } = useQuery(
    ["productos"],
    () => api.productos.getProductsByPage({ token }),
    {
      onError: () => {},
    }
  );
  return (
    <div className="container  mt-5">
      <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left pe-0" style={{ maxWidth: "100%" }}>
          <div className="row">
            <div className="col-xl-12 chat-left scroll-bar">
              {/* <Pagetitle title="Hotels" /> */}
              <div className="row ps-2 pe-2">
                {isLoading || isFetching ? "Loading..." : <ProductsList productos={data?.data} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
