import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";

// copy down line:       SHIFT + ALT + UP/DOWN
// format file:          SHIFT + ALT + F

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
