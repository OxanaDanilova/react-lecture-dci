import { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Vacuum from "./components/Vacuum";
import Pay from "./components/Pay";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("user");
  return (
    <div className="App">
      <Router>
        <header className="App-header"></header>
        <main>
          <Routes>
            <Route path="/products/vacuum" element={<Vacuum user={user} />} />
            <Route path="/cart/pay" element={<Pay />} />
            <Route path="/user/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
