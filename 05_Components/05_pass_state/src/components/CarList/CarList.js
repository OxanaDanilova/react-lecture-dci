import React from "react";

export default function CarList(props) {
  return (
    <div>
      <ul>
        {props.cars.map((car, i) => (
          <li key={i}>{car}</li>
        ))}
      </ul>
    </div>
  );
}
