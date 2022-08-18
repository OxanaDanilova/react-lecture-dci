import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [nasaPic, setNasaPic] = useState("");

  const clickHandler = () => {
    setState(state + 1);
    console.log(state);
  };
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.url);
        setNasaPic(data.url);
      });
  }, []);

  console.log("vor dem return");
  return (
    <div className="App">
      <h1>Hallo, Welt!</h1>
      <button onClick={clickHandler}>Klick mich!</button>
      <img src={nasaPic} alt="Nasa-Pic" />
    </div>
  );
}

export default App;
