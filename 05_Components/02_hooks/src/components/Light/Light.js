import React from "react";
import "./Light.scss";

function Light(props) {
  return <p className={`light ${props.luminosity}`}></p>;
}
export default Light;
