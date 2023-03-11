import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "@tanstack/react-query";

import Postview from "../components/Postview";
import Load from "../components/Load";

import { useAuth } from "../context/ContextAuth";

import api from "../services";

const Home = () => {
  const { token } = useAuth();
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["productos"],
    ({ signal, pageParam = 1 }) => api.productos.getProductsByPage({ signal, token, page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page === lastPage.total || !lastPage.data) return false;
        return lastPage.page + 1;
      },
    }
  );

  const products = data?.pages.reduce((prevProducts, page) => prevProducts.concat(page.data), []) ?? [];

  return (
    <div className="main-content right-chat-active">
      <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left">
          <div className="row feed-body">
            <div className="col-xl-8 col-xxl-9 col-lg-8">
              <InfiniteScroll
                pageStart={1}
                loadMore={() => fetchNextPage()}
                hasMore={hasNextPage || isLoading}
                loader={<Load />}
              >
                {products.length > 0 ? (
                  products.map((producto) => (
                    <Postview
                      key={producto._id}
                      id={producto._id}
                      postvideo=""
                      postimage={producto.Image?.length ? producto.Image[0] : "https://picsum.photos/800/450"}
                      avatar={producto.Image?.length ? producto.Image[0] : "https://picsum.photos/100/100"}
                      title={producto.titlePost}
                      time={producto.createDate}
                      description={producto.descriptionPost}
                    />
                  ))
                ) : (
                  <div></div>
                )}
              </InfiniteScroll>
            </div>
            {/* <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
              <Friends />
              <Contacts />
              <Group />
              <Events />
              <Profilephoto />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
