import React from "react";
import { Spinner as Loader } from "react-bootstrap";

const Spinner = ({ show = false }) => {
  return <> {show ? <Loader as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> : ""}</>;
};

export default Spinner;
