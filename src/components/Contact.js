import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect" style={{ background: 'linear-gradient(to right, #1f4037, #99f2c8)', color: '#fff', padding: '50px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img 
                  className={isVisible ? "animate__animated animate__zoomIn" : ""} 
                  src={contactImg} 
                  alt="Contact Us" 
                  style={{ maxWidth: '100%', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ marginBottom: '20px', color: '#FFD700' }}>Let's Work Together</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1 mb-3">
                        <input 
                          type="text" 
                          value={formDetails.firstName} 
                          placeholder="Your Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                          style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', width: '100%' }}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1 mb-3">
                        <input 
                          type="email" 
                          value={formDetails.email} 
                          placeholder="Your Email" 
                          onChange={(e) => onFormUpdate('email', e.target.value)} 
                          style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', width: '100%' }}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1 mb-3">
                        <input 
                          type="tel" 
                          value={formDetails.phone} 
                          placeholder="Your Phone" 
                          onChange={(e) => onFormUpdate('phone', e.target.value)} 
                          style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', width: '100%' }}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1 mb-3">
                        <input 
                          type="text" 
                          value={formDetails.subject} 
                          placeholder="Subject" 
                          onChange={(e) => onFormUpdate('subject', e.target.value)} 
                          style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', width: '100%' }}
                        />
                      </Col>
                      <Col size={12} className="px-1 mb-3">
                        <textarea 
                          rows="6" 
                          value={formDetails.message} 
                          placeholder="Message" 
                          onChange={(e) => onFormUpdate('message', e.target.value)} 
                          style={{ borderRadius: '5px', border: '1px solid #ccc', padding: '10px', width: '100%' }}
                        />
                      </Col>
                      <Col size={12} className="px-1 mb-3">
                        <button 
                          type="submit" 
                          style={{ background: '#FFD700', color: '#333', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}
                          onMouseOver={(e) => e.target.style.background = '#ffae00'}
                          onMouseOut={(e) => e.target.style.background = '#FFD700'}
                        >
                          {buttonText}
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"} style={{ color: status.success ? '#28a745' : '#dc3545' }}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
