import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/LOGO.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50); // Vitesse de frappe initiale rapide
  const toRotate = ["Full-stack Developer (Laravel)", "Full-stack Developer (Wordpress)", "Apps Developer"];
  const period = 500; // Période de rotation rapide

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Pause après l'affichage complet
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50); // Revenir à la vitesse de frappe initiale
    } else if (isDeleting) {
      setDelta(30); // Vitesse de suppression rapide
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Hi! I'm </h1>
                  <span className="tagline">ELKYOUD Mohammed</span>
                  <h2>
  <span className="txt-rotate" data-rotate='["Full-stack Developer (Laravel)", "Full-stack Developer (WordPress)", "Apps Developer"]' data-period="2000">
    <span className="wrap" />
  </span>
</h2>

                  <p>
                    I am a developer passionate about technical challenges, involved in innovative projects, endowed with a collaborative spirit, and possessing a great capacity for adaptation. With solid experience in Agile Scrum, and frameworks like Laravel, Spring, and ReactJS, I have acquired expertise in designing robust software architectures and creating high-performing solutions
                  </p>
                  <div className="d-flex align-items-center pt-5">
                    <a href="ELKYOUD_CV.pdf" className="btn btn-danger py-3 px-4 me-5" download>Download CV</a>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={logo} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
