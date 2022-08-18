import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  function searchTermChanged(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }
  useEffect(() => {
    (async function fetchData() {
      const res = await fetch("https://swapi.dev/api/people/");
      const data = await res.json();
      setCharacters(data.results);
    })();
  }, []); /// Leeres array bedeutet nut einmal ausführen beim Initialisieren der Component

  useEffect(() => {
    (async function fetchSearchResult() {
      if (searchTerm === "") return;
      const res = await fetch(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      );
      const data = await res.json();
      setCharacters(data.results);
    })();
  }, [searchTerm]);

  useEffect(() => {
    console.log("some update");
  }); /// Bei jedem Update

  useEffect(() => {
    return () => {
      console.log("component removed");
    };
  });

  return (
    <div className="App">
      <div>
        <input
          type="search"
          placeholder="Search"
          onChange={searchTermChanged}
        />
      </div>
      <ul>
        {characters.map((character, index) => {
          return <li key={index}>{character.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
