import React, { useState } from "react";
import "./App.css";
import CarList from "./components/CarList/CarList";

function App() {
  const [cars, setCars] = useState(["Audi", "Porsche", "VW"]);

  function handleTesleClick() {
    setCars([...cars, "Tesla"]);
  }
  return (
    <div className="App">
      <CarList cars={cars} />
      <button onClick={handleTesleClick}>Add Tesla</button>
    </div>
  );
}

export default App;
