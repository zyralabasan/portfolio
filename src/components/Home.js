import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home({ name }) {
  // A single array for the skill data
  const skills = [
    { src: "/icons/palette.svg", title: "Graphic Design", desc: "Creating visually stunning designs that communicate effectively and engage audiences." },
    { src: "/icons/bar.svg", title: "Data Analysis", desc: "Turning data into meaningful insights through visualization and analysis." },
    { src: "/icons/code.svg", title: "Web Development", desc: "Building responsive and interactive web applications." },
    { src: "/icons/lightbulb.svg", title: "Creative Solutions", desc: "Combining creativity with analytical thinking to solve complex problems." },
  ];
  
  // Home Section
  return (
    <div className="home-container page-transition">
      <section className="home-section">
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
          <div className="home-buttons">
            <a href="/resume.pdf" className="btn primary" download>
              Download CV
            </a>
            <Link to="/Projects" className="btn secondary">
              View Projects
            </Link>
          </div>
        </div>

        <div className="home-right">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </section>

      // Skills Section
      <section className="skills-section">
        <div className="section-header">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">Bridging the gap between creative design and data-driven insights</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-card" key={i}>
              <img src={skill.src} alt={skill.title} className="icon-img" />
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      // CTA Section
      <section className="cta-section">
        <h2 className="section-title2">Ready to Create Something Amazing?</h2>
        <p className="section-subtitle2">
          Let's collaborate on your next project. Whether it's stunning visuals or insightful data analysis,
          I'm here to bring your ideas to life.
        </p>
        <div className="cta-buttons">
          <Link to="/Projects" className="btn cta-primary">View My Projects</Link>
          <a href="/Contact" className="btn cta-secondary">Get In Touch</a>
        </div>
      </section>
    </div>
  );
}

export default Home;