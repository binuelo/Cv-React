import React from "react";
import { Link } from "react-router-dom";
import "./Style/skills.css";

const Skills = () => {
  return (
    <div className="bod">
      <div className="card-skill">
        <div className="encabezado">
          <h1 id="name-skill">"Habilidades"</h1>
        </div>
        <main>
          <article>
            <label for="file">Node Js:</label>
            <progress id="file" max="100" value="75"></progress>
          </article>
          <article>
            <label for="file">{"    "}React:</label>
            <progress id="file" max="100" value="75"></progress>
          </article>
          <article>
            <label for="file">Node Js:</label>
            <progress id="file" max="100" value="75"></progress>
          </article>
          <article>
            <label for="file">HTML5:{"  "}</label>
            <progress id="file" max="100" value="75"></progress>
          </article>
          <article>
            <label for="file">CSS:{"    "}</label>
            <progress id="file" max="100" value="75"></progress>
          </article>
          <article>
            <label for="file">BD:</label>
            <progress id="file" max="100" value="40"></progress>
          </article>
          <article>
            <label for="file">Office:</label>
            <progress id="file" max="100" value="80"></progress>
          </article>
          <article>
            <label for="file">Java:</label>
            <progress id="file" max="100" value="35"></progress>
          </article>
        </main>

        <button className="bttHome">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Skills;
