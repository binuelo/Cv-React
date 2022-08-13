import logo from "./logo.svg";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingScreen from "./components/LoadingScreen";
import Skills from "./components/skills";
import "./styles/Style.css";
import Proyectos from "./components/Proyectos";
import Valores from "./components/Valores";
import Profile from "./components/Profile";
import UserDetails from "./components/UserDetails";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <header className="bg_animate">
          <div className="header_nav">
            <div className="contenedorapp">
              <div className="menu">
                <nav className="nave">
                  <img src={logo} className="App-logo" />
                  <ul>
                    <li>
                      <Link to="/">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/experience">Experiencia</Link>
                    </li>
                    <li>
                      <Link to="/skills">Habilidades</Link>
                    </li>
                    <li>
                      <Link to="/value">Valores</Link>
                    </li>
                    <li>
                      <Link to="/projects">Proyectos</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="contenido">
                <Routes>
                  <Route path="/" element={<Profile />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Proyectos />} />
                  <Route path="/users/:id" element={<UserDetails />} />
                  <Route path="/value" element={<Valores />} />
                </Routes>
              </div>
            </div>
          </div>
        </header>
      </HashRouter>
      <div className="burbujas">
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
      </div>
    </div>
  );
}

export default App;
