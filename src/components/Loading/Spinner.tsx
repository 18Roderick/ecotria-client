import React, { FC } from "react";
import { Spinner as Loader } from "react-bootstrap";

interface SpinnerProps {
  show: boolean;
}
const Spinner: FC<SpinnerProps> = ({ show = false }) => {
  return <> {show ? <Loader as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> : ""}</>;
};

export default Spinner;
