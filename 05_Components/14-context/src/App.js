import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";

export const productsContext = React.createContext(null);

function App() {
  const [products, setProducts] = useState([
    { title: "iPhone", price: 500, like: false },
  ]);
  function updateLike(id) {
    setProducts([{ ...products[0], like: true }]);
  }

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="App">
      <productsContext.Provider value={{ products, updateLike }}>
        <Product />
      </productsContext.Provider>
    </div>
  );
}

export default App;
