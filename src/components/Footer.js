import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={4}>
          
          <div className="social-icon">
          <h3>Follow me</h3>
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
          <Col size={12} sm={4} className="text-center ">
            
            <p>Mail me: mohammdkyoud@gmail.com</p>
            <p>Call me: +212 672246772</p>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            
            <p><a  href="#">ELKYOUD Mohammed</a>. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
