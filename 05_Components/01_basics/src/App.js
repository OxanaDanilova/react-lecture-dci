import "./App.scss";
import { Button } from "react-bootstrap";
import gezwitscher from "./gezwitscher.js";
import Timeline from "./components/Timeline/Timeline";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Timeline />
      <Button>Klick mich</Button>
    </div>
  );
}

export default App;
