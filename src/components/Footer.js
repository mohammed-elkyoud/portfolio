import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer 
      className="footer" 
      style={{ background: "linear-gradient(to right, #1f4037, #99f2c8)", color: "#fff", padding: "20px 0" }}
    >
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={4}>
            <div className="social-icon" style={{ textAlign: "center" }}>
              <h3 style={{ color: "#FFD700", marginBottom: "10px" }}>Follow Me</h3>
              <a href="https://www.linkedin.com/in/mohammed-elkyoud/" style={{ margin: "0 10px" }}>
                <img 
                  src={navIcon1} 
                  alt="LinkedIn" 
                  style={{ filter: "invert(100%) brightness(200%)", width: "30px", height: "30px" }}
                />
              </a>
              <a href="https://github.com/elkyoud-mohammed" style={{ margin: "0 10px" }}>
                <img 
                  src={navIcon2} 
                  alt="GitHub" 
                  style={{ filter: "invert(100%) brightness(200%)", width: "30px", height: "30px" }}
                />
              </a>
              <a href="https://www.instagram.com/mohammed_elkyoud?igsh=MTdoZHV3eW84ZG9l" style={{ margin: "0 10px" }}>
                <img 
                  src={navIcon3} 
                  alt="Instagram" 
                  style={{ filter: "invert(100%) brightness(200%)", width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </Col>
          <Col size={12} sm={4} className="text-center">
            <p style={{ margin: "10px 0", fontSize: "14px" }}>Mail me: <a href="mailto:mohammdkyoud@gmail.com" style={{ color: "#FFD700", textDecoration: "none" }}>mohammdkyoud@gmail.com</a></p>
            <p style={{ margin: "10px 0", fontSize: "14px" }}>Call me: <a href="tel:+212672246772" style={{ color: "#FFD700", textDecoration: "none" }}>+212 672246772</a></p>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <p style={{ margin: "10px 0", fontSize: "14px" }}>
              <a href="#" style={{ color: "#FFD700", textDecoration: "none", fontWeight: "bold" }}>Elkyoud Mohammed</a>. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
