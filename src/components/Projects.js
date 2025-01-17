import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import htmlcss from "../assets/img/htmlcss.png";
import javascript from "../assets/img/javascript.png";
import frontend from "../assets/img/frontend.png";
import tnb from "../assets/img/tnbimage.png";
import wordpress from "../assets/img/wordpress.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projets = [
    {
      title: "Application web de gestion des conférences et des cours",
      url: "",
      imgUrl: frontend,
    },
    {
      title: "Application web de gestion des taxes TNB",
    
      url: "",
      imgUrl: tnb,
    },
    {
      title: "Web developer",
     
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
      title: "React Basics",
     
      url: "https://www.coursera.org/account/accomplishments/verify/58CHS96CJR88",
      imgUrl: javascript,
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
                            <ProjectCard key={index} {...projet} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {certifications.map((certification, index) => (
                            <ProjectCard key={index} {...certification} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="gy-5 gx-4">
                          <Col sm={6}>
                            <h4>Master Artificial Intelligence and Computer Engineering</h4>
                            <p>2024 - 2026</p>
                            <hr style={{ borderColor: "#FFD700" }} />
                            <h5 style={{ color: "#333" }}>IAII (FST Marrakech)</h5>
                          </Col>
                          <Col sm={6}>
                            <h4>License in Distributed IT Systems</h4>
                          <br/>
                            <p>2023 - 2024</p>
                            <hr style={{ borderColor: "#FFD700" }} />
                            <h5 style={{ color: " #333" }}>SIR (FST Marrakech)</h5>
                          </Col>
                          <Col sm={6}>
                            <h4>University Degree in Science and Technology</h4>
                            <p>2020 - 2023</p>
                            <hr style={{ borderColor: "#FFD700" }} />
                            <h5 style={{ color: " #333" }}>DEUST MIPC (FST Marrakech)</h5>
                          </Col>
                          <Col sm={6}>
                            <h4>Baccalaureate</h4>
                            <br/>
                            <p>2019 - 2020</p>
                            <hr style={{ borderColor: "#FFD700" }} />
                            <h5  style={{ color: " #333" }}>PC: Physics and Chemistry</h5>
                          </Col>
                        </Row>
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
