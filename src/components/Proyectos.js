import React from "react";
import { Link } from "react-router-dom";
import "./Style/Proyecto.css";
import CRUD from "./Image/CRUD.png";
import POKEAPI from "./Image/PokeApi.png";
const Proyectos = () => {
  return (
    <div className="bod">
      <div className="card-skill">
        <div className="encabezado">
          <h1 id="name-skill">"Proyectos"</h1>
        </div>
        <main>
          <article>
            <label for="file">CRUD</label>

            <a
              href="https://github.com/binuelo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CRUD} className="CRUD" />
            </a>
          </article>
          <article>
            <label for="file">Poke Api</label>

            <a
              href="https://github.com/binuelo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={POKEAPI} className="CRUD" />
            </a>
          </article>
        </main>

        <button className="bttHome">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Proyectos;
