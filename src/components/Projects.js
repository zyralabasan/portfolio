// components/Projects.js
import React, { Component } from "react";
import "../css/Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { title: "Portfolio Website", desc: "Personal React-based portfolio." },
        { title: "Inventory System", desc: "CRUD system for managing items." },
        { title: "Smart Cafeteria", desc: "Web app with data analytics." },
      ],
    };
  }

  render() {
    return (
      <div className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {this.state.projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <button>View More</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
