import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home({ name }) {
  const skills = [
    { src: "/icons/code.svg", title: "Full-Stack Development", desc: "Building scalable web applications using React.js, Next.js, Laravel, and Django." },
    { src: "/icons/bar.svg", title: "Database & Cloud", desc: "Managing live deployments on DigitalOcean, AWS environments, and executing Prisma migrations." },
    { src: "/icons/palette.svg", title: "UX/UI & Graphic Design", desc: "Creating visually stunning digital and physical branding assets, including SVG vector logos." },
    { src: "/icons/lightbulb.svg", title: "Quality Assurance", desc: "Performing rigorous testing, bug identification, and ensuring system health for production deployments." },
  ];

  return (
    <div className="home-container page-transition">
      <section className="home-section">
        <div className="home-left">
          <p className="intro-text">Hi, I am</p>
          <h1 className="home-name">{name || "Zyra Mae P. Labasan"}</h1>
          <h2 className="home-role">
            Full Stack Web Developer | Aspiring Data Analyst | UX/UI Designer
          </h2>
          <p className="home-description">
            A detail-oriented IT professional with hands-on experience in full-stack web development, cloud deployment, and quality assurance. Proven ability to modernize legacy code, collaborate in development teams using Git, and deliver scalable web applications.
          </p>
          <div className="home-buttons">
            <a href="/Zyra_Mae_Labasan_Resume.pdf" className="btn primary" download>
              Download CV
            </a>
            <Link to="/Projects" className="btn secondary">
              View Projects
            </Link>
          </div>
        </div>

        <div className="home-right">
          <img
            src="/images/Subject.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </section>

      <section className="skills-section">
        <div className="section-header">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">Bridging the gap between creative design, modern web architectures, and live deployment</p>
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

      <section className="cta-section">
        <h2 className="section-title2">Ready to Build Something Amazing?</h2>
        <p className="section-subtitle2">
          Whether it's modernizing a web application, deploying to the cloud, or designing a brand identity, let's collaborate.
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