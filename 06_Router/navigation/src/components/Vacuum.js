import React from "react";
import { useNavigate } from "react-router-dom";

export default function Vacuum({ user }) {
  const navigate = useNavigate();
  function buy() {
    user ? navigate("/cart/pay") : navigate("/user/login");
  }
  return (
    <div>
      <h1>Vacuum</h1>
      <button onClick={buy}>Buy</button>
    </div>
  );
}
