import React, { useState } from "react";
import { FiGithub, FiAward, FiX, FiEye, FiLink } from "react-icons/fi";
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';
import project4Image from '../assets/project4.png';
import project5Image from '../assets/project5.png';
import proto1Image from "../assets/proto1.png"
import proto2Image from "../assets/proto2.png"
import proto3Image from "../assets/proto3.png"
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.png"
import "../css/Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: "all", label: "All" },
    { id: "projects", label: "Projects" },
    { id: "prototypes", label: "Prototypes" },
    { id: "certificates", label: "Certificates" },
  ];

  const projects = [
    {
      id: 1,
      type: "projects",
      title: "Booking System",
      description:
        "A user-friendly platform that seamlessly manages reservations and schedules to optimize booking efficiency.",
      image: project1Image,
      tags: ["PHP", "Django", "HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/zyralabasan/booking-system.git",
    },
    {
      id: 2,
      type: "projects",
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with JavaScript and ReactJS, showcasing creative design, data analysis, and web development projects.",
      image: project2Image,
      tags: ["Javascript", "ReactJS", "HTML/CSS", "Tailwind"],
      liveUrl: "#",
      githubUrl: "https://github.com/zyralabasan/portfolio.git",
    },
    {
      id: 3,
      type: "projects",
      title: "Cafeteria Management System",
      description:
        "Modern, responsive portfolio website built with React and interactive elements.",
      image: project3Image,
      tags: ["PHP", "JavaScript", "Laravel"],
      liveUrl: "#",
      githubUrl: "https://github.com/zyralabasan/cafeteria-system.git",
    },
    {
      id: 4,
      type: "projects",
      title: "Payroll Management System",
      description:
        "A full-stack web application for managing inventory, tracking stock levels, and generating reports.",
      image: project4Image,
      tags: ["React", "Node.js", "Django", "DBsqlite"],
      liveUrl: "#",
      githubUrl: "https://github.com/zyralabasan/PMS.git",
    },
    {
      id: 5,
      type: "projects",
      title: "Movie Recommendations",
      description:
        "Discover personalized movie suggestions tailored to your unique tastes, powered by cutting-edge data analysis and creative design.",
      image: project5Image,
      tags: ["PHP", "AJAX", "HTML/CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/zyralabasan/cinefeel.git",
    },
  ];
  const prototypes = [
    {
      id: 6,
      type: "prototypes",
      title: "Cafeteria Management System",
      description:
        "A high-fidelity prototype ofordering system for a university cafeteria, including a web portal.",
      image: proto1Image,
      tags: ["UX/UI", "Figma", "Prototyping"],
      liveUrl: "#",
      prototypeUrl: "https://www.figma.com/proto/5EoXX1HpTjqhCfKdiIemq2/RET-Cafeteria---Prototype?node-id=747-11594&t=S1erEOKeNbwwa9tH-1",
    },
    {
      id: 7,
      type: "prototypes",
      title: "CLSUnity Mobile Application",
      description:
        "A user-centered design prototype that facilitates the sale of university-related products, enabling students and staff to browse and purchase items conveniently.",
      image: proto2Image,
      tags: ["UX Research", "UI Design", "Canva"],
      liveUrl: "#",
      prototypeUrl: "https://www.canva.com/design/DAF-t2WE2Xs/LTJes9F3sckiGDqh2dpVFw/view?mode=prototype",
    },
    {
      id: 8,
      type: "prototypes",
      title: "Event Booking System",
      description:
        "An interactive platform prototype for booking and managing university events, allowing users to reserve spots and view event details seamlessly.",
      image: proto3Image,
      tags: ["Figma", "Wireframing"],
      liveUrl: "#",
      prototypeUrl: "https://www.figma.com/proto/5EoXX1HpTjqhCfKdiIemq2/RET-Cafeteria---Prototype?node-id=747-11594&t=S1erEOKeNbwwa9tH-1",

    },
  ];

  const certificates = [
    {
      id: 9,
      type: "certificates",
      title: "Data visualization",
      description: "Issued by Coursera, this certificate validates my proficiency in the data cleaning and visualization.",
      image: cert1,
      tags: ["Data Cleaning", "Data Visualization"],
      liveUrl: "#",
    },
    {
      id: 10,
      type: "certificates",
      title: "Python for Data Science",
      description: "A certificate from IBM covering core Python libraries for data analysis like Pandas and NumPy.",
      image: cert2,
      tags: ["Python", "Data Science", "Data Analytics"],
      liveUrl: "#",
    },
    {
      id: 11,
      type: "certificates",
      title: "Kaggle Crash Course",
      description: "Completed a comprehensive course on building modern front-end applications with React.",
      image: cert3,
      tags: ["Kaggle", "Web Dev"],
      liveUrl: "#",
    },
    {
      id: 12,
      type: "certificates",
      title: "Concepts of OOP in PHP",
      description: "A certificate proving my foundational skills in coding with PHP.",
      image: cert4,
      tags: ["PHP", "Code Igniter"],
      liveUrl: "#",
    },
    {
      id: 13,
      type: "certificates",
      title: "Introduction to AWS Cloud",
      description: "A certificate proving my foundational skills in managing AWS Services and Cloud.",
      image: cert5,
      tags: ["AWS Academy", "Coursera"],
      liveUrl: "#",
    },
  ];

  const allItems = [...projects, ...prototypes, ...certificates];

  const filteredItems =
    activeFilter === "all"
      ? allItems
      : allItems.filter((item) => item.type === activeFilter);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const Card = ({ title, description, image, tags, githubUrl, type, prototypeUrl }) => (
    <div className="group card-container">
      <div className="image-wrapper">
        <img
          src={image}
          alt={title}
          className="card-image"
          onClick={() => openModal(image)}
        />
        {(image || githubUrl || prototypeUrl) && (
          <div className="overlay-actions">
            {image && (
              <button
                onClick={() => openModal(image)}
                className="action-button"
              >
                <FiEye className="icon-color" />
              </button>
            )}

            {prototypeUrl && (
              <a
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
              >
                <FiLink className="icon-color" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
              >
                <FiGithub className="icon-color" />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">
          {type === 'certificates' && <FiAward className="icon-color-blue" />}
          {title}
        </h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag) => (
            <span
              key={tag}
              className="tag-badge"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    const handleBackdropClick = (e) => {
      if (e.target.id === 'modal-backdrop') {
        onClose();
      }
    };

    return (
      <div
        id="modal-backdrop"
        className="modal-backdrop"
        onClick={handleBackdropClick}
      >
        <div
          className="modal-content-wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="modal-close-button"
          >
            <FiX size={24} />
          </button>
          <img src={image} alt="Enlarged project view" className="modal-image" />
        </div>
      </div>
    );
  };

  return (
    <div className="projects-container page-transition">
      <div className="content-wrapper">
        <div className="page-header">
          <h1 className="main-title">My Portfolio</h1>
          <p className="subtitle">
            A showcase of my creative work, from projects and prototypes to professional certifications.
          </p>
        </div>

        {/* Filters */}
        <div className="filter-buttons-container">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`filter-button ${activeFilter === filter.id ? "active-filter" : ""}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="projects-grid">
          {filteredItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>

        <div className="load-more-container">
          <button className="load-more-button">
            Load More...
          </button>
        </div>
      </div>
      <ImageModal image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default Projects;