import React, { FC } from "react";
import { ProgressBar } from "react-bootstrap";

type Custom = {
  [key: string]: React.CSSProperties;
  sm: React.CSSProperties;
  lg: React.CSSProperties;
};

const sizes: Custom = {
  sm: {
    height: "4.5px",
  },
  lg: {
    height: "10px",
  },
};

interface ProgressLoaderProps {
  show: boolean;
  size?: string;
  progress: number;
}

const ProgressLoader: FC<ProgressLoaderProps> = ({ show, progress, size = "sm" }) => {
  const styleSize = sizes[size];
  return <>{show ? <ProgressBar animated now={progress} style={styleSize} /> : ""}</>;
};

export default ProgressLoader;
