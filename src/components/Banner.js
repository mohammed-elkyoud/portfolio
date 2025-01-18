import { useState, useEffect } from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/LOGO.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50);
  const toRotate = ["Software Engineer", "Data Science"];
  const period = 500;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50);
    } else if (isDeleting) {
      setDelta(30);
    }
  };

  return (
    <section  id="home" style={{ background: 'linear-gradient(to right, #1f4037, #99f2c8)', color: '#fff' }}>
      <Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="mb-4">Hi! I'm <span style={{ color: '#FFD700' }}>Mohammed ELKYOUD</span></h1>
                  <h2 className="mb-4">
                    <span className="txt-rotate" data-rotate='["Software Engineer", "Data Sceince"]'>
                      {text}
                    </span>
                  </h2>
                  <p className="mb-4" style={{ color: 'rgb(255, 255, 255)' }}>
                  I am a developer passionate about technical challenges, involved in innovative projects, endowed with a collaborative spirit, and possessing a great capacity for adaptation. With solid experience in Agile Scrum, and frameworks like Laravel, ExpressJS, ReactJS and Spring Boot, I have acquired expertise in designing robust software architectures and creating high-performing solutions.
                  </p>
                  <div className="d-flex align-items-center">
  <a 
    href="/Elkyoud Mohammed CV.pdf" 
    className="btn btn-light py-3 px-4 me-3" 
    download
  >
    Download CV
  </a>
  <a href="#connect" className="btn btn-outline-light py-3 px-4">Contact Me</a>
</div>

                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={logo} alt="Header Img" style={{ maxWidth: '100%', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
    </section>
  );
};
