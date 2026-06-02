import React from "react";
import profileImage from "../assets/profile.jpg";
import { Card, CardContent } from "../components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs";
import { Progress } from "../components/ui/Progress";
import { Badge } from "../components/ui/Badge";
import "../css/About.css";

function About() {
  const skills = [
    { name: "React.js / Next.js", level: 90, category: "frontend" },
    { name: "Laravel (PHP)", level: 85, category: "backend" },
    { name: "Django (Python)", level: 80, category: "backend" },
    { name: "PostgreSQL / Prisma", level: 85, category: "database" },
    { name: "DigitalOcean / AWS", level: 75, category: "cloud" },
    { name: "Git & GitHub", level: 85, category: "tools" },
    { name: "Figma & Canva", level: 90, category: "design" },
    { name: "Data Analysis (Pandas)", level: 75, category: "data" },
  ];

  return (
    <div className="about-container page-transition">
      <div className="section-header">
        <h1 className="main-title">About Me</h1>
        <p className="subtitle">
          Get to know the developer and designer behind the code
        </p>
      </div>

      <div className="about-layout">
        <Card className="profile-card">
          <CardContent className="profile-content">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />
            <h2 className="profile-name">Zyra Mae P. Labasan</h2>
            <p className="profile-role">
              Full Stack Web Developer
            </p>
            <p className="profile-detail">📍 Philippines</p>
            <p className="profile-detail">📆 Available for full-time IT roles</p>
            <p className="profile-detail">📧 zyramaelabasan0@gmail.com</p>
          </CardContent>
        </Card>

        <div>
          <Tabs defaultValue="story">
            <TabsList className="tabs-list">
              <TabsTrigger value="story" className="tab-trigger">My Story</TabsTrigger>
              <TabsTrigger value="skills" className="tab-trigger">Skills</TabsTrigger>
              <TabsTrigger value="experience" className="tab-trigger">Experience</TabsTrigger>
            </TabsList>

            <TabsContent value="story">
              <Card className="tab-card">
                <CardContent className="tab-content">
                  <h3 className="tab-title">My Developer Journey</h3>
                  <p>
                    I am a passionate IT professional who thrives at the intersection of robust backend architecture and intuitive user design. What started as a love for visual storytelling has evolved into a comprehensive technical skill set focused on modern web frameworks and live server deployment.
                  </p>
                  <p>
                    Through rigorous hands-on projects, I have transitioned from building basic layouts to modernizing legacy PHP code into high-performance Next.js and Prisma environments. I take pride in seeing a project through its entire lifecycle—from the initial wireframes to executing database migrations and successfully deploying live on platforms like DigitalOcean.
                  </p>
                  <p>
                    Today, I leverage my diverse background to bridge the gap between creative teams and engineering challenges, ensuring that digital solutions are not only highly functional and scalable, but also visually striking.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills">
              <Card className="tab-card">
                <CardContent className="tab-content-skills">
                  <h3 className="tab-title mb-4">Technical Frameworks & Skills</h3>
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span>{skill.name}</span>
                        <Badge variant="outline">{skill.category}</Badge>
                      </div>
                      <Progress value={skill.level} className="skill-progress" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience">
              <Card className="tab-card">
                <CardContent className="tab-content-experience">
                  <h3 className="tab-title">Professional Experience</h3>
                  
                  <div className="experience-item">
                    <h4 className="experience-title">
                      IT Web Development Intern (OJT) | SariSariPH{" "}
                      <span className="experience-date">• Jan 2026 - Apr 2026</span>
                    </h4>
                    <p className="experience-description">
                      Performed rigorous quality testing and bug identification. Executed database migrations using Prisma, specifically ensuring exact targeting for the production sarisariph database. Submitted comprehensive weekly system health reports.
                    </p>
                  </div>

                  <div className="experience-item">
                    <h4 className="experience-title">
                      Lead Developer (Capstone) | Cafeteria Management System{" "}
                      <span className="experience-date">• June 2025 - March 2026</span>
                    </h4>
                    <p className="experience-description">
                      Led a 3-person development team using Git version control. Transitioned legacy project architecture to modern frameworks utilizing Next.js, Prisma, and PostgreSQL. Successfully managed live cloud deployment on DigitalOcean.
                    </p>
                  </div>

                  <div className="experience-item">
                    <h4 className="experience-title">
                      Freelance Graphic Designer{" "}
                      <span className="experience-date">• Sept 2020 - Jan 2026</span>
                    </h4>
                    <p className="experience-description">
                      Designed comprehensive brand identities, vector logos (SVG format), and physical merchandise marketing materials such as woven labels and jersey mockups for clients like Rebruv Athletics.
                    </p>
                  </div>

                  <h3 className="tab-title education-title-mt">Education</h3>
                  <div className="education-item">
                    <h4 className="education-title">
                      Bachelor of Science in Information Technology{" "}
                      <span className="education-date">• Central Luzon State University</span>
                    </h4>
                    <p className="education-description">
                      Core focus on full-stack development, database management, APIs, and modern deployment methodologies. Graduate of AWS Academy Cloud Foundations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default About;