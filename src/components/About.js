import React from "react";
import profileImage from "../assets/profile.jpg";
import { Card, CardContent } from "../components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs";
import { Progress } from "../components/ui/Progress";
import { Badge } from "../components/ui/Badge";
import "../css/About.css";

function About() {
  const skills = [
    { name: "Adobe Creative Suite", level: 90, category: "design" },
    { name: "Python", level: 75, category: "data" },
    { name: "React", level: 80, category: "web" },
    { name: "Figma", level: 85, category: "design" },
    { name: "Canva", level: 85, category: "design" },
    { name: "SQL", level: 70, category: "data" },
    { name: "JavaScript", level: 75, category: "web" },
    { name: "Tableau", level: 65, category: "data" },
    { name: "PHP", level: 70, category: "web" },
    { name: "Node.js", level: 70, category: "web" },
  ];

  return (
    <div className="about-container page-transition">
      <div className="section-header">
        <h1 className="main-title">About Me</h1>
        <p className="subtitle">
          Get to know the person behind the designs and data
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
              Graphic Designer & Data Analyst
            </p>
            <p className="profile-detail">📍 Isabela, Phiilippines</p>
            <p className="profile-detail">📆 Available for projects</p>
            <p className="profile-detail">📧 labasanzyramae24@gmail.com</p>
          </CardContent>
        </Card>

        {/* Right Column: Tabs */}
        <div>
          <Tabs defaultValue="story">
            <TabsList className="tabs-list">
              <TabsTrigger value="story" className="tab-trigger">My Story</TabsTrigger>
              <TabsTrigger value="skills" className="tab-trigger">Skills</TabsTrigger>
              <TabsTrigger value="experience" className="tab-trigger">Experience</TabsTrigger>
            </TabsList>

            {/* My Story Tab */}
            <TabsContent value="story">
              <Card className="tab-card">
                <CardContent className="tab-content">
                  <h3 className="tab-title">My Journey</h3>
                  <p>
                    I'm a passionate creative professional who found my calling
                    at the intersection of design and data. What started as a love
                    for visual storytelling has evolved into a unique skill set
                    that combines aesthetic sensibility with analytical thinking.
                  </p>
                  <p>
                    During my studies in Information Technology , I discovered that data
                    could tell stories just as compelling as any visual design.
                    This realization led me to develop expertise in both graphic
                    design and data analysis, allowing me to create solutions that
                    are both beautiful and meaningful.
                  </p>
                  <p>
                    Today, I help businesses communicate their message through
                    striking visuals while also uncovering insights that drive
                    informed decision-making.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">                                                  {/*This tab uses the skills array you defined earlier.*/}
              <Card className="tab-card">                                                 {/*It uses the map() method to loop through each item in the array*/}
                <CardContent className="tab-content-skills">                              {/*and create a new div for each skill.*/}
                  <h3 className="tab-title mb-4">Technical Skills</h3>
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

            {/* Experience Tab */}
            <TabsContent value="experience">
              <Card className="tab-card">
                <CardContent className="tab-content-experience">
                  <h3 className="tab-title">Experience</h3>
                  <div className="experience-item">
                    <h4 className="experience-title">
                      Freelance Graphic Designer{" "}
                      <span className="experience-date">• 2022 - Present</span>
                    </h4>
                    <p className="experience-description">
                      Creating brand identities, marketing materials, and digital
                      designs and products for clients across industries.
                    </p>
                  </div>
                  <div className="experience-item">
                    <h4 className="experience-title">
                      Design Intern{" "}
                      <span className="experience-date">• 2024 - 2025</span>
                    </h4>
                    <p className="experience-description">
                      Assisted in developing creative concepts for campaigns and
                      gained experience in collaborative design processes.
                    </p>
                  </div>
                  <div className="experience-item">
                    <h4 className="experience-title">
                      Data Analysis Coursework{" "}
                      <span className="experience-date">• 2024 - 2025</span>
                    </h4>
                    <p className="experience-description">
                      Comprehensive study of statistical analysis, visualization,
                      and machine learning techniques.
                    </p>
                  </div>

                  <h3 className="tab-title education-title-mt">Education</h3>
                  <div className="education-item">
                    <h4 className="education-title">
                      Bachelor of Science in Information Technology{" "}
                      <span className="education-date">• 2021 - 2026</span>
                    </h4>
                    <p className="education-description">
                      Focus on using computer systems, hardware, software, and networks to manage, process, store, secure, 
                      and exchange all forms of electronic data
                    </p>
                  </div>
                  <div className="education-item">
                    <h4 className="education-title">
                      Graphic Design Certificate{" "}
                      <span className="education-date">• 2026 - 2027</span>
                    </h4>
                    <p className="education-description">
                      Studied visual communication, typography, and branding.
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