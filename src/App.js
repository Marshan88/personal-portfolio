import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// copy down line:       SHIFT + ALT + UP/DOWN
// format file:          SHIFT + ALT + F

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;