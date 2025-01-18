import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import htmlcss from "../assets/img/htmlcss.png";
import javascript from "../assets/img/javascript.png";
import frontend from "../assets/img/frontend.png";
import tnb from "../assets/img/tnbimage.png";
import wordpress from "../assets/img/wordpress.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ArtificialIntelligence from "../assets/img/ArtificialIntelligence.png";
import datascience from "../assets/img/data and data science.png";
import python from "../assets/img/python.png";
import dataclaening from "../assets/img/dataclaening.png";
import PowerBi from "../assets/img/PowerBi.png";
import bricoly from "../assets/img/bricoly.png";

import "animate.css";
import TrackVisibility from "react-on-screen";


export const Projects = () => {
  const projets = [
    {
      title: "Web application for managing conferences and courses",
      description: "HTML5, CSS3, Laravel, MySQL,PHP, UML, Merise.",
      url: "",
      imgUrl: frontend,
    },
    {
      title: "Web application for TNB tax management",
      description: "Angular, SpringBoot, MySQL, UML.",
      url: "",
      imgUrl: tnb,
    },
    {
      title: "Development of an innovative platform that addresses all needs on a freelance basis.",
      description: "ReactJs, NodeJs, ExpressJs, HTML5, CSS3",
      url: "https://bricoly-ma.netlify.app/",
      imgUrl: bricoly,
    },
    {
      title: "Development of a solution that enables users to design customized websites",
      description: "ReactJs, NodeJs, ExpressJs, HTML5, CSS3, Trello",
      url: "https://offresexclusives.org/",
      imgUrl: wordpress,
    },
    {
      title: "Development of a web application for jobs",
      description: "Wordpress, SEO",
      url: "https://offresexclusives.org/",
      imgUrl: wordpress,
    },
  ];

  const certifications = [
    {
      title: "HTML and CSS in depth",
      url: "https://www.coursera.org/account/accomplishments/verify/58CHS96CJR88",
      imgUrl: htmlcss,
    },
    {
      title: "Programming with JavaScript",
      url: "https://www.coursera.org/account/accomplishments/verify/8XVDH8G4HTA8",
      imgUrl: javascript,
    },
    {
      title: "IBM - Artificial Intelligence Fundamentals",
      url: "https://www.credly.com/badges/751b96a0-ce82-4fac-aa82-d7872af02625/linked_in_profile",
      imgUrl: ArtificialIntelligence,
    },
    {
      title: "365 Data Science - Introduction to Data and Data Science",
      url: "https://learn.365datascience.com/certificates/CC-B3B73F30A2/",
      imgUrl: datascience,
    },
    {
      title: "365 Data Science - Introduction to Python",
      url: "https://learn.365datascience.com/certificates/CC-F69CCEEBFB/",
      imgUrl: python,
    },
    {
      title: "365 Data Science - Data Cleaning and Preprocessing with pandas",
      url: "https://learn.365datascience.com/certificates/CC-6776AC0921/",
      imgUrl: dataclaening,
    },
    {
      title: "365 Data Science - Building Business Reports Using Power BI",
      url: "https://learn.365datascience.com/certificates/CC-1ABA9325E8/",
      imgUrl: PowerBi,
    },
  ];

  return (
    <section
      className="project"
      id="projects"
      style={{
        background: "linear-gradient(to left, #99f2c8, #1f4037)",
        color: "#fff",
        padding: "60px 0",
      }}
    >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2 style={{ textAlign: "center", color: "#FFD700" }}>
                    My Projects & Certifications
                  </h2>
                  <p style={{ textAlign: "center", marginBottom: "40px" }}>
                    Explore my professional and academic achievements below.
                  </p>
                  <br/>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="first"
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        >
                          My Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="second"
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        >
                          My Certifications
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="third"
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        >
                          Education
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projets.map((projet, index) => (
                            <ProjectCard
                              key={index}
                              {...projet}
                              className="project-card"
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {certifications.map((certification, index) => (
                            <ProjectCard
                              key={index}
                              {...certification}
                              className="certification-card"
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <br/>
                      <br/>
                        <Row className="gy-5 gx-4">
                          <Col sm={6}>
                            <h4>Master Artificial Intelligence and Computer Engineering</h4>
                            <p>2024 - 2026</p>
                            <hr style={{ borderColor: "#FFD700" }} />
                            <h5 style={{ color: "#333" }}>IAII (FST Marrakech)</h5>
                          </Col>
                          <Col sm={6}>
                            <h4>License in Distributed IT Systems</h4>
                            <p>2023 - 2024</p>
                            <hr style={{ borderColor: "#FFD700" }} />
                            <h5 style={{ color: "#333" }}>SIR (FST Marrakech)</h5>
                          </Col>
                         

                          <Col sm={6}>
                          <br/>
                          <br/>
                          <br/>
                            <h4>University Degree in Science and Technology</h4>
                            <p>2020 - 2023</p>
                            <hr style={{ borderColor: "#FFD700" }} />
                            <h5 style={{ color: "#333" }}>DEUST MIPC (FST Marrakech)</h5>
                          </Col>
                          <Col sm={6}>
                          <br/>
                          <br/>
                          <br/>
                            <h4>Baccalaureate</h4>
                            <p>2019 - 2020</p>
                            <hr style={{ borderColor: "#FFD700" }} />
                            <h5 style={{ color: "#333" }}>PC: Physics and Chemistry</h5>
                          </Col>
                        </Row>
                        <br/>
                        <br/>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
        style={{
          position: "absolute",
          right: "0",
          bottom: "0",
          opacity: "0.1",
        }}
      />
    </section>
  );
};
