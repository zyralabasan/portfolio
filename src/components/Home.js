import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home({ name }) {
  return (
    <div className="home">
      {/* Left Section - Text */}
      <div className="home-left">
        <p className="intro-text">Hi, I am</p>
        <h1 className="home-name">{name}</h1>
        <h2 className="home-role">
          Aspiring Data Analyst | UX Designer | Graphic Designer
        </h2>
        <p className="home-description">
          Reliable and detail-oriented IT student with experience in designing,
          developing, and managing projects. Skilled in data analytics, UX/UI,
          and creative solutions with the ability to adapt and grow in dynamic
          environments.
        </p>

        {/* Buttons */}
        <div className="home-buttons">
          <a href="/resume.pdf" className="btn primary" download>
            Download CV
          </a>
          <a href="/Projects" className="btn secondary">
            View Projects
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="home-right">
        <div className="profile-container">
          <img
            src="/images/profile.png" // replace with your real photo
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
