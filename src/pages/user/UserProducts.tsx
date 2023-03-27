import { Link } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import TableProduct from "../../components/Tables/Productos";
import { FaPlus } from "react-icons/fa";
import { products } from "../../fake";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const UserProducts = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout>
      <div className="container mt-2 bg-red-gradiant">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0 ps-lg-3 ms-0 me-0" style={{ maxWidth: "100%" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="chat-wrapper p-3 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                  <div className="d-flex flex-row-reverse border-md shadow-sm p-2">
                    <div className="">
                      <Link className="btn btn-primary" to={"/products/edit"}>
                        <FaPlus color="#fff" />
                      </Link>
                    </div>
                  </div>
                  <TableProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProducts;
