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
import cert5 from "../assets/cert5.png";
import cert6 from "../assets/cert6.png";
import "../css/Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

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
      longDescription: 
        "The Problem:\nPrior to the platform's live launch, it required rigorous stability checks and accurate database routing to prevent data corruption and ensure a seamless user experience.\n\nThe Solution & My Role:\nAs an IT Web Development Intern, I spearheaded the QA testing phase, identifying and documenting critical frontend and backend bugs. Furthermore, I took charge of the backend database configuration. I successfully utilized Prisma to safely route and migrate database schemas directly to the production 'sarisariph' database without disrupting existing services.",
      image: project1Image,
      tags: ["React.js","Next.js", "QA Testing", "Prisma", "Git/GitHub"],
      liveUrl: "#",
      githubUrl: "https://github.com/walteribloguintoledo/sarisariph.com.git",
    },
    {
      id: 3,
      type: "projects",
      title: "Smart Cafeteria Management System (Capstone)",
      description:
        "Led a development team to build a high-performance web-based cafeteria management system. Architected the platform using Laravel, PHP, and Blade templating.",
      longDescription: 
        "The Problem:\nUniversity cafeterias often face long queues, manual order tracking errors, and inefficient inventory management during peak hours.\n\nThe Solution & My Role:\nServing as the Lead Developer, I collaborated with a development team to build a comprehensive cafeteria management platform from the ground up. I architected the system using Laravel and PHP for robust backend processing, and utilized Blade templating alongside JavaScript and CSS for a seamless, dynamic user interface. I managed our version control via GitHub and successfully executed the live production deployment and server configuration on DigitalOcean.",
      image: project3Image,
      tags: ["Laravel", "PHP", "Blade", "MySQL", "DigitalOcean"],
      liveUrl: "#",
      githubUrl: "https://github.com/zyralabasan/Smart-Cafeteria-Management-System.git",
    },
    {
      id: 2,
      type: "projects",
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with JavaScript and ReactJS, showcasing creative design, data analysis, and web development projects.",
      longDescription: 
        "The Problem:\nI needed a centralized, professional platform to showcase my versatile skills across full-stack development, cloud deployment, and UI/UX design, moving beyond a standard paper resume.\n\nThe Solution & My Role:\nI designed and developed this custom React.js portfolio from scratch. I utilized Tailwind CSS for a fully responsive, mobile-first design, implemented dynamic JavaScript filtering for my projects, and engineered modal components for detailed case studies to provide recruiters with deeper insights into my workflow.",
      image: project2Image,
      tags: ["Javascript", "ReactJS", "HTML/CSS", "Tailwind"],
      liveUrl: "#",
      githubUrl: "https://github.com/zyralabasan/portfolio.git",
    },
    {
      id: 4,
      type: "projects",
      title: "Payroll Management System",
      description:
        "A dedicated web application designed to streamline employee record management, automate salary calculations, and generate accurate payroll reports.",
      longDescription: 
        "The Problem:\nManaging employee hours, calculating wages, and generating payslips manually is error-prone, time-consuming, and highly inefficient for growing businesses.\n\nThe Solution & My Role:\nI developed an automated Payroll Management System to handle these administrative and financial tasks securely. Built with Python for robust backend logic, alongside HTML, SCSS, and JavaScript for a clean, responsive user interface, the system seamlessly tracks employee data and generates automated salary reports, drastically reducing manual calculation errors.",
      image: project4Image,
      tags: ["Python", "Django", "HTML/CSS", "SCSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/zyralabasan/PMS.git",
    },
    {
      id: 5,
      type: "projects",
      title: "Movie Recommendations",
      description:
        "Discover personalized movie suggestions tailored to your unique tastes, powered by cutting-edge data analysis and creative design.",
      longDescription: 
        "The Problem:\nUsers often struggle to find movies aligned with their specific tastes without scrolling through overwhelming, generic lists on standard media sites.\n\nThe Solution & My Role:\nI built a personalized recommendation engine to streamline content discovery. Using PHP for backend logic and AJAX for seamless, page-refresh-free data retrieval, I designed a clean HTML/CSS interface. The application dynamically fetches and displays movie suggestions based on user input, creating an engaging and highly interactive user experience.",
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
      tags: ["UX/UI Design", "E-commerce", "Canva", "Wireframing"],
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
      longDescription:
        "The Problem:\nThe client needed a fresh, modern brand identity for their sportswear line that could seamlessly translate across digital platforms and physical merchandise, maintaining visual fidelity at any scale.\n\nThe Solution & My Role:\nWorking as a Freelance Graphic Designer, I developed a comprehensive brand kit. I engineered scalable vector logos in SVG format ensuring no loss of quality for large prints. I also designed precise layout files for woven clothing labels and generated high-quality jersey mockups to help the client visualize the final manufactured product.",
      image: proto4Image,
      tags: ["Graphic Design", "SVG", "Canva"],
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
      image: cert6,
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
    },
    {
      id: 15,
      type: "certificates",
      title: "Intro to IT and AWS Cloud",
      description: "Authorized by Amazon Web Services and offered through Coursera, covering foundational IT concepts and AWS Cloud basics.",
      image: cert5,
      tags: ["Coursera", "AWS", "IT Foundations"],
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

  const Card = ({ title, description, longDescription, image, tags, githubUrl, type, prototypeUrl, prototypeUrl2 }) => (
    <div className="group card-container flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="image-wrapper">
        <img
          src={image}
          alt={title}
          className="card-image"
          onClick={() => openModal(image)}
        />
        {(image || githubUrl || prototypeUrl || prototypeUrl2) && (
          <div className="overlay-actions">
            {image && (
              <button
                onClick={() => openModal(image)}
                className="action-button"
                title="View Image"
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
                title="View Link"
              >
                <FiLink className="icon-color" />
              </a>
            )}
            
            {prototypeUrl2 && (
              <a
                href={prototypeUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
                title="View Second Link"
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
                title="View Code"
              >
                <FiGithub className="icon-color" />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="card-content flex-grow flex flex-col">
        <h3 className="card-title">
          {type === 'certificates' && <FiAward className="icon-color-blue" />}
          {title}
        </h3>
        <p className="card-description flex-grow">{description}</p>
        
        {/* NEW: Read Case Study Button */}
        {longDescription && (
          <button 
            onClick={() => setSelectedProject({ title, longDescription, tags })}
            className="mb-4 text-blue-600 hover:text-blue-800 text-sm font-bold text-left transition-colors"
          >
            Read Case Study &rarr;
          </button>
        )}

        <div className="card-tags mt-auto pt-2 border-t border-gray-100">
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

// NEW: Mobile-Responsive Case Study Text Modal Component
  const ProjectTextModal = ({ project, onClose }) => {
    if (!project) return null;

    const handleBackdropClick = (e) => {
      if (e.target.id === 'text-modal-backdrop') {
        onClose();
      }
    };

    return (
      <div
        id="text-modal-backdrop"
        className="modal-backdrop"
        onClick={handleBackdropClick}
      >
        <div
          className="relative max-w-2xl w-full bg-white rounded-lg shadow-2xl mx-4 flex flex-col max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fixed Header Section */}
          <div className="p-6 md:p-8 pb-4 shrink-0 border-b border-gray-100 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <FiX size={20} />
            </button>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900 pr-10">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Scrollable Text Section */}
          <div className="p-6 md:p-8 overflow-y-auto text-gray-700 whitespace-pre-wrap leading-relaxed">
            {project.longDescription}
          </div>
        </div>
      </div>
    );
  };

return (
    <>
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
      </div>

      {/* Modals are now safely OUTSIDE the animated container */}
      <ImageModal image={selectedImage} onClose={closeModal} />
      <ProjectTextModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Projects;