import React from "react";
import { ProgressBar } from "react-bootstrap";

const sizes = {
  sm: {
    height: "4.5px",
  },
  lg: {
    height: "10px",
  },
};

const ProgressLoader = ({ show, progress, size = "sm" }) => {
  const styleSize = sizes[size];
  return <>{show ? <ProgressBar animated now={progress} style={styleSize} /> : ""}</>;
};

export default ProgressLoader;
