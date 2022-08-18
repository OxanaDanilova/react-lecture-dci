import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation items={["Home", "Products"]} />
    </div>
  );
}

export default App;
