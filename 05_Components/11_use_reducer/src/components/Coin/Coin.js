import "./Coin.css";
import React from "react";

export default function Coin(props) {
  console.log(props);
  return (
    <div>
      <h4>Coin name</h4>
      <h3>{props.name}</h3>
      <h4>Price</h4>
      <h1>{`${props.price} EUR`}</h1>
    </div>
  );
}
