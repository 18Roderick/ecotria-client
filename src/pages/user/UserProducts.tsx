import { Link } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import { products } from "../../fake";

const UserProducts = () => {
  return (
    <Layout>
      <div className="container mt-2 bg-red-gradiant">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0 ps-lg-3 ms-0 me-0" style={{ maxWidth: "100%" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="chat-wrapper p-3 w-100 position-relative scroll-bar bg-white theme-dark-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProducts;
