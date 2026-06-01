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
import proto4Image from "../assets/proto4.png"
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
      title: "SariSariPH E-commerce Platform (OJT)",
      description:
        "Conducted deep quality assurance testing prior to launch. Managed database routing and migrations using Prisma, specifically targeting the production sarisariph database.",
      image: project1Image,
      tags: ["React.js", "QA Testing", "Prisma", "Git/GitHub"],
      liveUrl: "#",
      githubUrl: "https://github.com/walteribloguintoledo/sarisariph.com.git",
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
      title: "Smart Cafeteria Management System (Capstone)",
      description:
        "Led a 3-person team to transition and modernize a legacy codebase into a high-performance web application. Executed live production deployment and server configuration on DigitalOcean.",      
      image: project3Image,
      tags: ["Next.js", "Prisma", "PostgreSQL", "DigitalOcean"],      
      liveUrl: "#",
      githubUrl: "https://github.com/zyralabasan/Smart-Cafeteria-Management-System.git",
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
      title: "SariSariPH E-commerce UI",
      description:
        "A comprehensive user interface prototype for a local e-commerce platform, detailing the user journey from product discovery to a seamless checkout experience.",
      image: proto3Image, 
      tags: ["UX/UI Design", "E-commerce", "Figma", "Wireframing"],
      liveUrl: "#",
      prototypeUrl: "https://sarisariph.com",
    },
    {
      id: 7,
      type: "prototypes",
      title: "Smart Cafeteria Management System UI",
      description:
        "A high-fidelity prototype ofordering system for a university cafeteria, including a web portal.",
      image: proto1Image,
      tags: ["UX/UI", "Figma", "Prototyping"],
      liveUrl: "#",
      prototypeUrl: "https://www.figma.com/proto/5EoXX1HpTjqhCfKdiIemq2/RET-Cafeteria---Prototype?node-id=747-11594&t=S1erEOKeNbwwa9tH-1",
    },
    {
      id: 8,
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
      id: 9,
      type: "prototypes",
      title: "Rebruv Athletics Branding",
      description:
        "Engineered visual brand identities, producing scalable SVG vector logos and designing precise layouts for physical merchandise including woven labels and jersey mockups.",
      image: proto4Image,
      tags: ["Graphic Design", "SVG", "Figma", "Canva"],
      liveUrl: "#",
      githubUrl: "#",
      prototypeUrl: "https://canva.link/bh5qfmz8ukigduw", 
      prototypeUrl2: "https://canva.link/9v7e7msav35bgyn", 
    },
  ];

const certificates = [
    {
      id: 10,
      type: "certificates",
      title: "AWS Academy Cloud Foundations",
      description: "Official certification validating fundamental proficiency in managing AWS Services, cloud concepts, and secure cloud configuration.",
      image: cert5,
      tags: ["AWS Academy", "Cloud Computing"],
      liveUrl: "#",
    },
    {
      id: 11,
      type: "certificates",
      title: "Concepts of OOP in PHP",
      description: "Certificate of participation for mastering the core concepts of Object-Oriented Programming in PHP.",
      image: cert4,
      tags: ["PHP", "OOP", "Backend"],
      liveUrl: "#",
    },
    {
      id: 12,
      type: "certificates",
      title: "Data Visualization using Bokeh",
      description: "Authorized by the Coursera Project Network, demonstrating proficiency in building interactive data visualizations.",
      image: cert1,
      tags: ["Coursera", "Data Visualization", "Bokeh"],
      liveUrl: "#",
    },
    {
      id: 13,
      type: "certificates",
      title: "Data Visualization",
      description: "Successfully completed the comprehensive Kaggle Learn course on Data Visualization techniques.",
      image: cert2,
      tags: ["Kaggle", "Data Analytics"],
      liveUrl: "#",
    },
    {
      id: 14,
      type: "certificates",
      title: "Pandas",
      description: "Successfully completed the Kaggle Learn course focused on data manipulation and analysis using the Pandas library.",
      image: cert3,
      tags: ["Kaggle", "Pandas", "Python"],
      liveUrl: "#",
    }
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
    
    setTimeout(() => {
      const modalBox = document.querySelector(".modal-content-wrapper");
      if (modalBox) {
        modalBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 50);
  };  

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Note the added prototypeUrl2 here!
  const Card = ({ title, description, image, tags, githubUrl, type, prototypeUrl, prototypeUrl2 }) => (
    <div className="group card-container">
      <div className="image-wrapper">
        <img
          src={image}
          alt={title}
          className="card-image"
          onClick={() => openModal(image)}
        />
        {/* Updated condition to also check for prototypeUrl2 */}
        {(image || githubUrl || prototypeUrl || prototypeUrl2) && (
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
            
            {/* Added rendering block for the second Canva link */}
            {prototypeUrl2 && (
              <a
                href={prototypeUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
              >
                <FiLink className="icon-color" />
              </a>
            )}

            {githubUrl && githubUrl !== "#" && (
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
            A showcase of my full-stack web development, digital design, and cloud deployment experience.
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

      </div>
      <ImageModal image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default Projects;