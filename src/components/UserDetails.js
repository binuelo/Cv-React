import React from "react";
import { Link } from "react-router-dom";
import "./Style/userdetail.css";
import { useParams } from "react-router-dom";
import academlo from "./Image/Logo/logo_academlo 51.png";
import utvm from "./Image/Logo/utvm1.png";
const UserDetails = () => {
  const { id } = useParams();
  return (
    <div className="bod">
      <div className="card">
        <div className="content">
          <h1 id="name-detail">"Acerca de mi"</h1>
          <p>
            Mi nombre es Corona Biñuelo Omar y he desarrollado toda mi carrera
            dedicado al mundo de la ingeniería en sistemas. Mi primera
            experiencia la tuve en la <span>UTVM</span> posteriormente de la
            mano de <span>Academlo</span> mas enfocado al desarrollo web.
          </p>
        </div>
        <div className="fon">
          <div className="pie-user">
            <footer className="one-user">
              <img src={utvm} className="utvm" />
              <p>UTVM</p>
              <p>Octubre 2013 - Abril 2017</p>
            </footer>
            <footer className="two-user"></footer>
            <footer className="three-user">
              <img src={academlo} className="academlome" />
              <p>Academlo</p>
              <p>Diciembre 2021 - Julio 2022</p>
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

export default UserDetails;
