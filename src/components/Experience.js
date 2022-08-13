import React from "react";
import "./Style/experience.css";
import academlo from "./Image/Logo/logo_academlo 51.png";
import mb from "./Image/Logo/MB.png";
import { Link } from "react-router-dom";
const Experience = () => {
  return (
    <div className="bod">
      <div className="card-experience">
        <div className="content-experience">
          <h1 id="name-detail">"Experiencia"</h1>
        </div>
        <div className="fon-experience">
          <div className="pie-experience">
            <footer className="one-experience">
              <img src={mb} className="mb" />
              <p className="p-experience">Maguey Blanco</p>
              <p className="p-experience">UI Designer 2015-2016</p>
              <p className="p-experience">1 Año</p>
              <ul className="ul-task">
                <li className="task"> - Implementar Mejoras a la Web</li>
                <li className="task"> - Actualizacion de la Web</li>
              </ul>
            </footer>
            <footer className="two"></footer>
            <footer className="three-experience">
              <img src={academlo} className="academlo" />
              <p className="p-experience">Academlo</p>
              <p className="p-experience">UI Back-end and Front-end</p>
              <p className="p-experience">Dic 2021 - Jul 2022</p>
              <ul className="ul-task">
                <li className="task"> - Consumo de Api´s</li>
                <li className="task"> - Creación de Api´s</li>
              </ul>
            </footer>
          </div>
        </div>
        <button className="bttHome">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Experience;
