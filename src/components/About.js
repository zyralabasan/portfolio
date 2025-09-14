// components/About.js
import React from "react";
import "../css/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <img src="https://via.placeholder.com/200" alt="Profile" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am an IT student passionate about <b>Data Analytics</b>, 
            <b>UX/UI Design</b>, and <b>Graphic Design</b>.
            Skilled in ReactJS, Canva, and Python.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>ReactJS & Web Dev</li>
            <li>Python (Data Analytics)</li>
            <li>UX/UI Design</li>
            <li>Graphic Design (Canva)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
