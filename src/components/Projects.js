import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import htmlcss from "../assets/img/htmlcss.png";
import javascript from "../assets/img/javascript.png";
import frontend from "../assets/img/frontend.png";
import tnb from "../assets/img/tnbimage.png";
import wordpress from "../assets/img/wordpress.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projets = [
    {
      title: "Application web de gestion des conferences et des cours",
      description: "Compétences: Html5, Css3, Git, Github, laravel, MYSQL, PHP,UML,Merise. more about HTML5 & CSS3",
      url: "",
      imgUrl: frontend,
    },
    {
      title: "Application web de gestion des taxes TNB",
      description: "Compétences: Html5, Css3, Git, Github, Spring Boot, Angular, MYSQL ,UML.",
      url: "",
      imgUrl: tnb,
    },
    {
      title: "Web developer ",
      description: "Compétences: Android Studio, REST API, React.js, WordPress, Flutter",
      url: "https://offresexclusives.org/",
      imgUrl: wordpress,
    },
  ];
 

  const certifications = [
    {
      title: "HTML and CSS in depth",
      description: "Learn more about HTML5 & CSS3",
      url: "https://www.coursera.org/account/accomplishments/verify/58CHS96CJR88?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      imgUrl: htmlcss,
    },
    {
      title: "Programming with JavaScript",
      description: "JavaScript code - OOP - Creating & manipulating objects and arrays - DOM",
      url: "https://www.coursera.org/account/accomplishments/verify/8XVDH8G4HTA8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      imgUrl: javascript,
    },
    {
      title: "React Basics",
      description: "React - VDOM - React basics - React components - React hooks - React forms - React validation",
      url: "https://www.coursera.org/account/accomplishments/verify/58CHS96CJR88?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      imgUrl: javascript,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">My Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">My Certifications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Education</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                        <div id="tab-1">
                          <div className="row gy-5 gx-4">
                            <div className="col-sm-6">
                              <h5>License in Distributed IT Systems</h5>
                              <hr className="text-green my-2" />
                              <p className="text-green mb-1">2023 - 2024</p>
                              <h7 className="mb-0">SIR (FST Marrakech)</h7>
                            </div>
                            <div className="col-sm-6">
                              <h5>University Degree in Science and Technology</h5>
                              <hr className="text-green my-2" />
                              <p className="text-green mb-1">2020 - 2023</p>
                              <h7 className="mb-0">DEUST MIPC (FST Marrakech)</h7>
                            </div>
                            <div className="col-sm-6">
                              <h5>Baccalaureate</h5>
                              <hr className="text-green my-2" />
                              <p className="text-green mb-1">2019 - 2020</p>
                              <h7 className="mb-0">PC: Physics and Chemistry</h7>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
