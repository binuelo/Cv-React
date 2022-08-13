import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Style/Valores.css";

const Valores = () => {
  return (
    <div className="bod">
      <div className="card-Valores">
        <div className="encabezado">
          <h1 id="name-skill">"Valores"</h1>
        </div>
        <main>
          <article>Compromiso.</article>
          <article>Responsabilidad.</article>
          <article>Implicación.</article>
          <article>Actitud positiva.</article>
          <article>Proactividad</article>
          <article>Adaptabilidad</article>
          <article>Interés.</article>
          <article>Sinceridad.</article>
          <article>Empatía.</article>
          <div className="burbujas2">
            <div className="burbuja2"></div>
            <div className="burbuja2"></div>
            <div className="burbuja2"></div>
            <div className="burbuja2"></div>
            <div className="burbuja2"></div>
          </div>
        </main>
        <div>
          <h1 className="frase">‘Si la empresa gana, ganamos todos’.</h1>
        </div>

        <button className="bttHome">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Valores;
