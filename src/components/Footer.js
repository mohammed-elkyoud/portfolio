import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/undraw_firmware_3fxd.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer 
      className="footer" 
      style={{ background: "linear-gradient(to right, #1f4037, #99f2c8)", color: "#fff", padding: "40px 0" }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Colonne gauche : Logo et message */}
          <Col xs={12} sm={4} className="d-flex flex-column align-items-center text-center">
  <img 
    src={logo} 
    alt="Logo" 
    style={{ maxWidth: "400px", marginBottom: "25px" }} 
  />
  <p style={{ fontSize: "16px", margin: 0, color: "rgb(255, 255, 255)" }}>
    Passionate developer. Focused on creating impactful solutions.
  </p>
  <br />
</Col>

         
          {/* Colonne centrale : Réseaux sociaux */}
          <Col xs={12} sm={4} className="text-center">
            <h4 style={{ color: "#FFD700", marginBottom: "20px" }}>Follow Me</h4>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohammed-elkyoud/" style={{ margin: "0 10px" }}>
                <img 
                  src={navIcon1} 
                  alt="LinkedIn" 
                  style={{ filter: "invert(100%) brightness(200%)", width: "30px", height: "30px" }}
                />
              </a>
              <a href="https://github.com/mohammed-elkyoud" style={{ margin: "0 10px" }}>
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
            <br/>
            <br/>
          </Col>
          
          {/* Colonne droite : Contact et copyright */}
          <Col xs={12} sm={4} className="text-center text-sm-end">
            <div style={{ marginBottom: "15px" }}>
              <p style={{ fontWeight: "bold", fontSize: "14px", margin: 0, color: "rgb(255, 255, 255)" }}>Mail me: 
                <a 
                  href="mailto:mohammdkyoud@gmail.com" 
                  style={{ color: "rgb(255, 255, 255)", textDecoration: "none", marginLeft: "5px" }}
                >
                  mohammdkyoud@gmail.com
                </a>
              </p>
            
              <p style={{ fontWeight: "bold", fontSize: "14px", margin: 0, color: "rgb(255, 255, 255)" }}>Call me: 
                <a 
                  href="tel:+212672246772" 
                  style={{ color: "rgb(255, 255, 255)", textDecoration: "none", marginLeft: "5px" }}
                >
                  +212 672246772
                  +212 649068490
                </a>
              </p>
           
            <p style={{ fontSize: "14px", margin: 0, color: "rgb(255, 255, 255)" }}>
              &copy; <a href="#" style={{ color: "rgb(255, 255, 255)", textDecoration: "none", fontWeight: "bold" }}>Elkyoud Mohammed</a>. All Rights Reserved.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
      <br/>
    </footer>
  );
};
