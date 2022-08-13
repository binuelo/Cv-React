import React from "react";
import { Link } from "react-router-dom";
import "./Style/profile.css";
import photo from "./Image/Profile.jpg";
import phone from "./Image/fon.png";
import github from "./Image/github.png";
import linkedin from "./Image/linkedin.png";
const Profile = () => {
  return (
    <div className="bod">
      <div className="card">
        <div className="content">
          <h1 id="name">Omar CB.</h1>
          <h3>Desarrollador web full stack developer</h3>
          <h3>
            <span>1 año</span> de
          </h3>
          <h3> experiencia</h3>
          <Link to="/users/masinfo">Acerca de Mi</Link>
        </div>
        <img src={photo} className="photo" />

        <div className="fon">
          <img src={phone} className="phone" />
          <h3 className="cell">7721306706</h3>
          <div className="pie">
            <footer className="one">
              <a
                href="https://github.com/binuelo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} className="github" />
              </a>
            </footer>
            <footer className="two"></footer>
            <footer className="three">
              <a
                href="https://www.linkedin.com/in/omar-corona-bi%C3%B1uelo-53b944235"
                target="_blank"
              >
                <img src={linkedin} className="linkedin" />
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
