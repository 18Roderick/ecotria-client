import React from "react";
import { Table, Container, Button, Row, Col } from "react-bootstrap";

import Pagetitle from "../../components/Pagetitle";

const tableHeaders = ["id", "Titulo", "Precio", "Acciones"];

const products = [
  {
    id: 1,
    title: "ProductsCard",
    precio: 25.1,
  },
  {
    id: 2,
    title: "Product 2",
    precio: 25.2,
  },
];

const TableHeaders = () => (
  <thead>
    <tr>
      {tableHeaders.map((value, index) => (
        <th key={index}>{value}</th>
      ))}
    </tr>
  </thead>
);

const TableActions = () => {
  return (
    <Row className="g-1">
      <Col xs={2} className="g-1">
        <Button type="sm" variant="primary">
          <i className="fa-solid fa-pen"></i>
        </Button>
      </Col>
      <Col xs={2} className="g-1">
        <Button type="sm" variant="danger">
          <i className="fa-solid fa-trash-can"></i>
        </Button>
      </Col>
    </Row>
  );
};

const UserProducts = () => {
  return (
    <Container className="mt-2">
      <Pagetitle title="Productos" />
      <Table striped bordered className="rounded">
        <TableHeaders />
        <tbody>
          {products.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.precio}</td>
              <td>
                <TableActions />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserProducts;
